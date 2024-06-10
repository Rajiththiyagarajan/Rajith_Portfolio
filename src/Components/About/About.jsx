import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import rajith from '../../assets/rajith.jpg'



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            { <img src={rajith} alt="" /> }
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> This is my offical portfolio website To show case,My all works related to web devlopment and ui design</p>
                <p>Hi,I am Rajith,Completed BE and completed Full Stack Developer (Internship) on ALO infotech Pvt.Ltd in kanyakumari from (2023-2024) </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Bootsrap</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}} /></div>


            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Html & css
            </h1>
            {/* <p>YEARS OF EXPERIENCE</p> */}
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Javascript</h1>
            {/* <p>PROJECTS COMPLETED</p> */}
        </div>
        <hr />
        <div className="about-achievement">
            <h1>React</h1>
            {/* <p>HAPPY CLIENTS</p> */}
        </div>
      </div>
    </div>
  )
}

export default About
