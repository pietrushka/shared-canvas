import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
//import {FaBookmark} from 'react-icons/fa'
import {BiPlusCircle} from 'react-icons/bi'
//import {RiContactsBookFill} from 'react-icons/ri'
import {ImCross} from 'react-icons/im'
import {BsFillGearFill} from 'react-icons/bs'
 
import {UserContext} from '../../App'

import LogoContainer from '../Logo/Logo'

import './Navbar.scss'


const Navbar = ({currentPage}) => {
  const {setUser} = useContext(UserContext)

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
            <Link to='/console/join-make-room' className={`nav-link ${currentPage === 'join-make-room' && 'currentPage'}`}>
              <BiPlusCircle className='nav-icon' />
              <span className="link-text">Rooms</span>
            </Link>
          </li>


          {/* <li className="nav-item">
            <Link to="/console/contact" className={`nav-link ${currentPage === 'contacts' && 'currentPage'}`}>
              <RiContactsBookFill className='nav-icon' />
              <span className="link-text">Contacts</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/console/saved" className={`nav-link ${currentPage === 'saved' && 'currentPage'}`}>
              <FaBookmark className='nav-icon' />
              <span className="link-text">Saved</span>
            </Link>
          </li> */}
          
          <li className="nav-item">
            <Link to='/console/settings' className={`nav-link ${currentPage === 'settings' && 'currentPage'}`}>
              <BsFillGearFill className='nav-icon' />
              <span className="link-text">Settings</span>
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