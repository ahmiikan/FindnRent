import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import "../CSS/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-about">
          <h2 className="footer-logo">Find & Rent</h2>
          <p className="footer-text">
            We provide quality services to make your life easier.  
            Stay connected with us for the latest updates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="aliahmad3843@gmail.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/ahmiikan"><FaFacebook /></a>
            <a href="https://x.com/ahmad_kan_"><FaTwitter /></a>
            <a href="https://www.instagram.com/ahmad.in.blue/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/ahmii-kan/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Find & Rent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
