import React from 'react'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import TabsSection from './components/TabsSection'
import HowWeWork from './components/HowWeWork'
import Cases from './components/Cases'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ChatPopup from './components/ChatPopup'
import ScrollTracker from './components/ScrollTracker'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollTracker />
      <Hero />
      <Advantages />
      <TabsSection />
      <HowWeWork />
      <Cases />
      <Reviews />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      <ChatPopup />
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default App