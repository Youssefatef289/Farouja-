import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import Icon from './Icon'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="/image/Logo-removebg-preview.png" 
              alt="فروجة"
              className="logo-image"
            />
            <span className="logo-text"></span>
          </Link>
          
          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setMobileMenuOpen(false)}>
              الرئيسية
            </Link>
            <Link to="/products" className={`nav-link ${isActive('/products')}`} onClick={() => setMobileMenuOpen(false)}>
              المنتجات
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setMobileMenuOpen(false)}>
              من نحن
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setMobileMenuOpen(false)}>
              اتصل بنا
            </Link>
          </nav>

          <Link to="/cart" className="cart-icon-link" onClick={() => setMobileMenuOpen(false)}>
            <Icon name="cart" size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>

          <button 
            className="mobile-menu-toggle" 
            aria-label="فتح القائمة"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
