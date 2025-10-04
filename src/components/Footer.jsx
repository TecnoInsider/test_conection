import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Чат-боты и ИИ-агенты
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Автоматизируем ваш бизнес с помощью современных технологий. 
              Чат-боты, ИИ-агенты и интеграции для роста продаж и экономии времени.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-2xl">📱</span>
              </a>
              <a
                href="https://wa.me/your_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-2xl">💬</span>
              </a>
              <a
                href="mailto:info@yourcompany.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-2xl">📧</span>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#tabs" className="hover:text-white transition-colors duration-300">
                  Чат-боты с ИИ
                </a>
              </li>
              <li>
                <a href="#tabs" className="hover:text-white transition-colors duration-300">
                  Чат-боты без ИИ
                </a>
              </li>
              <li>
                <a href="#tabs" className="hover:text-white transition-colors duration-300">
                  Интеграции n8n
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors duration-300">
                  Кастомные решения
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+79991234567" className="hover:text-white transition-colors duration-300">
                  +7 999 123 45 67
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:info@yourcompany.com" className="hover:text-white transition-colors duration-300">
                  info@yourcompany.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  @your_telegram
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Все права защищены
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Условия использования
            </a>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Наверх ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer