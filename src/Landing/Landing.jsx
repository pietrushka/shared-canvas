import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Newsletter from './Newsletter'
import Footer from './Footer'
import './Landing.scss'


const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <svg 
        className='curved-svg' 
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 1440 199'>
        <path fill='#0099ff' fillOpacity='1' d='M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,160C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z' />
      </svg>

      <Newsletter />

      <svg
        className='curved-svg'
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 1440 320'
      >
        <path fill='#0099ff' fillOpacity='1' d='M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,96C672,107,768,181,864,202.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z' />
      </svg>
      
      <Footer />

      <div className='copyrights'>
        <p className='copyrights-text'>© 2020 Created By Piotr Wiśniewski.</p>
      </div>
    </>
  )
}

export default LandingPage
