import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackTabSwitch } from '../utils/analytics'

const tabs = [
  {
    id: 'ai-chatbots',
    title: 'Чат-боты с ИИ',
    price: 'от 500€',
    description: 'AI агенты с искусственным интеллектом',
    features: [
      'Понимание естественного языка',
      'Обучение на ваших данных',
      'Интеграция с CRM системами',
      'Аналитика и отчеты',
      'Многоязычная поддержка'
    ],
    segments: [
      { name: 'Малый бизнес', description: 'Автоматизация продаж и поддержки' },
      { name: 'Онлайн-школы', description: 'Помощь студентам 24/7' },
      { name: 'Магазины', description: 'Консультации по товарам' },
      { name: 'B2B компании', description: 'Квалификация лидов' }
    ]
  },
  {
    id: 'simple-chatbots',
    title: 'Чат-боты без ИИ',
    price: 'от 200€',
    description: 'Классические боты с готовыми сценариями',
    features: [
      'Готовые шаблоны диалогов',
      'Быстрая настройка',
      'Интеграция с Telegram',
      'Базовая аналитика',
      'Техническая поддержка'
    ],
    segments: [
      { name: 'Стартапы', description: 'Быстрый запуск с минимальными затратами' },
      { name: 'Кафе/рестораны', description: 'Прием заказов и бронирование' },
      { name: 'Салон красоты', description: 'Запись на услуги' },
      { name: 'Фитнес-центры', description: 'Расписание и абонементы' }
    ]
  },
  {
    id: 'integrations',
    title: 'Интеграции и ИИ-агенты',
    price: 'от 250€',
    description: 'n8n интеграции и автоматизация процессов',
    features: [
      'Интеграция с любыми API',
      'Автоматизация рабочих процессов',
      'ИИ-агенты для обработки данных',
      'Webhook интеграции',
      'Кастомные решения'
    ],
    segments: [
      { name: 'E-commerce', description: 'Автоматизация заказов и склада' },
      { name: 'Маркетплейсы', description: 'Синхронизация товаров и цен' },
      { name: 'CRM системы', description: 'Автоматическое обновление данных' },
      { name: 'Аналитика', description: 'Сбор и обработка метрик' }
    ]
  }
]

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('ai-chatbots')

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    trackTabSwitch(tabId)
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
            Наши решения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящее решение для вашего бизнеса
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-8 py-4 mx-2 mb-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-emerald text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.title}
              <div className="text-sm font-normal mt-1">{tab.price}</div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.map((tab) => (
              activeTab === tab.id && (
                <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Description */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold mb-4">{tab.title}</h3>
                      <p className="text-xl text-gray-600 mb-6">{tab.description}</p>
                      <div className="text-4xl font-bold gradient-text mb-6">{tab.price}</div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">Возможности:</h4>
                      <ul className="space-y-3">
                        {tab.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-gradient-emerald rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={scrollToForm}
                      className="btn-primary"
                    >
                      Заказать {tab.title.toLowerCase()}
                    </button>
                  </div>

                  {/* Right Column - Segments */}
                  <div>
                    <h4 className="text-xl font-semibold mb-6">Подходит для:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tab.segments.map((segment, index) => (
                        <motion.div
                          key={index}
                          className="card p-6 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <h5 className="font-semibold text-lg mb-2">{segment.name}</h5>
                          <p className="text-gray-600 text-sm">{segment.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TabsSection