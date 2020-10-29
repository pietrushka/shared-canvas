import React, {useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../App'
import './Menu.scss'

export default function Menu ({orientation}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    // Check is user logged in
    const token = window.localStorage.getItem('wideboardToken')
    token ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [])

  const logout = () => {
    window.localStorage.removeItem('wideboardToken')
    setUser(null)
    setIsLoggedIn(false)
  }
  return (
    <ul className={`menu ${orientation}`}>
      <li>
        <Link className='menu-option-basic' to='/about'>About</Link>
      </li>
      <li>
        <Link className='menu-option-basic' to='/contact'>Contact</Link>
      </li>
      {
        isLoggedIn ? (
          <>
            <li>
              <Link to='/' className='menu-option-bold' onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link className='menu-option-btn' to='/console/create-join-room'>Open Console</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className='menu-option-bold' to='/login'>Login</Link>
            </li>
            <li>
              <Link className='menu-option-btn' to='/register'>Register</Link>
            </li>
          </>
        )
      }
    </ul>
  )
}