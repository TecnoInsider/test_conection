// Google Analytics 4 utilities
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters
    })
  }
}

export const trackFormSubmit = (formType) => {
  trackEvent('form_submit', {
    event_label: formType,
    value: 1
  })
}

export const trackChatOpened = () => {
  trackEvent('chat_opened', {
    event_label: 'chat_popup',
    value: 1
  })
}

export const trackTabSwitch = (tabName) => {
  trackEvent('tab_switch', {
    event_label: tabName,
    value: 1
  })
}

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    event_label: `${depth}%`,
    value: depth
  })
}

export const trackPageView = (pageName) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href
    })
  }
}