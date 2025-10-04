import React from 'react'
import { motion } from 'framer-motion'

const advantages = [
  {
    icon: '🤖',
    title: 'Бот работает 24/7 и не уходит в отпуск',
    description: 'Автоматически отвечает на вопросы клиентов в любое время дня и ночи, обеспечивая непрерывную поддержку'
  },
  {
    icon: '💰',
    title: 'Снижение затрат на поддержку',
    description: 'Экономьте до 80% бюджета на поддержке клиентов, автоматизируя рутинные задачи'
  },
  {
    icon: '📈',
    title: 'Рост конверсии и продаж',
    description: 'Увеличьте конверсию на 15-30% благодаря мгновенным ответам и персонализированному подходу'
  },
  {
    icon: '⚡',
    title: 'Мгновенная обработка заявок',
    description: 'Заявки попадают в CRM или Telegram за секунды, не теряя ни одного потенциального клиента'
  }
]

const Advantages = () => {
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
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные решения для автоматизации вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="card text-center group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages