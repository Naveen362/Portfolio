import React from 'react'
import "./Contact.css"
import theme_part from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "867dde0d-e948-4ff6-92ca-bc5e720061ab");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          
          alert(res.message)
        }
      };
  return (
    <div  className="contact" id="contact">
<div className="contact-title">
    <h1>Get In Touch</h1>
    <img src={theme_part} alt="1004" />
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk </h1>
        <p>I am currently available to take new projects,so feel free to message about anything that you want to work on.You can contact anytime</p>
        <div className="contact-details">
            <div className="contact-detail">
             <img src={mail_icon} alt="MAIL"/><p>naveensaikammela143@gmail.com</p>
            </div>
            <div className="contact-detail">
<img src={location} alt="Location"/><p>Machilipatnam,India</p>
            </div>
            <div className="contact-detail">
       <img src={call_icon} alt="Call"/><p>+91 8688856313</p>
            </div>
        </div>

    </div>
    <form onSubmit={onSubmit} className="contact-right">
         <label htmlFor="">Your Name</label>
         <input type="text" placeholder="enter your name" name="name"/>
         <label htmlFor="" >Email</label>
         <input type="email" placeholder="Enter your Email" name="email"/>
         <label htmlFor="">Write your message here</label>
         <textarea name="message" rows="8" placeholder="Enter your message "/>
         <button type="submit" className="contact-submit">
            Submit now
         </button>

    </form>
</div>
    </div>
  )
}

export default Contact