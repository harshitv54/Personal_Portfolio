import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Layout Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Colaborative Mindset</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User research</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Framwork</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic Backend Hosting</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lightroom Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Editing</p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation*/}

      </div>
    </section>
  )
}

export default Services