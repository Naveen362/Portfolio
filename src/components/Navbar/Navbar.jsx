import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/theme_pattern.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  var [menu,setMenu]=useState("home")

  const refer=useRef();
  const openmenu=()=>{
    refer.current.style.right="0px";
  }
  const closemenu=()=>{
    refer.current.style.right="-350px"
  }
  return (
    <div className="navbar">
  <div className="navbar-icon">
    <h1>NAVEEN</h1>
    {/* <img className="navbariconimg" src={logo} alt="Noting sirjlli"/> */}
  </div>
  <img src={menu_open} alt="" onClick={openmenu} className="nav-mob-open" />
     <ul ref={refer} className="nav-menu">
      <img src={menu_close} alt="" className="nav-mob-close" onClick={closemenu} />
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="underline"/>:null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("aboutme")}>About Me</p></AnchorLink>{menu==="aboutme"?<img src={underline} alt="underline"/>:null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="underline"/>:null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"> <p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt="underline"/>:null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="underline"/>:null}</li>
     </ul>
     <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar