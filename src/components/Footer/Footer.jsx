import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/A.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__logo">
            <a href="/" className="footer__link">
              <div className="footer-img__container">
                <img src={footer_logo} className="footer-img" alt='footer logo' />
              </div>
            </a>
          </div>
          <div className="footer__links">
            <div className="footer__link footer__route btn">Meals by Area </div>
            <div className="footer__link footer__route btn">
              Take a Risk
            </div>
          </div>
          <div className="copyright">© 2026 Feed Me Recipe Site. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer