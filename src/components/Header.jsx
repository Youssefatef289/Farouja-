import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartModal from './CartModal'
import Icon from './Icon'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartModalOpen, setCartModalOpen] = useState(false)
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

          <Link 
            to="/admin" 
            className={`admin-icon-link ${isActive('/admin')}`}
            onClick={() => setMobileMenuOpen(false)}
            title="لوحة التحكم"
            aria-label="لوحة التحكم"
          >
            <Icon name="person" size={24} />
          </Link>

          <button 
            className="cart-icon-link" 
            onClick={() => {
              setCartModalOpen(true)
              setMobileMenuOpen(false)
            }}
            aria-label="فتح سلة التسوق"
          >
            <Icon name="cart" size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>

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
      <CartModal isOpen={cartModalOpen} onClose={() => setCartModalOpen(false)} />
    </header>
  )
}

export default Header
