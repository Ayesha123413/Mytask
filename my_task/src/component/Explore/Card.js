import React, { useState } from 'react'

import './Explore.css'
const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <div className="cards">
      <div className="diamond">
        <div
          className="diamond_card"
          style={{ background: `url(${props.image})` }}
        >
          <div
            className="diamond_content "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? <p>{props.text}</p> : <h1>{props.title}</h1>}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
