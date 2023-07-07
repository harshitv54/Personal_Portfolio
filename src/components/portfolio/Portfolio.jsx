import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/CyberFiction.png'
import IMG2 from '../../assets/Personal-Portfolio.png'
import IMG3 from '../../assets/Event-Information.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CyberFiction',
    github: 'https://github.com/harshitv54/cyberfiction-frontend',
    demo: 'https://cyberfiction-frontend.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Personal Portfolio',
    github: 'https://github.com/harshitv54/Personal_Portfolio',
    demo: 'https://harshitv54.github.io/Personal_Portfolio'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Event Information',
    github: 'https://github.com/harshitv54/mini-project',
    demo: 'https://mini-project-ces.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHUB</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio