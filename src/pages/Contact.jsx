import { useState } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    alert('شكراً لرسالتك! سنتواصل معك قريباً.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleWhatsAppClick = () => {
    const message = "مرحباً! أود التواصل مع سوق الدواجن."
    const whatsappUrl = `https://wa.me/201099487977?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">اتصل بنا</h1>
          <p className="page-subtitle">
            تواصل معنا للطلبات أو الاستفسارات أو أي أسئلة
          </p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-heading">تواصل معنا</h2>
              <p className="contact-description">
                نحن هنا لمساعدتك! تواصل معنا من خلال أي من القنوات التالية، 
                أو املأ النموذج وسنتواصل معك في أقرب وقت ممكن.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Icon name="phone" className="contact-icon" size={40} />
                  <div className="contact-text">
                    <h3>الهاتف</h3>
                    <p>01099487977</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Icon name="email" className="contact-icon" size={40} />
                  <div className="contact-text">
                    <h3>البريد الإلكتروني</h3>
                    <p>info@poultrymarket.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Icon name="location" className="contact-icon" size={40} />
                  <div className="contact-text">
                    <h3>العنوان</h3>
                    <p>123 Farm Road<br />City, Country 12345</p>
                  </div>
                </div>
              </div>

              <div className="whatsapp-contact">
                <Button
                  variant="whatsapp"
                  size="large"
                  onClick={handleWhatsAppClick}
                  className="whatsapp-button"
                >
                  <Icon name="whatsapp" size={20} /> تواصل عبر واتساب
                </Button>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">الاسم *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">الرسالة *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="large" className="submit-button">
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>

          <div className="map-container">
            <h2 className="section-title">اعثر علينا</h2>
            <div className="map-placeholder">
              <Icon name="map" className="map-icon" size={80} />
              <p>تكامل خرائط جوجل</p>
              <p className="map-note">
                سيتم دمج الخريطة هنا في الإنتاج
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
