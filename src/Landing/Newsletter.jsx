import React from 'react'

import './Newsletter.scss'

export default function Newsletter() {
  return (
    <section className='newsletter'>
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