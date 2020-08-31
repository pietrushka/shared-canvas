import React, {useState, useCallback} from 'react'
import {Link} from 'react-router-dom'

import useEventListener from '../../hooks/useEventListener'

import logoSvg from '../../assets/header_logo.svg'
import backgroundVideo from "../../assets/landing_page_video.mp4"

import './LandingPage.scss'

const LandingPage = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  const isLogged = localStorage.getItem('token') ? true : false

  const headerHandler = () => {
    if(window.scrollY > 0) {
      setIsHeaderSticky(true)
    }else {
      setIsHeaderSticky(false)
    }
  }
  
  useEventListener('scroll', headerHandler)

  return(
    <>

      <header className={`header ${isHeaderSticky ? 'pos--sticky' : null}`}>
        <div className="logo__container"> 
          <div className="logo__div">
            <span>SPLITER</span>
            <img className='logo_icon' src={logoSvg} />
          </div>

        </div>

        {
          isLogged 
            ? (
                <div className='options__container'>
                  <Link className='header__option' to='/console'>Open Console</Link>
                </div>
              )
            : (
                <div className='options__container'>
                  <Link className='header__option' to='/login'>Login</Link>
                  <Link className='header__option' to='/register'>Register</Link>
                </div>
              )
          }
      </header>

      <div className='section'>
        <video autoPlay loop muted style={{height: '100vh',width: '100vw'}}>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
      </div>

    </>
  )
}

export default LandingPage