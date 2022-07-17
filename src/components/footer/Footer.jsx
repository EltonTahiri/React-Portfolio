import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

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