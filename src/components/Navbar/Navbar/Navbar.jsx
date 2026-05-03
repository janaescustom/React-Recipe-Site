import React from 'react'
import './Navbar.css'
import navbar_logo from '../../../assets/feed-me.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
       <nav className="container">
        <a href="/" className="logo-link">
          <div className="nav__logo">
            <img src={navbar_logo} alt="LOGO" className="plant" />
          </div>
        </a>
        <div className="nav__links">
          {location.pathname !== '/categories' ? (
            <div className="nav__link">
            <Link to="/categories" className="nav__anchor btn" >Categories</Link>
          </div>
          ) : (
            <div className="nav__link placeholder"></div>
          )}
          <div className="nav__link">
            <a href="/" className="nav__anchor btn"> Random </a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
