import React, {useRef} from 'react'
import Vara from 'vara'


import './LandingPage2.scss'

const LandingPage2 = () => {
  setTimeout(function(){
    const laptopVara = new Vara(".top-element","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
    }], {
      textAlign:"left",
      fontSize: 24,
    });

    setTimeout(function(){
      const phoneVara = new Vara(".phone__screen","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
        text:"f(x) = ax + b",
    }], {
      textAlign:"center"
    });

    const tabletVara = new Vara(".tablet__screen","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"f(x) = ax + b",
    }], {
      textAlign:"center",
      fontSize: 36,
    });
    }, 500)
  }, 500);


  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="nav__logo">
            <a href="#" className="nav__brand">Nazwa.</a>
          </div>
            
          <div className="nav__menu">
            <a href="#" className="option--regular">O nas</a>
            <a href="#" className="option--regular">Kontakt</a>
            <a href="#" className="option--register">Rejestracja</a>
            <a href="#" className="option--login">Logowanie</a>
          </div>
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
              <button className="join-button">Dołącz teraz</button>
            </div>
          </div>

          <div className="image-content">
            <div className="hero-image tablet">
              <div className="screen__content">
                <div className="tablet__screen"></div>
              </div>
            </div>
            <div className="hero-image phone">
              <div className="screen__content">
                <div className="phone__screen"></div>
              </div>
            </div>
            <div className="hero-image laptop">
              <div className="top-element">
                
              </div>
              <div className="bottom-element"></div>
            </div>
          </div>
        </div>
      </main>
    </>              
  )
}

export default LandingPage2