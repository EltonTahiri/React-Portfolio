import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/elton-tahiri-38ab03227" target="_blank"><GrLinkedin /></a>
        <a href="https://github.com/EltonTahiri" target="_blank"><BsGithub/ ></a>
        <a href="https://instagram.com/_eltontahiri" target="_blank"><BsInstagram/ ></a>
        <a href="https://facebook.com/eltoni133" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials