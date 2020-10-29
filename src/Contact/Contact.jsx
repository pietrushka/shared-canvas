import React, {useState} from 'react'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import './Contact.scss'

const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)

  // simulate call to function
  const sendMessage = () => {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(window.alert(`email: ${email}, message: ${message}`)), 1000)
    })
  }

  const onSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)
      await sendMessage()
      setLoading(false)
      setEmail('')
      setMessage('')
    } catch (error) {
      window.alert(error)
    }
  }
  
  return ( 
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default ContactPage