import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState(productsData)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    if (filter === 'All') {
      setProducts(productsData)
    } else {
      setProducts(productsData.filter(product => product.category === filter))
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
