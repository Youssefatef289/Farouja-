import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import productsData from '../data/products.json'
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [id])

  const handleQuantityChange = (change) => {
    setQuantity(prev => {
      const newQuantity = prev + change
      return newQuantity < 1 ? 1 : newQuantity
    })
  }

  const handleWhatsAppOrder = () => {
    if (!product) return
    const totalPrice = (product.price * quantity).toFixed(2)
    const message = `مرحباً! أود طلب:\n\nالمنتج: ${product.name}\nالكمية: ${quantity}\nالسعر للوحدة: ${product.price.toFixed(2)} جنيه\nالإجمالي: ${totalPrice} جنيه\n\nيرجى تأكيد التوفر وتفاصيل التوصيل.`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="not-found">
            <h2>المنتج غير موجود</h2>
            <p>المنتج الذي تبحث عنه غير موجود.</p>
            <Link to="/products">
              <Button variant="primary">العودة إلى المنتجات</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const categoryText = product.category === 'Fresh' ? 'طازج' : 'مجمد'

  return (
    <div className="product-details-page">
      <div className="page-header">
        <div className="container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← رجوع
          </button>
        </div>
      </div>

      <section className="product-details-section section">
        <div className="container">
          <div className="product-details-content">
            <div className="product-image-container">
              {!imageError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  onError={() => setImageError(true)}
                  className="product-detail-image"
                />
              ) : (
                <div className="product-image-placeholder">
                  <Icon name="chicken" size={64} />
                  <p>الصورة غير متاحة</p>
                </div>
              )}
              {product.category === 'Fresh' && (
                <span className="product-detail-badge fresh">طازج</span>
              )}
              {product.category === 'Frozen' && (
                <span className="product-detail-badge frozen">مجمد</span>
              )}
            </div>

            <div className="product-info">
              <h1 className="product-detail-name">{product.name}</h1>
              <div className="product-detail-category">
                الفئة: <strong>{categoryText}</strong>
              </div>
              <div className="product-detail-price">{product.price.toFixed(2)} جنيه</div>
              <p className="product-detail-description">{product.description}</p>

              <div className="quantity-selector">
                <label htmlFor="quantity">الكمية:</label>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(-1)}
                    aria-label="تقليل الكمية"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(1)}
                    aria-label="زيادة الكمية"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="total-price">
                الإجمالي: <strong>{(product.price * quantity).toFixed(2)} جنيه</strong>
              </div>

              <div className="product-actions">
                <Button
                  variant="whatsapp"
                  size="large"
                  onClick={handleWhatsAppOrder}
                  className="full-width-button"
                >
                  <Icon name="whatsapp" size={20} /> اطلب عبر واتساب
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="large" className="full-width-button">
                    متابعة التسوق
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
