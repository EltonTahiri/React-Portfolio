import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>


      <div className="footer__socials">
        <a href="https://facebook.com/eltoni133"><AiFillFacebook /></a>
        <a href="https://instagram.com/_eltontahiri"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made By Elton Tahiri. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer