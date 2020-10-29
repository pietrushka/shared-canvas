import React, { useEffect, useRef } from 'react'
import Vara from 'vara'
import {gsap, TimelineLite, Power3} from 'gsap';

import './Hero.scss'

export default function Hero() {
  const contentRef = useRef(null)
  const tl = new TimelineLite({ delay: 0.8 })
  
  useEffect(() => {
    // Animation
    const headlineFirst = contentRef.current.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const paragraph = contentRef.current.children[1].children[0]
    const button = contentRef.current.children[2]
    debugger
    //Remove initial flash
    gsap.to(contentRef.current, 1, {css: {visibility: 'visible'}})
    tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
      y: 40,
      ease: Power3.easeOut
    }, 0.15, 'Start')
      .from(paragraph, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 0)
      .from(button, 1, { y: 10, opacity: 0, ease: Power3.easeOut }, 0)


    
    // handwriting using vara.js. To get responsive size reload the page
    const setFontSizes = () => {
      if (window.screen.width < 350) return { laptop: 8, tablet: 6, phone: 3 }
      if (window.screen.width < 390) return { laptop: 9, tablet: 7, phone: 4 }
      if (window.screen.width < 630) return { laptop: 11, tablet: 8, phone: 4 }
      if (window.screen.width < 691) return { laptop: 17, tablet: 12, phone: 6 }
      if (window.screen.width < 768) return { laptop: 18, tablet: 13, phone: 7 }
      if (window.screen.width < 972) return { laptop: 11, tablet: 7, phone: 4 }
      if (window.screen.width < 1186) return { laptop: 14, tablet: 11, phone: 6 }
      return { laptop: 16, tablet: 13, phone: 7 }
    }

    const fontSize = setFontSizes()

    const laptopVara = new Vara('#laptop-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.laptop,
      strokeWidth: 2,
      delay: 2000
    }])

    // phone Vara
    const phoneVara = new Vara('#phone-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.phone,
      strokeWidth: 2,
      delay: 2300
    }])

    // tablet Vara
    const tabletVara = new Vara('#tablet-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.tablet,
      strokeWidth: 2,
      delay: 2300
    }])
  }, [tl])

  return (
    <div className='hero'>
      <div className='hero-text' ref={contentRef}>
        <h1 className='hero-heading'>
          <div className='text-line'>
            <div>We help</div>
          </div>
          <div className='text-line'>
            <div>transfer knowledge</div>
          </div>
        </h1>

        <p className='hero-paragraph'>
          <div className="paragraph-wall">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquam voluptates ipsum iusto.
            </div>
          </div>
          
        </p>

        <button className='hero-btn'>
          Find out more
        </button>

      </div>
    
      <div className='hero-images'>
        <div className="images-container">
          <div className="images-inner">

            <div className="tablet-img">
              <div className='device-screen' id='tablet-screen'/>
            </div>

            <div className="phone-img">
              <div className='device-screen' id='phone-screen'/>
            </div>

            <div className="laptop-img">
              <div className="laptop-top-el">
                <div className='device-screen' id='laptop-screen'/>
              </div>
              <div className="laptop-bottom-el" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}