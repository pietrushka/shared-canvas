import React from 'react'

import ContactsBook from '../../components/ContactsBook/ContactsBook'
import Chat from '../../components/Chat/Chat'

import './ContactPage.scss'

const ContactPage = () => {
  
  return ( 
    <div className="contacts__page">
      
      <ContactsBook />
      <Chat />
      
    </div>
  )
}

export default ContactPage