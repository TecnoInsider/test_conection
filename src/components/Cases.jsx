import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    id: 1,
    title: 'Бьюти-бот для салона красоты',
    description: 'Автоматизация записи на услуги и напоминаний клиентам',
    results: [
      'Увеличение записей на 40%',
      'Снижение no-show на 60%',
      'Экономия времени администратора на 80%'
    ],
    logo: '💄',
    industry: 'Красота и здоровье',
    duration: '10 дней'
  },
  {
    id: 2,
    title: 'Фитнес-бот для спортзала',
    description: 'Управление абонементами и расписанием тренировок',
    results: [
      'Рост продаж абонементов на 25%',
      'Автоматизация расписания',
      'Улучшение клиентского сервиса'
    ],
    logo: '💪',
    industry: 'Фитнес и спорт',
    duration: '12 дней'
  },
  {
    id: 3,
    title: 'Интеграция для интернет-магазина',
    description: 'Автоматизация обработки заказов и синхронизация с CRM',
    results: [
      'Сокращение времени обработки заказов на 70%',
      'Автоматическое обновление статусов',
      'Интеграция с 5+ сервисами'
    ],
    logo: '🛒',
    industry: 'E-commerce',
    duration: '14 дней'
  },
  {
    id: 4,
    title: 'Образовательный бот для онлайн-школы',
    description: 'Помощь студентам с вопросами и доступом к материалам',
    results: [
      'Снижение нагрузки на поддержку на 50%',
      'Улучшение вовлеченности студентов',
      '24/7 доступность помощи'
    ],
    logo: '🎓',
    industry: 'Образование',
    duration: '8 дней'
  }
]

const Cases = () => {
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
            Наши кейсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные проекты с измеримыми результатами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className="card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{caseItem.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {caseItem.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{caseItem.industry}</span>
                      <span>•</span>
                      <span>{caseItem.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {caseItem.description}
              </p>

              {/* Results */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Результаты:</h4>
                <ul className="space-y-2">
                  {caseItem.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-gradient-emerald rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-primary-200 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Успешный проект</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Хотите такой же результат для своего бизнеса?
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Обсудить проект
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Cases