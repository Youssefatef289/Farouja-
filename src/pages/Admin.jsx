import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Icon from '../components/Icon'
import productsData from '../data/products.json'
import './Admin.css'

const Admin = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [editingPrice, setEditingPrice] = useState(null)
  const [priceValue, setPriceValue] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Fresh',
    image: null,
    imagePreview: null
  })

  useEffect(() => {
    // Load products from localStorage or use default data
    const savedProducts = localStorage.getItem('adminProducts')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      setProducts(productsData)
      localStorage.setItem('adminProducts', JSON.stringify(productsData))
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple password protection - يمكن تغييرها لاحقاً
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('كلمة المرور غير صحيحة')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProduct({
          ...newProduct,
          image: file,
          imagePreview: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }

    const product = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      description: newProduct.description || 'منتج دواجن عالي الجودة',
      category: newProduct.category,
      image: newProduct.imagePreview // استخدام base64 للصورة
    }

    const updatedProducts = [...products, product]
    setProducts(updatedProducts)
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
    
    // Reset form
    setNewProduct({
      name: '',
      price: '',
      description: '',
      category: 'Fresh',
      image: null,
      imagePreview: null
    })
    setShowAddForm(false)
    alert('تم إضافة المنتج بنجاح!')
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      const updatedProducts = products.filter(p => p.id !== id)
      setProducts(updatedProducts)
      localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
      alert('تم حذف المنتج بنجاح!')
    }
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setNewProduct({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      category: product.category,
      image: null,
      imagePreview: product.image
    })
    setShowAddForm(true)
  }

  const handleUpdateProduct = (e) => {
    e.preventDefault()
    
    if (!newProduct.name || !newProduct.price) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }

    const updatedProducts = products.map(p => 
      p.id === editingProduct.id 
        ? {
            ...p,
            name: newProduct.name,
            price: parseFloat(newProduct.price),
            description: newProduct.description,
            category: newProduct.category,
            image: newProduct.imagePreview || p.image
          }
        : p
    )
    
    setProducts(updatedProducts)
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
    
    // Reset form
    setEditingProduct(null)
    setNewProduct({
      name: '',
      price: '',
      description: '',
      category: 'Fresh',
      image: null,
      imagePreview: null
    })
    setShowAddForm(false)
    alert('تم تحديث المنتج بنجاح!')
  }

  const handleEditPrice = (product) => {
    setEditingPrice(product.id)
    setPriceValue(product.price.toString())
  }

  const handleUpdatePrice = (productId) => {
    if (!priceValue || parseFloat(priceValue) <= 0) {
      alert('يرجى إدخال سعر صحيح')
      return
    }

    const updatedProducts = products.map(p => 
      p.id === productId 
        ? { ...p, price: parseFloat(priceValue) }
        : p
    )
    
    setProducts(updatedProducts)
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
    
    setEditingPrice(null)
    setPriceValue('')
    alert('تم تحديث السعر بنجاح!')
  }

  const handleCancelPriceEdit = () => {
    setEditingPrice(null)
    setPriceValue('')
  }

  const handleCancel = () => {
    setShowAddForm(false)
    setEditingProduct(null)
    setNewProduct({
      name: '',
      price: '',
      description: '',
      category: 'Fresh',
      image: null,
      imagePreview: null
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-login">
          <div className="login-container">
            <h2>تسجيل الدخول - لوحة التحكم</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="password">كلمة المرور:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <Button type="submit" variant="primary" size="large" className="full-width-button">
                تسجيل الدخول
              </Button>
            </form>
            {/* <p className="login-note">كلمة المرور الافتراضية: admin123</p> */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="container">
          <h1>لوحة التحكم - إدارة المنتجات</h1>
          <nav className="admin-nav">
            <button 
              className="admin-nav-link"
              onClick={() => {
                setShowAddForm(true)
                setEditingProduct(null)
                setNewProduct({
                  name: '',
                  price: '',
                  description: '',
                  category: 'Fresh',
                  image: null,
                  imagePreview: null
                })
              }}
            >
              <Icon name="check" size={20} /> إضافة منتج جديد
            </button>
            <button 
              className="admin-nav-link"
              onClick={() => navigate('/products')}
            >
              <Icon name="home" size={20} /> عرض المنتجات
            </button>
            <button 
              className="admin-nav-link"
              onClick={() => navigate('/')}
            >
              <Icon name="house" size={20} /> الرئيسية
            </button>
            <button 
              className="admin-nav-link"
              onClick={handleLogout}
            >
              <Icon name="close" size={20} /> تسجيل الخروج
            </button>
          </nav>
        </div>
      </div>

      <div className="admin-content">
        <div className="container">
          {showAddForm && (
            <div className="admin-form-container">
              <h2>{editingProduct ? 'تعديل منتج' : 'إضافة منتج جديد'}</h2>
              <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}>
                <div className="form-group">
                  <label htmlFor="name">اسم المنتج *</label>
                  <input
                    type="text"
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">السعر (جنيه) *</label>
                  <input
                    type="number"
                    id="price"
                    step="0.01"
                    min="0"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">الوصف</label>
                  <textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    rows="3"
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">الفئة</label>
                  <select
                    id="category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="Fresh">طازج</option>
                    <option value="Frozen">مجمد</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="image">صورة المنتج *</label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required={!editingProduct}
                    className="form-file-input"
                  />
                  {newProduct.imagePreview && (
                    <div className="image-preview">
                      <img src={newProduct.imagePreview} alt="معاينة" />
                    </div>
                  )}
                </div>

                <div className="form-actions">
                  <Button type="submit" variant="primary" size="large">
                    {editingProduct ? 'تحديث المنتج' : 'إضافة المنتج'}
                  </Button>
                  <Button type="button" variant="outline" size="large" onClick={handleCancel}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-products-list">
            <h2>قائمة المنتجات ({products.length})</h2>
            <div className="products-table">
              <table>
                <thead>
                  <tr>
                    <th>الصورة</th>
                    <th>الاسم</th>
                    <th>السعر</th>
                    <th>الفئة</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="product-thumbnail"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/80x80?text=No+Image'
                          }}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price.toFixed(2)} جنيه</td>
                      <td>
                        <span className={`category-badge ${product.category === 'Fresh' ? 'fresh' : 'frozen'}`}>
                          {product.category === 'Fresh' ? 'طازج' : 'مجمد'}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          {editingPrice === product.id ? (
                            <div className="price-edit-form">
                              <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={priceValue}
                                onChange={(e) => setPriceValue(e.target.value)}
                                className="price-input-inline"
                                autoFocus
                              />
                              <button 
                                className="save-price-btn"
                                onClick={() => handleUpdatePrice(product.id)}
                                title="حفظ"
                              >
                                <Icon name="check" size={16} />
                              </button>
                              <button 
                                className="cancel-price-btn"
                                onClick={handleCancelPriceEdit}
                                title="إلغاء"
                              >
                                <Icon name="close" size={16} />
                              </button>
                            </div>
                          ) : (
                            <>
                              <button 
                                className="edit-price-btn"
                                onClick={() => handleEditPrice(product)}
                                title="تعديل السعر"
                              >
                                <Icon name="money" size={18} />
                              </button>
                              <button 
                                className="edit-btn"
                                onClick={() => handleEditProduct(product)}
                                title="تعديل"
                              >
                                <Icon name="check" size={18} />
                              </button>
                              <button 
                                className="delete-btn"
                                onClick={() => handleDeleteProduct(product.id)}
                                title="حذف"
                              >
                                <Icon name="trash" size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

