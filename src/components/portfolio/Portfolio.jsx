import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/CyberFiction.png'
import IMG2 from '../../assets/Personal-Portfolio.png'
import IMG3 from '../../assets/Event-Information.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="CyberFiction" />
          </div>
          <h3>CyberFiction</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harshitv54/cyberfiction-frontend" className='btn' target='_blank'>GitHUB</a>
            <a href="https://cyberfiction-frontend.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Personal Portfolio" />
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harshitv54/Personal_Portfolio" className='btn' target='_blank'>GitHUB</a>
            <a href="https://harshitv54.github.io/Personal_Portfolio/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Event Information" />
          </div>
          <h3>Event Information</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harshitv54/mini-project" className='btn' target='_blank'>GitHUB</a>
            <a href="https://mini-project-ces.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio