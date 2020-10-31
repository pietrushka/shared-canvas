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
          <div className="image-cln">
            <img alt='about illustration' src={aboutImg} />
          </div>
          <div className="text-cln">
            <p className="about-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
            </p>
            <p className="about-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
            </p>
            <p className="about-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum similique facere repellendus doloremque nam, ratione laudantium iusto porro cumque? Inventore commodi eligendi nam. Officia perspiciatis laborum delectus voluptatum assumenda.
            </p>
          </div>
        </div>
      </CurvedSection>
      <Footer />
    </>
  )
}

export default About