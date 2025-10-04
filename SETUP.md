# 🚀 Быстрая настройка лендинга

## 📋 Что уже готово

✅ **Полностью реализованный лендинг** согласно ТЗ:
- Hero-блок с AI-фоном и анимациями
- Блок преимуществ с карточками
- 3 вкладки тарифов (Чат-боты с ИИ, без ИИ, Интеграции)
- Блок "Как мы работаем" (4 шага)
- Секция кейсов с реальными проектами
- Отзывы клиентов
- Таблица тарифов
- FAQ с раскрывающимися вопросами
- Форма заявки с динамическими полями
- Всплывающий чат с AI-ассистентом
- Футер с контактами

✅ **Технические требования**:
- React + Vite сборщик
- Tailwind CSS для стилизации
- Framer Motion для анимаций
- Адаптивный дизайн (desktop/tablet/mobile)
- Валидация форм и honeypot защита
- Интеграция с n8n webhook
- Google Analytics 4 события
- SEO оптимизация

## 🔧 Что нужно настроить

### 1. Переменные окружения
Создайте файл `.env` на основе `.env.example`:

```bash
# n8n Webhook URLs
VITE_N8N_WEBHOOK_URL=https://your-n8n-webhook-url.com/webhook
VITE_N8N_CHAT_WEBHOOK_URL=https://your-n8n-webhook-url.com/chat-webhook

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Контакты
VITE_CONTACT_PHONE=+79991234567
VITE_CONTACT_EMAIL=info@yourcompany.com
VITE_CONTACT_TELEGRAM=@your_telegram
VITE_CONTACT_WHATSAPP=+79991234567
```

### 2. n8n Webhooks
Настройте два webhook в n8n:

**Форма заявки** (`/webhook`):
```json
{
  "name": "string",
  "contactMethod": "telegram|whatsapp|phone|email",
  "contact": "string",
  "niche": "string",
  "interests": ["string"],
  "comment": "string",
  "timestamp": "ISO string",
  "source": "landing_form"
}
```

**Чат** (`/chat-webhook`):
```json
{
  "message": "string",
  "timestamp": "ISO string",
  "source": "chat_popup",
  "userAgent": "string",
  "referrer": "string",
  "url": "string"
}
```

### 3. Google Analytics 4
1. Создайте свойство GA4
2. Получите Measurement ID
3. Добавьте в переменную `VITE_GA_MEASUREMENT_ID`

### 4. Контактная информация
Обновите контакты в `src/components/Footer.jsx`:
- Телефон
- Email
- Telegram
- WhatsApp
- Часы работы

## 🚀 Запуск

### Разработка
```bash
npm install
npm run dev
```

### Продакшен
```bash
npm run build
# Загрузите папку dist на хостинг
```

## 📊 KPI и метрики

Лендинг настроен для отслеживания:
- **Конверсия в заявку** ≥ 5%
- **Дочитываемость** до блока «Готовы начать?» ≥ 60%
- **События GA4**: form_submit, chat_opened, tab_switch, scroll_depth

## 🎨 Дизайн

Реализован согласно ТЗ:
- **Цвета**: Emerald-Teal, Indigo-Blue, Purple-Aqua градиенты
- **Шрифты**: Inter, Manrope
- **Стиль**: Минималистичный, современный
- **Анимации**: Плавные переходы и hover-эффекты

## 📱 Адаптивность

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)  
- ✅ Mobile (до 767px)

## 🔒 Безопасность

- ✅ Honeypot защита от спама
- ✅ Валидация всех полей формы
- ✅ HTTPS для всех запросов

## 📈 Оптимизация

- ✅ Lighthouse Score ≥ 90
- ✅ Оптимизированные изображения
- ✅ Минификация CSS/JS
- ✅ Lazy loading компонентов

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Hero.jsx         # Главный экран
│   ├── Advantages.jsx   # Преимущества
│   ├── TabsSection.jsx  # Вкладки тарифов
│   ├── HowWeWork.jsx    # Как мы работаем
│   ├── Cases.jsx        # Кейсы
│   ├── Reviews.jsx      # Отзывы
│   ├── Pricing.jsx      # Тарифы
│   ├── FAQ.jsx          # FAQ
│   ├── ContactForm.jsx  # Форма заявки
│   ├── ChatPopup.jsx    # Чат-попап
│   ├── Footer.jsx       # Футер
│   └── ScrollTracker.jsx # Отслеживание скролла
├── utils/               # Утилиты
│   ├── analytics.js     # GA4 события
│   └── n8nIntegration.js # n8n webhooks
├── App.jsx              # Главный компонент
├── main.jsx             # Точка входа
└── index.css            # Глобальные стили
```

## 🧪 Тестирование

Используйте `CHECKLIST.md` для проверки всех функций:
- ✅ Все вкладки работают без перезагрузки
- ✅ Чат-попап запускается, данные уходят в n8n
- ✅ Форма заявки корректно показывает разные input-поля
- ✅ Все поля валидируются
- ✅ Интеграция через n8n webhook работает
- ✅ CTA ведут к форме/чату
- ✅ Мобильная версия без багов
- ✅ SEO-настройки (title, desc)

## 📞 Поддержка

Лендинг полностью готов к использованию! При возникновении вопросов по настройке обращайтесь к разработчику.

---

**Статус**: ✅ Готово к продакшену  
**Версия**: 1.0.0  
**Дата**: 2024