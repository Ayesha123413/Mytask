import React from 'react'
import './About.css'
import image from '../../assets/rectangle.jpg'
const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_content">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="about_image">
        <div></div>
        <img src={image} />
        <div className="last_div"></div>
      </div>
    </div>
  )
}

export default About
