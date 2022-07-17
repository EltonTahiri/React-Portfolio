import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/alarmclock.PNG'
import IMG2 from '../../assets/counter.PNG'
import IMG3 from '../../assets/JsCalc.PNG'
import IMG4 from '../../assets/Quiz.PNG'
import IMG5 from '../../assets/Quote.PNG'
import IMG6 from '../../assets/Rent.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Project 1"/ >
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>


      </div>
    </section>
  )
}

export default Portfolio