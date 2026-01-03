import Icon from '../components/Icon'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">من نحن</h1>
          <p className="page-subtitle">
            شريكك الموثوق لمنتجات الدواجن المتميزة
          </p>
        </div>
      </div>

      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-heading">قصتنا</h2>
              <p className="about-paragraph">
                تأسس سوق الدواجن بمهمة بسيطة: توفير منتجات الدجاج الأكثر نضارة 
                وأعلى جودة للأسر. ما بدأ كمزرعة عائلية صغيرة نما ليصبح اسماً 
                موثوقاً في مجال الدواجن، يخدم العملاء الذين يقدرون الجودة والنضارة 
                وممارسات الزراعة المسؤولة.
              </p>
              <p className="about-paragraph">
                نعمل بشكل وثيق مع المزارع المحلية التي تشاركنا التزامنا بالزراعة 
                الأخلاقية ورفاهية الحيوانات. كل منتج نبيعه يلبي معايير الجودة الصارمة 
                لدينا، مما يضمن أنك تتلقى الأفضل فقط لطاولة عائلتك.
              </p>
            </div>
            <div className="about-image-placeholder">
              <Icon name="house" className="image-icon" size={80} />
              <p>صورة المزرعة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section section">
        <div className="container">
          <h2 className="section-title">التزامنا</h2>
          <div className="commitments-grid">
            <div className="commitment-card">
              <Icon name="check" className="commitment-icon" size={48} />
              <h3 className="commitment-title">ضمان الجودة</h3>
              <p className="commitment-description">
                يخضع كل منتج لفحوصات جودة صارمة لضمان النضارة والسلامة. 
                لا نتنازل أبداً عن الجودة.
              </p>
            </div>
            <div className="commitment-card">
              <Icon name="leaf" className="commitment-icon" size={48} />
              <h3 className="commitment-title">الزراعة المستدامة</h3>
              <p className="commitment-description">
                نتعاون مع المزارع التي تمارس طرق الزراعة المستدامة والأخلاقية، 
                حماية بيئتنا للأجيال القادمة.
              </p>
            </div>
            <div className="commitment-card">
              <Icon name="shield" className="commitment-icon" size={48} />
              <h3 className="commitment-title">السلامة أولاً</h3>
              <p className="commitment-description">
                جميع منتجاتنا تلبي أعلى معايير سلامة الغذاء. 
                صحتك ورفاهيتك هي أولويتنا القصوى.
              </p>
            </div>
            <div className="commitment-card">
              <Icon name="heart" className="commitment-icon" size={48} />
              <h3 className="commitment-title">رضا العملاء</h3>
              <p className="commitment-description">
                نحن ملتزمون بتقديم خدمة استثنائية وبناء علاقات دائمة مع عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="farm-images-section section">
        <div className="container">
          <h2 className="section-title">مزرعتنا</h2>
          <div className="farm-images-grid">
            <div className="farm-image-placeholder">
              <Icon name="chicken" className="image-icon" size={80} />
              <p>مزرعة الدواجن</p>
            </div>
            <div className="farm-image-placeholder">
              <Icon name="farm" className="image-icon" size={80} />
              <p>مرافق المزرعة</p>
            </div>
            <div className="farm-image-placeholder">
              <Icon name="tractor" className="image-icon" size={80} />
              <p>المعالجة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
