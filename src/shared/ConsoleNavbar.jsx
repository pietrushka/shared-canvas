import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { BiPlusCircle } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { BsFillGearFill } from 'react-icons/bs'

import { UserContext } from '../App'
import LogoContainer from './Logo'

import './ConsoleNavbar.scss'

const ConsoleNavbar = () => {
  const { setUser } = useContext(UserContext)
  const location = useLocation()

  const pathName = location.pathname
  const currentPage = pathName.slice(9)

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('wideboardToken')
  }

  return (
    <div className='navbar'>
      <IconContext.Provider value={{ size: '2rem' }}>
        <ul className='navbar-nav'>
          <li className='logo'>
            <Link to='#' className='nav-link'>
              <span className='link-text logo-text'>wideboard.</span>
              <LogoContainer />
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/console/create-join-room' className={`nav-link ${currentPage === 'create-join-room' && 'currentPage'}`}>
              <BiPlusCircle className='nav-icon' />
              <span className='link-text'>Room</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/console/settings' className={`nav-link ${currentPage === 'settings' && 'currentPage'}`}>
              <BsFillGearFill className='nav-icon' />
              <span className='link-text'>Settings</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/' onClick={logout} className='nav-link'>
              <ImCross className='nav-icon' />
              <span className='link-text'>Logout</span>
            </Link>
          </li>

        </ul>

      </IconContext.Provider>
    </div>
  )
}

export default ConsoleNavbar