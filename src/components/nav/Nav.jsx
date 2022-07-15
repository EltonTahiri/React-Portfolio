import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BsCodeSlash} from 'react-icons/bs'
import {BiMessageAltDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><BiHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#skills"><BsBook/></a>
      <a href="#portfolio"><BsCodeSlash/></a>
      <a href="#contact"><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav