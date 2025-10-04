import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { sendChatMessage } from '../utils/n8nIntegration'
import { trackChatOpened } from '../utils/analytics'

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Auto-welcome message
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: 'Привет! Я помогу подобрать решение: чат-бот или интеграции. Укажи нишу и цель — и получи предложение.',
          isBot: true,
          timestamp: new Date()
        }])
      }, 500)
    }
  }, [isOpen, messages.length])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }])
      setIsTyping(false)
    }, 1500)

    // Send to n8n webhook
    try {
      await sendChatMessage({
        message: inputValue,
        source: 'chat_popup'
      })
    } catch (error) {
      console.error('Chat webhook error:', error)
    }
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('бот') || input.includes('чат')) {
      return 'Отлично! Для какой ниши нужен бот? У нас есть готовые решения для красоты, фитнеса, образования, e-commerce. Также можем создать кастомное решение с ИИ.'
    }
    
    if (input.includes('интеграц') || input.includes('n8n')) {
      return 'Интеграции n8n - это мощный инструмент для автоматизации! Мы можем подключить любые API, CRM, email-сервисы. Что именно нужно автоматизировать?'
    }
    
    if (input.includes('цена') || input.includes('стоимость') || input.includes('тариф')) {
      return 'У нас гибкие тарифы: Чат-боты от 200€, с ИИ от 500€, интеграции n8n от 250€, кастомные решения от 900€. Хотите получить персональное предложение?'
    }
    
    if (input.includes('время') || input.includes('срок') || input.includes('дней')) {
      return 'Средний срок разработки 7-14 дней. Простые боты - от 7 дней, сложные решения с ИИ - до 14 дней. Точные сроки обсудим на консультации.'
    }
    
    if (input.includes('контакт') || input.includes('связать') || input.includes('связь')) {
      return 'Конечно! Оставьте заявку через форму на сайте или напишите ваш контакт - я передам менеджеру. Свяжемся в течение дня!'
    }
    
    return 'Понял! Расскажите подробнее о ваших задачах - какой результат хотите получить? Это поможет подобрать оптимальное решение.'
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    trackChatOpened()
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 bg-gradient-emerald text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.05, 1],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl">💬</span>
          <span className="hidden sm:block font-semibold">AI Ассистент</span>
        </div>
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-emerald text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Ассистент</h3>
                    <p className="text-xs opacity-90">Онлайн</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-emerald text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напишите сообщение..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-emerald text-white px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                >
                  ➤
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatPopup