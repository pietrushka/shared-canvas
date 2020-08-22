import React from 'react'
import {IconContext} from 'react-icons'
import {FaUser, FaBookmark} from 'react-icons/fa'
import {BiPlusCircle} from 'react-icons/bi'
import {RiContactsBookFill} from 'react-icons/ri'
import {ImCross} from 'react-icons/im'
 

import './Navbar.css'


const Navbar = () => (
  <IconContext.Provider value={{color:'', size: '2rem'}}>
    <div className='navbar'>
      <ul className='navbar-nav'>

        <li className="logo">
        <a href="#" className="nav-link">
          <span className="link-text logo-text">SPLITER</span>
          {/* Add here a decent logo */}
        </a>
      </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUser className='nav-icon' />
            <span className="link-text">User</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <BiPlusCircle className='nav-icon' />
            <span className="link-text">Call</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <RiContactsBookFill className='nav-icon' />
            <span className="link-text">Contacts</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaBookmark className='nav-icon' />
            <span className="link-text">Saved</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <ImCross className='nav-icon' />
            <span className="link-text">Quit</span>
          </a>
        </li>
     </ul>
   </div>
  </IconContext.Provider>
   )

export default Navbar