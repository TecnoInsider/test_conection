import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    position: 'Владелец салона красоты "Элегант"',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Бот работает отлично! Клиенты записываются сами, получают напоминания. Мы экономим время администратора и увеличили количество записей на 40%. Очень довольны результатом.',
    project: 'Бьюти-бот'
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    position: 'Директор фитнес-центра "Атлет"',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Отличное решение для нашего спортзала. Бот помогает с расписанием, продает абонементы и отвечает на вопросы клиентов 24/7. Рекомендую!',
    project: 'Фитнес-бот'
  },
  {
    id: 3,
    name: 'Елена Козлова',
    position: 'Основатель онлайн-школы "Умные дети"',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'Студенты получили мгновенную помощь с домашними заданиями. Бот знает всю программу курса и может объяснить любой материал. Снизили нагрузку на преподавателей.',
    project: 'Образовательный бот'
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    position: 'Владелец интернет-магазина "ТехноМир"',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Интеграция с n8n помогла автоматизировать обработку заказов. Теперь все статусы обновляются автоматически, клиенты получают уведомления. Экономим много времени.',
    project: 'E-commerce интеграция'
  }
]

const Reviews = () => {
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
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{review.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {review.position}
                  </p>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-primary-600 font-medium">
                    {review.project}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </blockquote>

              {/* Quote Icon */}
              <div className="mt-4 flex justify-end">
                <div className="text-4xl text-primary-200 opacity-50">
                  "
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Успешных проектов</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">Техническая поддержка</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews