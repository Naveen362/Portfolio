import React from 'react'
import "./Mywork.css"
import theme_path from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from "../../assets/arrow_icon.svg"
const Mywork = () => {
  return (
    <div className="mywork" id="portfolio">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_path} alt=""/>
      </div>
      <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return <a href={work.url}><img style={{width:"100%",padding:3,borderRadius:"30px"}} key={index} src={work.w_img}/></a>
          })}
      </div>
      <div className="mywork-showmore">
        <p>show More</p>
        <img src={arrow_icon} alt="english"/>
      </div>
    </div>
  )
}

export default Mywork