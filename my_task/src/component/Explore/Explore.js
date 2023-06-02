import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Explore.css'
import { Data } from '../Data'
import Card from './Card'
const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div id="explore" className="explore_content">
      <div>
        <h1>Expertise</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="silder">
        <Slider {...settings}>
          {Data.map((item) => {
            return (
              <Card text={item.text} image={item.image} title={item.title} />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Explore
