import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__thanks'>Thank You!</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://instagram.com/harshitv54"><BsInstagram /></a>
        <a href="http://linkedin.com/in/harshitv54"><BsLinkedin /></a>
        <a href="https://github.com/harshitv54"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Harshit Verma. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer