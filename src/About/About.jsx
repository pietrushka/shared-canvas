import React, {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap';

import Navbar from '../shared/Navbar'
import CurvedSection from '../shared/CurvedSection'
import Footer from '../shared/Footer'
import aboutImg from '../assets/questions.svg'
import './About.scss'

const About = () => {
  return (
    <>
      <Navbar />
      <CurvedSection>
        <div className="about-section">
          <div className="about-wrapper">
            <div className="image-container">
              <img alt='about illustration' src={aboutImg} />
            </div>
            <div className="text-container">
              <p className="about-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
              </p>
            </div>
          </div>
        </div>
      </CurvedSection>
      <Footer />
    </>
  )
}

export default About