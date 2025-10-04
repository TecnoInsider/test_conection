import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Чат-боты и ИИ-агенты:
            <br />
            <span className="gradient-text">отвечают за секунды</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
            собирают заявки и экономят время
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Запуск от 7 дней. Лиды сразу в таблицу, Telegram или вашу CRM
          </p>
          
          <motion.button
            onClick={scrollToForm}
            className="btn-primary text-xl px-12 py-5 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Оставить заявку
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-200">Работает без выходных</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">7 дней</div>
            <div className="text-gray-200">Средний срок запуска</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5%+</div>
            <div className="text-gray-200">Конверсия в заявки</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero