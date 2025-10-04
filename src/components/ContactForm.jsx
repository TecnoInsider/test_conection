import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { sendFormData } from '../utils/n8nIntegration'
import { trackFormSubmit } from '../utils/analytics'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactMethod, setContactMethod] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm()

  const watchedContactMethod = watch('contactMethod')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Honeypot protection
      if (data.website) {
        throw new Error('Spam detected')
      }

      // Prepare data for n8n webhook
      const formData = {
        name: data.name,
        contactMethod: data.contactMethod,
        contact: data.contact,
        niche: data.niche,
        interests: data.interests || [],
        comment: data.comment,
        timestamp: new Date().toISOString(),
        source: 'landing_form'
      }

      // Send to n8n webhook
      await sendFormData(formData)
      
      toast.success('Спасибо! Свяжусь в течение дня')
      reset()
      setContactMethod('')
      
      // GA4 event
      trackFormSubmit('contact_form')
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Произошла ошибка. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const validateContact = (value) => {
    if (!value) return 'Поле обязательно для заполнения'
    
    switch (contactMethod) {
      case 'telegram':
        if (!value.startsWith('@')) {
          return 'Telegram username должен начинаться с @'
        }
        if (value.length < 5) {
          return 'Некорректный username'
        }
        break
      case 'whatsapp':
      case 'phone':
        const phoneRegex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/
        if (!phoneRegex.test(value)) {
          return 'Введите номер в формате +7 999 123 45 67'
        }
        break
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          return 'Введите корректный email'
        }
        break
      default:
        return 'Выберите способ связи'
    }
    return true
  }

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length === 0) return ''
    if (numbers.length <= 1) return `+${numbers}`
    if (numbers.length <= 4) return `+${numbers.slice(0, 1)} ${numbers.slice(1)}`
    if (numbers.length <= 7) return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4)}`
    if (numbers.length <= 9) return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7)}`
    return `+${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 9)} ${numbers.slice(9, 11)}`
  }

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку и получите персональное предложение
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Имя обязательно' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Ваше имя"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Способ связи *
                </label>
                <select
                  {...register('contactMethod', { 
                    required: 'Выберите способ связи',
                    onChange: (e) => setContactMethod(e.target.value)
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Выберите способ связи</option>
                  <option value="telegram">Telegram (username)</option>
                  <option value="whatsapp">WhatsApp (номер)</option>
                  <option value="phone">Телефон</option>
                  <option value="email">Email</option>
                </select>
                {errors.contactMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactMethod.message}</p>
                )}
              </div>

              {/* Dynamic Contact Field */}
              {contactMethod && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {contactMethod === 'telegram' && 'Telegram username *'}
                    {contactMethod === 'whatsapp' && 'WhatsApp номер *'}
                    {contactMethod === 'phone' && 'Номер телефона *'}
                    {contactMethod === 'email' && 'Email адрес *'}
                  </label>
                  <input
                    type={contactMethod === 'email' ? 'email' : 'text'}
                    {...register('contact', { 
                      validate: validateContact,
                      onChange: contactMethod === 'whatsapp' || contactMethod === 'phone' 
                        ? (e) => {
                            const formatted = formatPhoneNumber(e.target.value)
                            e.target.value = formatted
                          }
                        : undefined
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder={
                      contactMethod === 'telegram' ? '@username'
                      : contactMethod === 'whatsapp' || contactMethod === 'phone' ? '+7 999 123 45 67'
                      : contactMethod === 'email' ? 'example@email.com'
                      : ''
                    }
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
                  )}
                </motion.div>
              )}

              {/* Niche */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ниша
                </label>
                <select
                  {...register('niche')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Выберите нишу</option>
                  <option value="beauty">Красота и здоровье</option>
                  <option value="fitness">Фитнес и спорт</option>
                  <option value="education">Образование</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="restaurant">Рестораны и кафе</option>
                  <option value="b2b">B2B услуги</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Интересует
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'ai-chatbot', label: 'Чат-бот с ИИ' },
                    { value: 'simple-chatbot', label: 'Чат-бот без ИИ' },
                    { value: 'integrations', label: 'Интеграции n8n' },
                    { value: 'custom', label: 'Кастомное решение' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        value={option.value}
                        {...register('interests')}
                        className="mr-3 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  {...register('comment')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Расскажите о ваших задачах..."
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                {...register('website')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Отправляем...
                  </div>
                ) : (
                  'Отправить заявку'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm