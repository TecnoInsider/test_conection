import React from 'react'
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    id: 'integrations',
    name: 'Интеграции (n8n)',
    price: 'от 250€',
    description: 'Автоматизация процессов и интеграции',
    features: [
      'Интеграция с любыми API',
      'Автоматизация рабочих процессов',
      'ИИ-агенты для обработки данных',
      'Webhook интеграции',
      'Кастомные решения',
      'Техническая поддержка'
    ],
    popular: false,
    color: 'border-gray-200'
  },
  {
    id: 'chatbot',
    name: 'Чат-бот (с ИИ или без)',
    price: 'от 200€',
    description: 'Готовые решения для автоматизации',
    features: [
      'Telegram/WhatsApp боты',
      'Готовые шаблоны диалогов',
      'Интеграция с CRM',
      'Базовая аналитика',
      'Обучение команды',
      'Техническая поддержка'
    ],
    popular: true,
    color: 'border-primary-500'
  },
  {
    id: 'custom',
    name: 'Кастомное решение',
    price: 'от 900€',
    description: 'Индивидуальная разработка',
    features: [
      'Полностью индивидуальный подход',
      'Сложные интеграции',
      'ИИ с обучением на ваших данных',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      'Гарантия результата'
    ],
    popular: false,
    color: 'border-gray-200'
  }
]

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative card border-2 ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-emerald text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-gray-500">
                  За проект
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-emerald rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToForm}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Заказать
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Что входит в стоимость?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">Включено в каждый тариф:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Консультация и анализ задач</li>
                  <li>• Разработка и настройка</li>
                  <li>• Тестирование и запуск</li>
                  <li>• Обучение команды</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Дополнительно:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Техническая поддержка 30 дней</li>
                  <li>• Интеграция с вашими системами</li>
                  <li>• Настройка аналитики</li>
                  <li>• Документация и инструкции</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Не уверены в выборе? Получите бесплатную консультацию
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary"
          >
            Получить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing