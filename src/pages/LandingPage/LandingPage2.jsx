import React, {useEffect, useState} from 'react'
import Vara from 'vara'
import {Link} from 'react-router-dom'

import './LandingPage2.scss'

const LandingPage2 = () => {  
  const [open, setOpen] = useState(false)
  const isLogged = localStorage.getItem('token') ? true : false

  const hamburgerHandler = () => setOpen(!open)
 
  //handwriting using vara.js
  useEffect(() => {
    const setFontSizes = () => {
      if (window.screen.width < 320) return {laptop: 7, tablet: 5, phone: 2}
      if (window.screen.width < 575) return {laptop: 9, tablet: 7, phone: 3}
      if (window.screen.width < 691) return {laptop: 15, tablet: 12, phone: 6}
      if (window.screen.width < 768) return {laptop: 11, tablet: 9, phone: 4}
      if (window.screen.width < 972) return {laptop: 13, tablet: 10, phone: 5}
      if (window.screen.width < 1100) return {laptop: 16, tablet: 12, phone: 6}
      if (window.screen.width < 1400) return {laptop: 17, tablet: 14, phone: 7}
      if (window.screen.width < 1600) return {laptop: 22, tablet: 17, phone: 9}
      if (window.screen.width < 1642) return {laptop: 25, tablet: 20, phone: 11}

      return {laptop: 26, tablet: 21, phone: 11}
    }

    const fontSize = setFontSizes()

    const laptopVara = new Vara(".laptop__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign: "left",
      fontSize: fontSize.laptop,
      strokeWidth: 2,
      delay: 500
    }]);
      
    const phoneVara = new Vara(".phone__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign:"left",
      fontSize: fontSize.phone,
      strokeWidth: 2,
      delay: 1000
    }]);
  
    const tabletVara = new Vara(".tablet__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign:"left",
      fontSize: fontSize.tablet,
      strokeWidth: 2,
      delay: 1000
    }])
  })

  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="nav__logo">
            <a href="#" className="nav__brand">Nazwa.</a>
          </div>

          <button onClick={hamburgerHandler} className={`hamburger ${open && 'open'}`} id='hamburger'>
            <div className="hamburger__inner"></div>
          </button>
           
          <ul className={`nav__menu ${open ? 'open' : 'close'}`} id="nav__menu">
            <li><Link to="/about" className="option--regular">O nas</Link></li>
            <li><Link to="/contact" className="option--regular">Kontakt</Link></li>
            {
              isLogged 
                ? (
                  <>
                    <li><Link to="/login" className="option--bold">Rejestracja</Link></li>
                    <li><Link to="/register" className="option--btn">Logowanie</Link></li>
                  </>
                )
                : (
                <>
                  <li><Link to="/logout" className="option--bold">Wyloguj się</Link></li>
                  <li><Link to="/console" className="option--btn">Otwórz konsole</Link></li>
                </> 
              )
            }
          </ul>
        </div>     
      </header>

      <main className="hero">
        <div className="hero__container">
          <div className="text-content">
            <h1>
              <div className="text-content__line">Pomagamy</div>
              <div className="text-content__line">przekazywać wiedzę</div>
            </h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquam voluptates ipsum iusto consequuntur quae odit eaque molestias maxime quis assumenda tempore placeat in, quas ea quod eos, earum fugit.</p>

            <div className="btn-container">
              <button className="join-button">Dowiedz się więcej</button>
            </div>
          </div>

          <div className="graphics-container">
            <div className="graphics__wrapper">
              <div className="hero-image tablet">
                <div className="tablet__screen"></div>
              </div>
              <div className="hero-image phone">
                <div className="phone__screen"></div>
              </div>
              <div className="hero-image laptop">
                <div className="top-element">
                  <div className="laptop__screen"></div>
                </div>
                <div className="bottom-element"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>              
  )
}

export default LandingPage2