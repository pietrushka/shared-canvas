import React, { useState } from 'react'

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
          <div className='navbar-logo'>wideboared.</div>
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