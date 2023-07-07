import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BiLogoTelegram} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgbmjb3', 'template_boxi8sv', form.current, 'uv5e-MVpSxL6Ju9vu')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>harshitverma54@gmail.com</h5>
            <a href="mailto:harshitverma54@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BiLogoTelegram className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <a href="https://t.me/KonohaHokage" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 95181 94534</h5>
            <a href="https://wa.me/+919518194534" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */ }

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder='Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact