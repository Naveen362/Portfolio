import React, { useState } from 'react'
import "./Hero.css"
import Naveen  from "../../assets/Naveen Profilepic.jpg"
import resumepic from "../../assets/Screenshot 2024-11-21 162052.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
 var [state,setState]= useState(0)
  const resumeopen=()=>{
           setState(1);
  }
  const downloadresume=()=>{
    saveAs( "src/resumefile/NAVEEN-SAI-KAMMELA.pdf","Naveen_sai_Kammela_Resume");
  }
  return (
    <div className="hero" id="home">
      <img src={Naveen} alt="not workjin" width="20%" height={200} style={{borderRadius:"50%"}}/>
      <h1><span>I'm Naveen Sai Kammela</span>, full-stack developer.</h1>
      <p></p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me</AnchorLink></div>
        <div className="hero-resume" onClick={resumeopen}>My Resume</div>
      </div>
      {
          state==1?<div className="resumeopen">
            <div className="emptydiv" onClick={()=>setState(0)}></div>
            <div className="resumeopen-1">
            <img src={resumepic} alt="resume is going to interview"/>
            
              </div>

             
              <div className="resumebtn" onClick={downloadresume}><button >Download</button></div>
              <div className="resumeinto" onClick={()=>setState(0)}><h1>X</h1></div>
          </div>:null
      }
     <div className='icons'>
      <p><a href='https://www.facebook.com/profile.php?id=100039486426780'target="_blank" ><i className='bi bi-facebook text-info text-decoration-none'></i></a></p>
     <p> <a href="https://wa.me/918688856313" target="_blank"><i className='bi bi-whatsapp'></i></a></p>
      <p><a href='https://www.instagram.com/naveen_kammela/' target="_blank"><i className='bi bi-instagram'></i></a></p>
      <p><a href='https://github.com/Naveen362' target="_blank"><i className='bi bi-github'></i></a></p>
     </div>
    </div>
  )
}

export default Hero