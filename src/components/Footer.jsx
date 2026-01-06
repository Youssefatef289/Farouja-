import { Link } from 'react-router-dom'
import Icon from './Icon'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <Icon name="chicken" className="logo-icon" size={32} />
              سوق الدواجن
            </h3>
            <p className="footer-description">
              مصدرك الموثوق لمنتجات الدجاج الطازجة والمجمدة عالية الجودة. 
              جودة يمكنك تذوقها، خدمة يمكنك الوثوق بها.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">روابط سريعة</h4>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/products">المنتجات</Link></li>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/contact">اتصل بنا</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">معلومات الاتصال</h4>
            <ul className="footer-contact">
              <li><Icon name="phone" size={20} /> 01099487977</li>
              <li><Icon name="email" size={20} /> info@poultrymarket.com</li>
              <li><Icon name="location" size={20} /> 123 Farm Road, City, Country</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">تابعنا</h4>
            <div className="social-links">
              <a href="#" aria-label="فيسبوك"><Icon name="facebook" size={32} /></a>
              <a href="#" aria-label="إنستغرام"><Icon name="instagram" size={32} /></a>
              <a href="#" aria-label="تويتر"><Icon name="twitter" size={32} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} سوق الدواجن. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

