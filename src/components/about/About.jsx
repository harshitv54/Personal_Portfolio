import React from 'react'
import './about.css'
import ME from '../../assets/about-image.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>B.Tech</h5>
              <small>Information Technology</small>
            </article>
          
            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h5>University</h5>
              <small>Chitkara University</small>
            </article>
          
            <article className='about__card'>
              <BiCodeAlt className='about__icon' />
              <h5>Front-End</h5>
              <small>Developer</small>
            </article>
          </div>
          <p>
            Hey there! My name is Harshit Verma. I'm a driven and ambitious fourth year undergraduate student with an unwavering passion for front-end development. I harbor a strong desire to make a meaningful impact through my work.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About