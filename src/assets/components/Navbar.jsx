import React from 'react'
import "../CSS/Navbar.css"

function Navbar() {
  return (
    <div>

      <nav class="navbar">
    
    <a href="/" className="logo">Find & Rent</a>


    <ul class="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#blog">Blog</a></li>
    </ul>

      </nav>

    </div>
  )
}

export default Navbar