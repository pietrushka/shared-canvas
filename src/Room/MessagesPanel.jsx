import React, {useState} from 'react'
import {MdSend} from 'react-icons/md'


import './MessagesPanel.scss'

const MessagesPanel = () => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {

  }

  return (
    <div className="messages-panel-container">
      <div className="message-display">
        <div className='message-container'>
          <p className="message-text">Lorem, ipsum dolor sit amet </p>
        </div>
      </div>
      <div className="message-input-group">
        <input 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)} 
          placeholder='Write message'
          className='message-input'
        />
        <button
          onClick={sendMessage}
          className='send-message-btn'
        >
          <MdSend />
        </button>
      </div>
    </div>
  )
}


export default MessagesPanel