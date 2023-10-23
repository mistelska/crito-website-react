import './ShowcaseSection.css'
import React from 'react'
import img_backgroundLines from '../../assets/images/line-up.svg'
import img_mansuit from '../../assets/images/maninsuit.png'

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
        <div className="showcase">
            <img className="background-lines" src={img_backgroundLines} alt="White design line"/>
            <div className="container">
                <div className="content">
                    <h1> We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="buttons-yellow" href="#">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="buttons-transparent" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <img src={img_mansuit} alt="image of a man in a suit with a tablet"/>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection