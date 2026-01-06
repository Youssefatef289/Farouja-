import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from '../components/Button'
import Icon from '../components/Icon'
import './Cart.css'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const total = getCartTotal()

  const handleQuantityChange = (productId, change) => {
    const item = cartItems.find(item => item.id === productId)
    if (item) {
      const newQuantity = item.quantity + change
      if (newQuantity <= 0) {
        removeFromCart(productId)
      } else {
        updateQuantity(productId, newQuantity)
      }
    }
  }

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return

    let message = "مرحباً! أود طلب المنتجات التالية:\n\n"
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   الكمية: ${item.quantity}\n`
      message += `   السعر: ${item.price.toFixed(2)} جنيه\n`
      message += `   الإجمالي: ${(item.price * item.quantity).toFixed(2)} جنيه\n\n`
    })
    message += `الإجمالي الكلي: ${total.toFixed(2)} جنيه\n\n`
    message += "يرجى تأكيد التوفر وتفاصيل التوصيل."

    const whatsappUrl = `https://wa.me/201099487977?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title fade-in-up">سلة التسوق</h1>
            <p className="page-subtitle fade-in-up">عربة التسوق الخاصة بك</p>
          </div>
        </div>

        <section className="cart-section section">
          <div className="container">
            <div className="empty-cart fade-in-up">
              <Icon name="cart" size={80} className="empty-cart-icon" />
              <h2>سلة التسوق فارغة</h2>
              <p>لم تقم بإضافة أي منتجات إلى السلة بعد.</p>
              <Link to="/products">
                <Button variant="primary" size="large">
                  تصفح المنتجات
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in-up">سلة التسوق</h1>
          <p className="page-subtitle fade-in-up">
            {cartItems.length} منتج{cartItems.length > 1 ? 'ات' : ''} في السلة
          </p>
        </div>
      </div>

      <section className="cart-section section">
        <div className="container">
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <h2>المنتجات</h2>
                <Button
                  variant="outline"
                  size="small"
                  onClick={clearCart}
                  className="clear-cart-btn"
                >
                  مسح السلة
                </Button>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="cart-item scale-in">
                  <Link to={`/products/${item.id}`} className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x150?text=Product+Image'
                      }}
                    />
                  </Link>

                  <div className="cart-item-info">
                    <Link to={`/products/${item.id}`}>
                      <h3 className="cart-item-name">{item.name}</h3>
                    </Link>
                    <p className="cart-item-price">{item.price.toFixed(2)} جنيه</p>
                    {item.category && (
                      <span className={`cart-item-badge ${item.category === 'Fresh' ? 'fresh' : 'frozen'}`}>
                        {item.category === 'Fresh' ? 'طازج' : 'مجمد'}
                      </span>
                    )}
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      aria-label="تقليل الكمية"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, 1)}
                      aria-label="زيادة الكمية"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    <p className="item-total-price">
                      {(item.price * item.quantity).toFixed(2)} جنيه
                    </p>
                  </div>

                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="إزالة المنتج"
                  >
                    <Icon name="close" size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary scale-in">
              <h2 className="summary-title">ملخص الطلب</h2>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>عدد المنتجات:</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="summary-row">
                  <span>الإجمالي الفرعي:</span>
                  <span>{total.toFixed(2)} جنيه</span>
                </div>
                <div className="summary-row summary-total">
                  <span>الإجمالي الكلي:</span>
                  <span>{total.toFixed(2)} جنيه</span>
                </div>
              </div>

              <div className="cart-actions">
                <Button
                  variant="whatsapp"
                  size="large"
                  onClick={handleWhatsAppOrder}
                  className="checkout-btn"
                >
                  <Icon name="whatsapp" size={20} /> إتمام الطلب عبر واتساب
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="large" className="continue-shopping-btn">
                    متابعة التسوق
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cart

