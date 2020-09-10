import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {FaUser, FaBookmark} from 'react-icons/fa'
import {BiPlusCircle} from 'react-icons/bi'
import {RiContactsBookFill} from 'react-icons/ri'
import {ImCross} from 'react-icons/im'
 
import {UserContext} from '../../UserContext'

import LogoContainer from '../Logo/Logo'

import './Navbar.scss'


const Navbar = () => {
  const {user, setUser} = useContext(UserContext)  

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <div className='navbar'>
      <IconContext.Provider value={{ size: '2rem'}}>
        <ul className='navbar-nav'>
          <li className="logo">
            <Link to="#" className="nav-link">
            <span className="link-text logo-text">SPLITER</span>
            <LogoContainer />
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/console/join-make-room' className="nav-link">
              <BiPlusCircle className='nav-icon' />
              <span className="link-text">Rooms</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/console/user' className="nav-link">
              <FaUser className='nav-icon' />
              <span className="link-text">User</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/console/contacts" className="nav-link">
              <RiContactsBookFill className='nav-icon' />
              <span className="link-text">Contacts</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/console/saved" className="nav-link">
              <FaBookmark className='nav-icon' />
              <span className="link-text">Saved</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/' onClick={logout} className="nav-link">
              <ImCross className='nav-icon' />
              <span className="link-text">Logout</span>
            </Link>
          </li>
          
        </ul>
   
      </IconContext.Provider>
    </div>
  )
}

export default Navbar