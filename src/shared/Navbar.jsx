import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Menu from './Menu'
import './Navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  const hamburgerHandler = () => {
    setOpen(!open)
  }
  return (
    <>
      <nav className='landing-navbar'>
        <div className='navbar-inner'>
          <Link to='/' className='navbar-logo'>wideboared.</Link>
          <button className='hamburger' onClick={hamburgerHandler}>
            <div className='hamburger-inner' open={open && true} />
          </button>
            <Menu orientation='horizontal' />
          </div>
        </nav>
      <div className='overlay-menu' open={open && true}>
        <Menu orientation='vertical' />
      </div>
    </>
  )
}