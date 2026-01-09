import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import './Products.css'

// Load products from localStorage if available, otherwise use default data
const getProducts = () => {
  const savedProducts = localStorage.getItem('adminProducts')
  return savedProducts ? JSON.parse(savedProducts) : productsData
}

const Products = () => {
  const [products, setProducts] = useState(getProducts())
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const allProducts = getProducts()
    if (filter === 'All') {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter(product => product.category === filter))
    }
    
    // Listen for storage changes
    const handleStorageChange = () => {
      const updatedProducts = getProducts()
      if (filter === 'All') {
        setProducts(updatedProducts)
      } else {
        setProducts(updatedProducts.filter(product => product.category === filter))
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Check for changes in the same tab
    const interval = setInterval(() => {
      const currentProducts = getProducts()
      const currentFiltered = filter === 'All' 
        ? currentProducts 
        : currentProducts.filter(product => product.category === filter)
      const currentFilteredStr = JSON.stringify(currentFiltered)
      const productsStr = JSON.stringify(products)
      if (currentFilteredStr !== productsStr) {
        setProducts(currentFiltered)
      }
    }, 1000)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [filter])

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">منتجاتنا</h1>
          <p className="page-subtitle">
            تصفح مجموعتنا الواسعة من منتجات الدواجن المتميزة
          </p>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              جميع المنتجات
            </button>
            <button
              className={`filter-btn ${filter === 'Fresh' ? 'active' : ''}`}
              onClick={() => setFilter('Fresh')}
            >
              طازج
            </button>
            <button
              className={`filter-btn ${filter === 'Frozen' ? 'active' : ''}`}
              onClick={() => setFilter('Frozen')}
            >
              مجمد
            </button>
          </div>

          <div className="products-count">
            عرض {products.length} منتج{products.length !== 1 ? 'ات' : ''}
          </div>

          {products.length > 0 ? (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>لم يتم العثور على منتجات في هذه الفئة.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products
