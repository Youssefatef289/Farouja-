import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from './Button'
import Icon from './Icon'
import './CartModal.css'

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()

  const handleQuantityChange = (productId, change) => {
    const item = cartItems.find(item => item.id === productId)
    if (item) {
      const newQuantity = item.quantity + change
      updateQuantity(productId, newQuantity)
    }
  }

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return

    let message = "مرحباً! أود طلب المنتجات التالية:\n\n"
    
    cartItems.forEach((item, index) => {
      const itemTotal = (item.price * item.quantity).toFixed(2)
      message += `${index + 1}. ${item.name}\n`
      message += `   الكمية: ${item.quantity}\n`
      message += `   السعر للوحدة: ${item.price.toFixed(2)} جنيه\n`
      message += `   الإجمالي: ${itemTotal} جنيه\n\n`
    })

    const totalPrice = getTotalPrice().toFixed(2)
    message += `الإجمالي الكلي: ${totalPrice} جنيه\n\n`
    message += "يرجى تأكيد التوفر وتفاصيل التوصيل."

    const whatsappUrl = `https://wa.me/201099487977?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      <div className="cart-modal-overlay" onClick={onClose}></div>
      <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
        <div className="cart-modal-content-wrapper">
          <div className="cart-modal-header">
            <h2 className="cart-modal-title">
              <Icon name="cart" size={24} /> سلة التسوق
            </h2>
            <button className="cart-modal-close" onClick={onClose} aria-label="إغلاق السلة">
              <Icon name="close" size={24} />
            </button>
          </div>

        <div className="cart-modal-content">
          {cartItems.length === 0 ? (
            <div className="cart-modal-empty">
              <Icon name="cart" size={64} className="empty-cart-icon" />
              <p>سلة التسوق فارغة</p>
              <Link to="/products" onClick={onClose}>
                <Button variant="primary" size="medium">
                  تصفح المنتجات
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-modal-items">
                <div className="cart-modal-items-header">
                  <span>{cartItems.length} منتج{cartItems.length !== 1 ? 'ات' : ''}</span>
                  <button className="clear-cart-btn" onClick={clearCart}>
                    <Icon name="trash" size={18} /> مسح السلة
                  </button>
                </div>

                <div className="cart-modal-items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-modal-item">
                      <div className="cart-modal-item-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/80x80?text=Product+Image'
                          }}
                        />
                      </div>

                      <div className="cart-modal-item-info">
                        <Link to={`/products/${item.id}`} onClick={onClose}>
                          <h4 className="cart-modal-item-name">{item.name}</h4>
                        </Link>
                        <p className="cart-modal-item-price">
                          {item.price.toFixed(2)} جنيه
                        </p>

                        <div className="cart-modal-item-quantity">
                          <button
                            className="quantity-btn-small"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            aria-label="تقليل الكمية"
                          >
                            −
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button
                            className="quantity-btn-small"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            aria-label="زيادة الكمية"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-modal-item-actions">
                        <p className="cart-modal-item-total">
                          {(item.price * item.quantity).toFixed(2)} جنيه
                        </p>
                        <button
                          className="remove-item-btn-small"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="إزالة المنتج"
                          title="إزالة"
                        >
                          <Icon name="close" size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cart-modal-summary">
                <div className="cart-modal-summary-row">
                  <span>عدد المنتجات:</span>
                  <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
                <div className="cart-modal-summary-row total">
                  <span>الإجمالي:</span>
                  <span className="total-price">{getTotalPrice().toFixed(2)} جنيه</span>
                </div>

                <div className="cart-modal-actions">
                  <Button
                    variant="whatsapp"
                    size="large"
                    onClick={handleWhatsAppOrder}
                    className="full-width-button"
                  >
                    <Icon name="whatsapp" size={20} /> اطلب عبر واتساب
                  </Button>
                  <Link to="/cart" onClick={onClose}>
                    <Button variant="outline" size="large" className="full-width-button">
                      عرض السلة الكاملة
                    </Button>
                  </Link>
                </div>
              </div>
            </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartModal

