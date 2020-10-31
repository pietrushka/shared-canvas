import React from 'react'

import Navbar from '../shared/Navbar'
import Hero from './Hero'
import CurvedSection from '../shared/CurvedSection'
import Newsletter from './Newsletter'
import Footer from '../shared/Footer'
import './Landing.scss'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CurvedSection>
        <Newsletter />
      </CurvedSection>
      <Footer />

      <div className='copyrights'>
        <p className='copyrights-text'>© 2020 Created By Piotr Wiśniewski.</p>
      </div>
    </>
  )
}

export default LandingPage
