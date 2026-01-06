import Icon from './Icon'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const phoneNumber = '01099487977'
  const whatsappNumber = '201099487977' // رقم واتساب بدون + أو 0

  const handleWhatsAppClick = () => {
    const message = "مرحباً! أود التواصل مع فروجة"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="floating-buttons">
      <button 
        className="floating-btn floating-btn-whatsapp"
        onClick={handleWhatsAppClick}
        aria-label="تواصل عبر واتساب"
        title="تواصل عبر واتساب"
      >
        <Icon name="whatsapp" size={28} />
      </button>
      <button 
        className="floating-btn floating-btn-phone"
        onClick={handlePhoneClick}
        aria-label="اتصل بنا"
        title="اتصل بنا"
      >
        <Icon name="phone" size={28} />
      </button>
    </div>
  )
}

export default FloatingButtons

