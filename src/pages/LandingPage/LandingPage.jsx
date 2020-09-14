import React, {useEffect, useState, useContext} from 'react'
import Vara from 'vara'
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

import {UserContext} from '../../App'
import './LandingPage.scss'

const LandingPage2 = () => {  
  const {setUser} = useContext(UserContext)

  const logout = () => {
    localStorage.removeItem('token')
    isLogged = false
    setUser(null)
    window.location.reload()
  }

  const [open, setOpen] = useState(false)
  let isLogged = localStorage.getItem('token') ? true : false
  console.log(window.screen.width)

  

  const hamburgerHandler = () => {
    setOpen(!open)
  }

  //handwriting using vara.js. To get responsive size reload the page
  useEffect(() => {
    const setFontSizes = () => {
      if (window.screen.width < 390) return {laptop: 7, tablet: 5, phone: 2}
      if (window.screen.width < 630) return {laptop: 9, tablet: 7, phone: 3}
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

    //laptop Vara
    new Vara(".laptop__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign: "left",
      fontSize: fontSize.laptop,
      strokeWidth: 2,
      delay: 500
    }]);
    
    //phone Vara
    new Vara(".phone__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign:"left",
      fontSize: fontSize.phone,
      strokeWidth: 2,
      delay: 1000
    }]);
  
    //tablet Vara
    new Vara(".tablet__screen", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
      textAlign:"left",
      fontSize: fontSize.tablet,
      strokeWidth: 2,
      delay: 1000
    }])
  }, [])

  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="nav__logo">
            <Link to="#" className="nav__brand">wideboard.</Link>
          </div>
          
          <button onClick={hamburgerHandler} className={`hamburger ${open ? 'open' : null}`}>
            <div className="hamburger__inner"></div>
          </button>

          <ul className='nav__menu' id='nav__menu'>
            <li><Link className='option--regular' to='/about'>About</Link></li>
            <li><Link className='option--regular' to='/contact'>Contact</Link></li>
            {
              isLogged 
                ? (
                  <>
                    <li><button onClick={logout} to="/logout" className="option--bold">Logout</button></li>
                    <li><Link to="/console/join-make-room" className="option--btn">Otwórz konsole</Link></li>
                  </> 
                )
                : (
                  <>
                    <li><Link  to="/register" className="option--bold">Register</Link></li>
                    <li><Link  to="/login" className="option--btn">Login</Link></li>
                  </>
                )
            }
          </ul>

        </div>     
      </header>

      <div id="menu-overlay" className={open ? 'open' : null}>
        <ul>
          <li><Link className='option--regular' to='/about'>About</Link></li>
          <li><Link className='option--regular' to='/contact'>Contact</Link></li>
            {
              isLogged 
                ? (
                  <>
                    <li><Link to="/logout" className="option--bold">Logout</Link></li>
                    <li><Link to="/console/join-make-room" className="option--btn">Open console</Link></li>
                  </> 
                )
                : (
                  <>
                    <li><Link  to="/register" className="option--bold">Rejestracja</Link></li>
                    <li><Link  to="/login" className="option--btn">Logowanie</Link></li>
                  </>
                )
            }
          </ul>
      </div>

      <main className="hero">
        <div className="hero__container">
          <div className="text__column">
            <h1>
              <div className="text-content__line">We help</div>
              <div className="text-content__line">transfer knowledge</div>
            </h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquam voluptates ipsum iusto consequuntur quae odit eaque molestias maxime quis assumenda tempore placeat in, quas ea quod eos, earum fugit.</p>

            <div className="btn-container">
              <button className="join-button">Learn more</button>
            </div>
          </div>

          <div className="graphics__column">

            <div className="graphics__wrapper">
              <div className="graphics__container">
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
        </div>

      </main>
      
      <div className="wave-container">
        <svg className='curved-svg--up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 199">
          <path fill="#0099ff" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,160C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"></path>
        </svg>
      </div>

      <section className="newsletter">
        <div className="newsletter-wrapper">
          <h2 className='newsletter__heading'>Sign up to newsletter</h2>
          <p>Don't miss new <span>wideboard.</span> features</p>
          <form action="" className="newsletter__form">
            <div className="form-group">
              <input type="text" className="form__input" placeholder="Twoje imię"/>
              <input type="email" className="form__input" placeholder="Twój adress e-mail"/>
            </div>

            {/* <div className="form-group-permision">
              <input type="checkbox" id='permission-checkbox' />
              <label className='permission-label' htmlFor="permission-checkbox">
                Wyrażam zgodę na przetwarzanie przez <span className='wideboard__inline'>wideboard.</span> moich danych osobowych w postaci imienia, adresu e-mail w celu przesyłania mi informacji marketingowych dotyczących produktów i usług oferowanych przez <span className='wideboard__inline'>wideboard.</span> za pomocą wiadomości elektronicznych.
              </label>
            </div> */}
            
            <button type="submit" className="form__btn" value="submit">Join Now !</button>
          </form>
        </div>
      </section>

      <footer>

      <svg className='curved-svg--down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,96C672,107,768,181,864,202.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        
        <div className="links">

          <div className="links__group">
            <h3 className="footer__brand">wideboard.</h3>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className="links__group">
            <h3>Informacje</h3>
            <Link to='/conditions'>Terms & Conditions</Link>
            <Link to='/privacy'>Privacy Policy</Link>
          </div>

          <div className="links__media">
              <h3>Join us!</h3>
              <div className="icons__container">
                <a href="#">
                  <FaFacebook size={'2em'}/>
                </a>
                <a href="#">
                  <FaTwitter size={'2em'}/>
                </a>
                <a href="#">
                  <FaInstagram size={'2em'}/>
                </a>
                <a href="#">
                  <FaYoutube size={'2em'}/>
                </a>
              </div>
            </div>
        </div>

        <div className="copyrights">
          <p className="copyrights__text">© 2020 Created By Piotr Wiśniewski.</p>
        </div>

      </footer>
    </>              
  )
}

export default LandingPage2