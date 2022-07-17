import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>eltontahiri4@gmail.com</h5>
            <a href="mailto:eltontahiri4@gmail.com">Send a message</a>
          </article>
         
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Elton Tahiri</h5>
            <a href="https://m.me/eltoni133" target="_blank">Send a message</a>
         </article>
       
        </div>
        {/* end of contact opt*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Type your email' required />
          <textarea name="message" placeholder='Your message' rows="7" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact