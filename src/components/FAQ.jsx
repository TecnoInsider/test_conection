import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    id: 1,
    question: 'Сколько времени занимает запуск?',
    answer: 'Средний срок разработки и запуска составляет 7-14 рабочих дней. Для простых ботов без ИИ - от 7 дней, для сложных решений с ИИ и интеграциями - до 14 дней. Точные сроки обсуждаются на консультации.'
  },
  {
    id: 2,
    question: 'Будет ли сопровождение?',
    answer: 'Да, мы предоставляем техническую поддержку в течение 30 дней после запуска. Включает исправление ошибок, небольшие доработки и консультации по использованию. Дополнительная поддержка доступна по отдельному тарифу.'
  },
  {
    id: 3,
    question: 'Обязательно ли подключать CRM?',
    answer: 'Нет, CRM не обязательна. Бот может работать автономно, сохраняя данные в собственную базу или отправляя уведомления в Telegram. Интеграция с CRM - это дополнительная возможность для автоматизации процессов.'
  },
  {
    id: 4,
    question: 'Как работает интеграция с n8n?',
    answer: 'n8n - это платформа для автоматизации рабочих процессов. Мы создаем интеграции, которые автоматически передают данные между различными системами: CRM, email, Telegram, Google Sheets и другими сервисами.'
  },
  {
    id: 5,
    question: 'Где хранится база знаний для ИИ?',
    answer: 'База знаний хранится в защищенном облачном хранилище. Вы можете загружать документы, FAQ, инструкции - ИИ будет использовать эту информацию для ответов клиентам. Данные шифруются и доступны только вам.'
  },
  {
    id: 6,
    question: 'Можно ли изменить бота после запуска?',
    answer: 'Да, бот можно дорабатывать и изменять. В течение 30 дней после запуска небольшие изменения входят в поддержку. Крупные доработки обсуждаются отдельно.'
  },
  {
    id: 7,
    question: 'Сколько сообщений может обработать бот?',
    answer: 'Количество сообщений не ограничено. Бот может обрабатывать тысячи сообщений одновременно без потери производительности. Мы используем масштабируемую архитектуру.'
  },
  {
    id: 8,
    question: 'Как происходит оплата?',
    answer: 'Оплата происходит поэтапно: 50% предоплата при подписании договора, 50% после сдачи проекта. Принимаем банковские переводы, карты, криптовалюту. Для юридических лиц работаем с НДС.'
  }
]

const FAQ = () => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between p-0"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-500 text-xl flex-shrink-0"
                  >
                    ▼
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для получения персональной консультации
            </p>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Задать вопрос
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ