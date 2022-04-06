import React from "react";
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';
import OrangeButton from "../UI/OrangeButton/OrangeButton";
function Navbar() {

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__body">
          <div className="navbar-navigation">
            <div className="logo"></div>
            <nav className="navbar-menu">
              <div className="menu-list">
                <Link className="links" to="/">
                <li>About Us</li>
                </Link>
                <Link className="links" to="/courses">
                  <li>Courses</li>
                </Link>
                <Link className="links" to="/events">
                  <li>Events</li>
                </Link>
                <Link className="links" to="/blog">
                  <li>Blog</li>
                </Link>
                <Link className="links" to="/contacts">
                  <li>Contacts</li>
                </Link>
              </div>
            </nav>
          </div>
          <div className="navbar-btns">
            <OrangeButton>Get consultion</OrangeButton>
            <div className="account">
              <div className="account-logo"></div>
              <div className="register-login">Log in / Register</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;