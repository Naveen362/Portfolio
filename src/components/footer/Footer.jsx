import React from 'react'
import logo from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg"
import "./Footer.css"
const Footer = () => {
  return (
    <div  id="footer" className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <div className="navbar-icon">
    <h1>NAVEEN</h1>
    <img src={logo} alt="Noting sirjlli"/>
  </div>
                  <p>Lorem i. Illum molestias iusto architecto debitis, quae consectetur sunt perspiciatis nesciunt.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type="email" placeholder="enter your email.."/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            © 2023 Naveen Sai Kammela. All rights reserved.
            </p>
<div className="footer-bottom-right">
    <p>term of Services</p>
    <p>Privacy Policy</p>
    <p>Connect With Me</p>
</div>
        </div>
    </div>
  )
}

export default Footer