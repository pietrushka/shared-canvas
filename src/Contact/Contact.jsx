import React, {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap';

import Navbar from '../shared/Navbar'
import CurvedSection from '../shared/CurvedSection'
import Footer from '../shared/Footer'
import './Contact.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  let contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.children, 
      {
        y: '+=100', 
        opacity: 0
      }, 
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'easeInOut'
      }
    )
  }, []);  

  // simulate call to function
  const sendMessage = () => {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(window.alert(`name: ${name},email: ${email}, message: ${message}`)), 1000)
    })
  }

  const onSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)
      await sendMessage()
      setLoading(false)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      window.alert(error)
    }
  }
  
  return ( 
    <>
      <Navbar />
      <CurvedSection>
        <section className='contact' ref={el => contentRef = el}>
        <h2 className='contact__heading'>Feel free to contact us</h2>
        <p className='contact__paragraph'>
          Your opinion is really important
        </p>

        <form onSubmit={onSubmit} className='contact__form'>
          <input 
            type='text'
            className='contact__input' 
            value={name}
            placeholder='Your name' 
            onChange={event => setName(event.target.value)}
            required
          />

          <input 
            type='email'
            className='contact__input' 
            value={email}
            placeholder='Your e-mail' 
            onChange={event => setEmail(event.target.value)}
            required
          />

          <textarea
            className='contact__input contact__input--long' 
            placeholder='Message'
            value={message}
            onChange={event => setMessage(event.target.value)}
            rows='3'
            required
          ></textarea>
          <button type='submit' className='contact__btn'>Send!</button>
        </form>
      </section>
    </CurvedSection>
    <Footer />
    </>
  )
}

export default Contact