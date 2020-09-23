import React, { useState } from 'react'

import { BsFileEarmarkPlus } from 'react-icons/bs'

import './Chat.scss'
import userImg from '../../assets/user.png'

const Chat = () => {
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = event => {
    event.preventDefault()
    setNewMessage('')
  }

  const inputHandler = event => {
    setNewMessage(event.target.value)
  }

  return (
    <div className='chat'>

      <div className='chat__navbar'>
        <img className='avatar' src={userImg} />
        <div className='contact__name'>User1</div>

        <div className='navbar__option'>
          <button className=''>Utwórz pokój</button>
          <button className=''>zadzwoń</button>
          <button className=''>video-rozmowa</button>
          <button className=''>statystyki</button>
        </div>
      </div>

      <div className='chat__messages'>
        <div className='display__message' />

        <form className='send__message' onSubmit={sendMessage}>

          <input type='file' className='addFile' id='addFile' />
          <label className='addFile__label' htmlFor='addFile'>
            <BsFileEarmarkPlus />
          </label>

          <input
className='message-input'
            type='text'
            placeholder='Napisz wiadomość'
            value={newMessage}
            onChange={inputHandler}
          />

          <button
            className='btn'
            type='submit'
          >
            Wyślij
          </button>
        </form>

      </div>
    </div>
  )
}

export default Chat
