import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import productsData from '../data/products.json'
import './Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    // Get first 6 products as featured
    setFeaturedProducts(productsData.slice(0, 6))
  }, [])

  const handleWhatsAppOrder = () => {
    const message = "مرحباً! أنا مهتم بمنتجات الدواجن لديكم. هل يمكنكم مساعدتي بمزيد من المعلومات؟"
      const whatsappUrl = `https://wa.me/201099487977?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const motivationalPoints = [
    {
      icon: "leaf",
      text: "منتجات طبيعية 100% خالية من الهرمونات والمواد الكيميائية"
    },
    {
      icon: "truck",
      text: "توصيل سريع خلال 24 ساعة - طازج ومضمون الجودة"
    },
    {
      icon: "trophy",
      text: "أكثر من 1000 عميل سعيد يثقون بنا لطعام عائلاتهم"
    },
    {
      icon: "money",
      text: "أسعار تنافسية مع خصومات خاصة للطلبات الكبيرة"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "سارة أحمد",
      comment: "أطازج دجاج تذوقته على الإطلاق! جودة ممتازة وتوصيل سريع.",
      rating: 5
    },
    {
      id: 2,
      name: "محمد علي",
      comment: "خدمة رائعة ومنتجات ممتازة. أنصح بشدة بسوق الدواجن!",
      rating: 5
    },
    {
      id: 3,
      name: "فاطمة حسن",
      comment: "أحب تنوع المنتجات. خيارات المجمدة مثالية لإعداد الوجبات!",
      rating: 5
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img 
                src="/image/hero-removebg-preview.png" 
                alt="فروجة - شعار الدواجن"
                className="hero-logo"
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-title fade-in">
                <span className="hero-title-brand">فروجة</span>
                <br />
                منتجات دواجن متميزة
              </h1>
              <p className="hero-subtitle fade-in">
                منتجات دجاج طازجة عالية الجودة تُسلم إلى باب منزلك. 
                جودة من المزرعة إلى المائدة يمكنك الوثوق بها.
              </p>
              <div className="hero-buttons fade-in">
                <Link to="/products">
                  <Button variant="primary" size="large">
                    تصفح المنتجات
                  </Button>
                </Link>
                <Button variant="secondary" size="large" onClick={handleWhatsAppOrder}>
                  <Icon name="whatsapp" size={20} /> اطلب عبر واتساب
                </Button>
              </div>
              <div className="hero-motivational fade-in">
                <div className="motivational-grid">
                  {motivationalPoints.map((point, index) => (
                    <div key={index} className="motivational-item slide-in">
                      <Icon name={point.icon} className="motivational-icon" size={28} />
                      <span className="motivational-text">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">لماذا تختارنا</h2>
          <div className="features-grid">
            <div className="feature-card slide-in">
              <Icon name="chicken" className="feature-icon" size={64} />
              <h3 className="feature-title">منتجات طازجة</h3>
              <p className="feature-description">
                توصيلات يومية طازجة من مزارعنا الموثوقة. لا نتنازل عن الجودة.
              </p>
            </div>
            <div className="feature-card slide-in">
              <Icon name="star" className="feature-icon" size={64} />
              <h3 className="feature-title">جودة عالية</h3>
              <p className="feature-description">
                دواجن من الدرجة الممتازة، خالية من الهرمونات وتربى بعناية.
              </p>
            </div>
            <div className="feature-card slide-in">
              <Icon name="truck" className="feature-icon" size={64} />
              <h3 className="feature-title">توصيل سريع</h3>
              <p className="feature-description">
                خدمة توصيل سريعة وموثوقة. طلبك يصل طازجاً وفي الوقت المحدد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="products-preview section">
        <div className="container">
          <h2 className="section-title">منتجات مميزة</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="products-preview-cta">
            <Link to="/products">
              <Button variant="outline" size="large">
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">ماذا يقول عملاؤنا</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card fade-in">
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="star" size={24} />
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">هل أنت مستعد للطلب؟</h2>
            <p className="cta-description">
              احصل على منتجات دواجن طازجة تُسلم إلى باب منزلك. 
              اطلب الآن عبر واتساب للحصول على خدمة سريعة!
            </p>
            <Button variant="whatsapp" size="large" onClick={handleWhatsAppOrder}>
              <Icon name="whatsapp" size={20} /> اطلب عبر واتساب
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
