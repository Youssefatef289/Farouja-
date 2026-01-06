import { Link } from 'react-router-dom'
import Button from './Button'
import Icon from './Icon'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const handleWhatsAppOrder = (e) => {
    e.preventDefault()
    const message = `مرحباً! أنا مهتم بطلب: ${product.name} - ${product.price} جنيه`
    const whatsappUrl = `https://wa.me/201099487977?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="product-card fade-in">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img 
            src={product.image} 
            alt={product.name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image'
            }}
          />
          {product.category === 'Fresh' && (
            <span className="product-badge fresh">طازج</span>
          )}
          {product.category === 'Frozen' && (
            <span className="product-badge frozen">مجمد</span>
          )}
        </div>
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-price">{product.price.toFixed(2)} جنيه</p>
        </div>
      </Link>
      <div className="product-card-actions">
        <Button 
          variant="whatsapp" 
          size="small"
          onClick={handleWhatsAppOrder}
          className="full-width"
        >
          <Icon name="whatsapp" size={20} /> اطلب الآن
        </Button>
      </div>
    </div>
  )
}

export default ProductCard

