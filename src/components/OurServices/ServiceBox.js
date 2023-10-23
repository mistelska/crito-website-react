import React from 'react'
import './OurServices.css'
import img_line from '../../assets/images/line.png'

export const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
        <a href={url}>
            <div className="line">
                <img src={img_line} alt="A small black line"/>
            </div>
            <div className="text-in-box">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="arrow">
                <div className="arrow-button-black"><i className="fa-thin fa-arrow-right"></i></div>
            </div>
        </a>
    </div>
  )
}
