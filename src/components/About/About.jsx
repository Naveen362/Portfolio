import React from 'react'
import "./About.css"
import profile from "../../assets/Naveen Profilepic.jpg"
import theme_pattern from "../../assets/theme_pattern.svg"

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="gggg" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="aseste" width="100%" height="80%" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello, I’m Naveen Sai Kammela, a passionate full-stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). After completing my training in web development, I have built several projects, including an e-commerce website and a personal portfolio. I am continuously expanding my skills and knowledge to stay ahead of industry trends. I am eager to collaborate and contribute to impactful projects that combine innovative web technologies with practical solutions.

Feel free to explore my work and get in touch!.</p>
                        <p>My passion for frontend development is not only  reflected in my extensive experiments but also in the enthusiasm and dedication i bring to each project .</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>

                        
                        
                        <div className="about-skill"> <p>React JS</p><hr style={{ width: "80%" }} /></div>
                        
                        
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
                        
                       
                        <div className="about-skill">  <p>Node JS</p><hr style={{ width: "65%" }} /></div>
                       


                    </div>

                </div>
                {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+ </h1>
                    <p>Years Of experience</p>
                </div><hr/>
                <div className="about-achievement">
                    <h1>90+ </h1>
                    <p>Projects Completed</p>
                </div><hr/>
                <div className="about-achievement">
                    <h1>15+ </h1>
                    <p>YHappy clients</p>
                </div>

            </div> */}
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1></h1>
                    <p></p>
                </div><hr/>
                <div className="about-achievement">
                    <h1></h1>
                    <p></p>
                </div><hr/>
                <div className="about-achievement">
                    <h1> </h1>
                    <p></p>
                </div></div> */}
        </div>
    )
}

export default About