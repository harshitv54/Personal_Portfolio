import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="http://linkedin.com/in/harshitv54" target="_blank"><BsLinkedin /></a>
      <a href="http://github.com/harshitv54" target="_blank"><BsGithub /></a>
      <a href="http://instagram.com/harshitv54" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials