import React from 'react'
import {Link} from 'react-router-dom'

import logoSvg from '../../assets/header_logo.svg'

import './LandingPage.scss'

const LandingPage = () => {
  const isLogged = localStorage.getItem('token') ? true : false
  
  console.log(isLogged) 

  return(
    <>
    <div className='page-container'>
      <header className='header'>
        <div className="logo__container"> 
          <Link to="/" className="logo__link">
            <span>SPLITER</span>
            <img className='logo_icon' src={logoSvg} />
          </Link>

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

    </div>
    {/* <p>LandingPage</p>
      {
        isLogged 
          ? <Link to='/console'>Console</Link> 
          : (
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            )
      }   */}
    </>
  )
}

export default LandingPage