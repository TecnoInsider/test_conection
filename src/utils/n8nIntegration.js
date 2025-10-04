// n8n webhook integration utilities
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://your-n8n-webhook-url.com/webhook'
const N8N_CHAT_WEBHOOK_URL = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL || 'https://your-n8n-webhook-url.com/chat-webhook'

export const sendToN8n = async (data, webhookType = 'form') => {
  try {
    const webhookUrl = webhookType === 'chat' ? N8N_CHAT_WEBHOOK_URL : N8N_WEBHOOK_URL
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Source': 'landing-page'
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('n8n webhook error:', error)
    throw error
  }
}

export const sendFormData = async (formData) => {
  return await sendToN8n({
    type: 'form_submission',
    data: formData
  })
}

export const sendChatMessage = async (messageData) => {
  return await sendToN8n({
    type: 'chat_message',
    data: messageData
  }, 'chat')
}

export const sendLeadData = async (leadData) => {
  return await sendToN8n({
    type: 'lead_generation',
    data: leadData
  })
}