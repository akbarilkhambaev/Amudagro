'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa'
import './page.css'

export default function Contacts() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    alert(t.language === 'ru' 
      ? 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
      : 'Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
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
          <span className="page-hero-label">Связаться с нами</span>
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
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.phone.title}</h3>
                  <p>+998 XX XXX XX XX</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.email.title}</h3>
                  <p>info@amudagro.uz</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.whatsapp}</h3>
                  <p>+998 XX XXX XX XX</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon telegram">
                  <FaTelegram />
                </div>
                <div className="info-content">
                  <h3>{t.contacts.telegram}</h3>
                  <p>@amudagro</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon instagram">
                  <FaInstagram />
                </div>
                <div className="info-content">
                  <h3>Instagram</h3>
                  <p>@amudagro</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>{t.contacts.form.send}</h2>
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
                    placeholder="Ваше имя"
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
                    placeholder="email@example.com"
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
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  {t.contacts.form.send}
                </button>
              </form>
            </div>
          </div>

          <div className="map-placeholder">
            <h3>Наше местоположение</h3>
            <p>Хорезмская область, Республика Узбекистан</p>
            <div className="map-frame">
              <p>Здесь будет карта</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

