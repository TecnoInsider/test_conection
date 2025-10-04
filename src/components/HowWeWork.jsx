import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Zoom-встреча для анализа вашей задачи',
    description: 'Обсуждаем ваши потребности, анализируем текущие процессы и определяем оптимальное решение',
    icon: '🎯',
    color: 'bg-gradient-emerald'
  },
  {
    number: '02',
    title: 'Подготовка архитектуры и сценариев',
    description: 'Создаем детальный план работы бота, разрабатываем сценарии диалогов и архитектуру интеграций',
    icon: '📋',
    color: 'bg-gradient-indigo'
  },
  {
    number: '03',
    title: 'Разработка и тесты (7–14 рабочих дней)',
    description: 'Программируем бота, настраиваем интеграции и проводим тестирование всех функций',
    icon: '⚙️',
    color: 'bg-gradient-purple'
  },
  {
    number: '04',
    title: 'Запуск и сопровождение',
    description: 'Деплоим решение, обучаем команду и обеспечиваем техническую поддержку',
    icon: '🚀',
    color: 'bg-gradient-emerald'
  }
]

const HowWeWork = () => {
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
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс от идеи до запуска
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 z-0"></div>
              )}

              <div className="card text-center relative z-10 group hover:-translate-y-2 transition-all duration-300">
                {/* Step Number */}
                <div className={`${step.color} text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${step.color} text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            Готовы начать? Запишитесь на бесплатную консультацию
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Получить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork