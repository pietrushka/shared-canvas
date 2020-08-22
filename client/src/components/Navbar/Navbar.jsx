import React from 'react'
import {IconContext} from 'react-icons'
import {FaUser, FaBookmark} from 'react-icons/fa'
import {BiPlusCircle} from 'react-icons/bi'
import {RiContactsBookFill} from 'react-icons/ri'
import {ImCross} from 'react-icons/im'
 
import LogoContainer from '../Logo/Logo'

import './Navbar.css'


const Navbar = () => (
  <IconContext.Provider value={{ size: '2rem'}}>
    <div className='navbar'>
      <ul className='navbar-nav'>

        <li className="logo">
        <a href="#" className="nav-link">
          <span className="link-text logo-text">SPLITER</span>
          <LogoContainer />
        </a>
      </li>

        <li className="nav-item">
          <a href='/user' className="nav-link">
            <FaUser className='nav-icon' />
            <span className="link-text">User</span>
          </a>
        </li>

        <li className="nav-item">
          <a href='/rooms' className="nav-link">
            <BiPlusCircle className='nav-icon' />
            <span className="link-text">Call</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/contacts" className="nav-link">
            <RiContactsBookFill className='nav-icon' />
            <span className="link-text">Contacts</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/saved" className="nav-link">
            <FaBookmark className='nav-icon' />
            <span className="link-text">Saved</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            <ImCross className='nav-icon' />
            <span className="link-text">Logout</span>
          </a>
        </li>
        
     </ul>
   </div>
  </IconContext.Provider>
   )

export default Navbar