import React, { useState, useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import './Newsletter.scss'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setLoading] = useState(false)
  let contentRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(contentRef.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: contentRef,
      start: 'top 50%',
    }})
  }, []);  

   // simulate call to function
  const signToNewsletter = () => {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(window.alert(`name: ${name}, email: ${email}`)), 1000)
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      await signToNewsletter()
      setLoading(false)
      setName('')
      setEmail('')
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <section className='newsletter' ref={el => contentRef = el}>
      <h2 className='newsletter-heading'>Sign up to newsletter</h2>
      <p className='newsletter-paragraph'>
        Don't miss new <span>wideboard.</span> features
      </p>

      <form onSubmit={onSubmit} className='newsletter-form'>
        <input 
          type='text'
          className='newsletter-input' 
          placeholder='Your name'
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input 
          type='email'
          className='newsletter-input' 
          value={email}
          placeholder='Your e-mail' 
          onChange={event => setEmail(event.target.value)}
          required
        />
        <button type='submit' className='newsletter-btn'>Join now!</button>
      </form>
    </section>
  )
}