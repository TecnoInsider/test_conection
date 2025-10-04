# Инструкция по развертыванию

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения
Скопируйте `.env.example` в `.env` и заполните переменные:

```bash
cp .env.example .env
```

Обязательные переменные:
- `VITE_N8N_WEBHOOK_URL` - URL webhook для формы заявки
- `VITE_N8N_CHAT_WEBHOOK_URL` - URL webhook для чата
- `VITE_GA_MEASUREMENT_ID` - ID Google Analytics

### 3. Запуск в режиме разработки
```bash
npm run dev
```

### 4. Сборка для продакшена
```bash
npm run build
```

## 🔧 Настройка n8n Webhooks

### Форма заявки
Создайте webhook в n8n с URL: `https://your-domain.com/webhook`

Ожидаемые данные:
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

### Чат-попап
Создайте webhook в n8n с URL: `https://your-domain.com/chat-webhook`

Ожидаемые данные:
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

## 📊 Настройка Google Analytics 4

1. Создайте свойство GA4
2. Получите Measurement ID
3. Добавьте в переменную `VITE_GA_MEASUREMENT_ID`

Отслеживаемые события:
- `form_submit` - отправка формы
- `chat_opened` - открытие чата
- `tab_switch` - переключение вкладок
- `scroll_depth` - глубина скролла

## 🌐 Развертывание на хостинге

### Netlify
1. Подключите репозиторий к Netlify
2. Установите переменные окружения в настройках
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Подключите репозиторий к Vercel
2. Установите переменные окружения
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Установите `gh-pages`: `npm install --save-dev gh-pages`
2. Добавьте в `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Запустите: `npm run deploy`

## 🔒 SSL и безопасность

- Используйте HTTPS для всех запросов
- Настройте CORS для webhook'ов
- Добавьте rate limiting для API
- Используйте CSP заголовки

## 📈 Мониторинг и аналитика

### Lighthouse
Цель: Score ≥ 90 по всем метрикам
- Performance
- Accessibility
- Best Practices
- SEO

### Мониторинг ошибок
Рекомендуется добавить:
- Sentry для отслеживания ошибок
- LogRocket для записи сессий
- Hotjar для анализа поведения

## 🧪 Тестирование

### Функциональные тесты
- [ ] Все вкладки работают без перезагрузки
- [ ] Чат-попап открывается и отправляет данные
- [ ] Форма валидирует поля корректно
- [ ] Динамические поля отображаются правильно
- [ ] n8n webhook получает данные
- [ ] GA4 события отправляются

### Кроссбраузерное тестирование
- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

### Мобильное тестирование
- iOS Safari
- Android Chrome
- Различные размеры экранов

## 🚨 Troubleshooting

### Проблемы с webhook'ами
1. Проверьте URL в переменных окружения
2. Убедитесь, что n8n доступен извне
3. Проверьте CORS настройки
4. Проверьте логи в n8n

### Проблемы с GA4
1. Проверьте Measurement ID
2. Убедитесь, что gtag загружается
3. Проверьте события в GA4 Real-time

### Проблемы с производительностью
1. Проверьте размер bundle'а
2. Оптимизируйте изображения
3. Включите gzip сжатие
4. Используйте CDN

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи в консоли браузера
2. Проверьте Network tab в DevTools
3. Убедитесь, что все переменные окружения установлены
4. Проверьте доступность внешних сервисов