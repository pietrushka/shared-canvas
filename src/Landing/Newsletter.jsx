import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import './Newsletter.scss'

export default function Newsletter() {
  let contentRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(contentRef.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: contentRef,
      start: 'top 50%',
    }})
  });  

  return (
    <section className='newsletter' ref={el => contentRef = el}>
      <h2 className='newsletter-heading'>Sign up to newsletter</h2>
      <p className='newsletter-paragraph'>
        Don't miss new <span>wideboard.</span> features
      </p>

      <form className='newsletter-form'>
        <input className='newsletter-input' placeholder='Your name' />
        <input className='newsletter-input' placeholder='Your e-mail' />
        <button className='newsletter-btn'>Join now!</button>
      </form>
    </section>
  )
}