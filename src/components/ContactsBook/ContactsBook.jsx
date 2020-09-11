import React from 'react'
import {GiMagnifyingGlass} from 'react-icons/gi'

import './ContactsBook.scss'
import userImg from '../../assets/user.png'


const ContactsBook = () => {
  return (
    <div className="contacts__book">
      <div className="searchbox">
        <input type="text"/>
        <button className='glass-icon__container'>
          <GiMagnifyingGlass className='glass-icon' />
        </button>
      </div>

      <div className="contacts">
        <div className="contact__preview">
          <img className='avatar' src={userImg} />
          <div className="contact__data">
            <span className="name">User1</span>
            <div className="last-message">
              <span className="last-message__content">Matematyka</span>
              <span className="last-message__date">01-09-2020</span>
            </div>
          </div>
        </div>
        <div className="contact__preview">
          <img className='avatar' src={userImg} />
          <div className="contact__data">
            <span className="name">User2</span>
            <div className="last-message">
              <span className="last-message__content">Matematyka</span>
              <span className="last-message__date">01-09-2020</span>
            </div>
          </div>
        </div>
        <div className="contact__preview">
          <img className='avatar' src={userImg} />
          <div className="contact__data">
            <span className="name">User3</span>
            <div className="last-message">
              <span className="last-message__content">Matematyka</span>
              <span className="last-message__date">01-09-2020</span>
            </div>
          </div>
        </div>
        <div className="contact__preview">
          <img className='avatar' src={userImg} />
          <div className="contact__data">
            <span className="name">User4</span>
            <div className="last-message">
              <span className="last-message__content">Matematyka</span>
              <span className="last-message__date">01-09-2020</span>
            </div>
          </div>
        </div>
        <div className="contact__preview">
          <img className='avatar' src={userImg} />
          <div className="contact__data">
            <span className="name">User5</span>
            <div className="last-message">
              <span className="last-message__content">Matematyka</span>
              <span className="last-message__date">01-09-2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsBook