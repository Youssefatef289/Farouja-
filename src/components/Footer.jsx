import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {currentYear} سوق الدواجن. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
