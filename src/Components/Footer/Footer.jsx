import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer-first-group">
            <Link to="/"><div className="white-logo"></div></Link>
            <div className="footer-text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </div>
            <div className="footer-socials">
              <div className="footer-facebook footer-social"></div>
              <div className="footer-twitter footer-social"></div>
              <div className="footer-youtube footer-social"></div>
              <div className="footer-telegram footer-social"></div>
              <div className="footer-instagram footer-social"></div>
              <div className="footer-linkedin footer-social"></div>
            </div>
          </div>
          <div className="footer-second-group">
            <div className="footer-title">Site map</div>
            <Link className="footer-links" to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link className="footer-links" to="/courses">
              <li>Courses</li>
            </Link>
            <Link className="footer-links" to="/events">
              <li>Events</li>
            </Link>
            <Link className="footer-links" to="/blog">
              <li>Blog</li>
            </Link>
            <Link className="footer-links" to="/contacts">
              <li>Contacts</li>
            </Link>
          </div>
          <div className="footer-third-group">
            <div className="footer-title">courses</div>
            <div className="footer-course">Marketing</div>
            <div className="footer-course">Managment</div>
            <div className="footer-course">HR & Recruting</div>
            <div className="footer-course">Design</div>
            <div className="footer-course">Development</div>
          </div>
          <div className="footer-fourth-group">
            <div className="footer-title">contact us</div>
            <div className="footer-number">
              <div className="number-text">(405) 555-0128</div>
            </div>
            <div className="footer-mail">
              <div className="mail-text">hello@createx.com</div>
            </div>
          </div>
          <div className="footer-fifth-group">
            <div className="footer-title">SIGN UP TO OUR NEWSLETTER</div>
            <input className="footer-input-email" type="text" placeholder="Email address"/>
            <div className="white-right"></div>
            <div className="footer-agreement">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;