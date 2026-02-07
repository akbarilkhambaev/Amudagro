'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram, FaComment } from 'react-icons/fa'
import './page.css'

export default function Contacts() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: t.language === 'ru' 
            ? 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
            : t.language === 'uz'
            ? 'Xabaringiz uchun rahmat! Tez orada siz bilan bog\'lanamiz.'
            : 'Thank you for your message! We will contact you soon.'
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: t.language === 'ru'
          ? 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.'
          : t.language === 'uz'
          ? 'Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring yoki biz bilan to\'g\'ridan-to\'g\'ri bog\'laning.'
          : 'An error occurred while sending the message. Please try again later or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">{t.contacts.label}</span>
          <h1>{t.contacts.title}</h1>
          <p>{t.contacts.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contacts-content">
            <div className="contact-info">
              <h2>{t.contacts.title}</h2>
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.address.title}</h3>
                  <p>{t.contacts.address.value}</p>
                </div>
              </div>
              <a href="tel:+998909358100" className="info-item info-item-link">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.phone.title}</h3>
                  <p>+998 90 935 81 00</p>
                </div>
              </a>
              <a href="mailto:info@amudagro.uz" className="info-item info-item-link">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.email.title}</h3>
                  <p>info@amudagro.uz</p>
                </div>
              </a>
              <a href="https://wa.me/qr/H4XTW66UIB7XJ1" target="_blank" rel="noopener noreferrer" className="info-item info-item-link">
                <div className="info-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.whatsapp}</h3>
                  <p>{t.contacts.subtitle}</p>
                </div>
              </a>
              <a href="https://t.me/msabirov" target="_blank" rel="noopener noreferrer" className="info-item info-item-link">
                <div className="info-icon telegram">
                  <FaTelegram />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.telegram}</h3>
                  <p>{t.contacts.subtitle}</p>
                </div>
              </a>
              <a href="https://instagram.com/amudagro" target="_blank" rel="noopener noreferrer" className="info-item info-item-link">
                <div className="info-icon instagram">
                  <FaInstagram />
                </div>
                <div className="info-content">
                  <h3>Instagram</h3>
                  <p>{t.contacts.subtitle}</p>
                </div>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOJG7LyWWi_CPVHdYakpPnMud_fBbzKg2BEV9OX20Dwx_Rj-ONc" target="_blank" rel="noopener noreferrer" className="info-item info-item-link">
                <div className="info-icon max">
                  <FaComment />
                </div>
                <div className="info-content">
                  <h3>MAX</h3>
                  <p>{t.contacts.subtitle}</p>
                </div>
              </a>
            </div>

            <div className="contact-form-wrapper">
              <h2>{t.contacts.form.send}</h2>
              
              {submitStatus.type && (
                <div className={`form-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contacts.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder={t.contacts.form.namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.contacts.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder={t.contacts.form.emailPlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.contacts.form.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder={t.contacts.form.phonePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.contacts.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    disabled={isSubmitting}
                    placeholder={t.contacts.form.messagePlaceholder}
                  ></textarea>
                </div>
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting 
                    ? (t.language === 'ru' ? 'Отправка...' : t.language === 'uz' ? 'Yuborilmoqda...' : 'Sending...')
                    : t.contacts.form.send
                  }
                </button>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h3>{t.contacts.location || 'Наше местоположение'}</h3>
            <p>{t.contacts.address.value}</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.8756245999393!2d60.6703234!3d41.5286347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfcf43edd9ba57%3A0xf225fc9675f3905f!2sAmudagro!5e0!3m2!1sru!2s!4v1768844000026!5m2!1sru!2s"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMUDAGRO Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

