import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_3671.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm </h5>
        <h1>Elton Tahiri</h1>
        <h5 className='text-light'>Frontend-Developer</h5>
       <HeaderSocials />
        <CTA />
        


        <div className='photo'>
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header