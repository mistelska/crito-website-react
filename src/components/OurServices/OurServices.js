import React from 'react'
import { ServiceBox } from './ServiceBox'
import './OurServices.css'
import img_designline from '../../assets/images/line-our-services.svg'

const OurServices = () => {
  return (
    <section className="service-section">
        <img className="design-line" src={img_designline} alt="Design line"/>

        <div className="container">

            <div className="caption">
                <h4>Our Services</h4>
                <h2>We Provide The Best<br />Service For Consulting</h2>
            </div>

            <div className="all-boxes">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url ="/services/businessadvice" />
                <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url ="/services/startupbusiness" />
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url ="/services/financialadvice" />
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url ="/services/riskmanagement" />
            </div>

            <div className="button">
                <a className="buttons-transparent" href="#">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default OurServices