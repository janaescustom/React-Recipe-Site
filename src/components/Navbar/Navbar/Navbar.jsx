import React from "react";
import "./Navbar.css";
import navbar_logo from "../../../assets/feed-me.png";
import CategoryDrop from "../../Dropdowns/CategoryDrop/CategoryDrop";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  function openMenu() {
    console.log('Opening menu');
    document.body.classList += " menu--open";
  }
  
  function closeMenu() {
  
    document.body.classList = document.body.classList.replace(" menu--open", "");
  }

  return (
    <nav className="">
      <div className="nav__container">

      <div className="nav__logo">
        <Link to="/" className="logo-link">
          <img src={navbar_logo} alt="LOGO" className="plant" />
        </Link>
      </div>
      <ul className="nav__links">
        <li className="nav__list">
          
            <Link to="/" className="nav__link nav__btn btn">
              Home
            </Link>
          
        </li>
        <li className="nav__list">
          <div className="nav__link">
            <CategoryDrop />            
          </div>
        </li>
        <li className="nav__list">
          <div className="nav__link">
            <Link to="/favorites" className="nav__btn btn">
              Favorites
            </Link>
          </div>
        </li>
      <button className="btn-menu btn__menu--open nav__btn" onClick={() => openMenu()}>
        <FontAwesomeIcon icon="bars" />
      </button>
        <li className="search__icon">
          <div>
            <Link to="/results" className="nav__btn btn">
              <FontAwesomeIcon icon="spoon" />
            </Link>
          </div>
        </li>
      </ul>
      {document.body.classList.contains(" menu--open") && (
        <div className="menu__backdrop">
          <button className="btn-menu btn__menu--close nav__btn" onClick={() => closeMenu()}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
            <Link to="/" className="menu__link" onClick={() => closeMenu()}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/categories" className="menu__link" onClick={() => closeMenu()}>
              Categories
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/favorites" className="menu__link" onClick={() => closeMenu()}>
              Favorites
            </Link>
          </li>
         
        </ul>
      </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
