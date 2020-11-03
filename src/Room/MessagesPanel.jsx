import React, {useState, useContext} from 'react'
import {MdSend} from 'react-icons/md'
import ScrollToBottom from 'react-scroll-to-bottom';

import { UserContext } from '../App'

import './MessagesPanel.scss'

const MessagesPanel = ({messages, sendMessage}) => {
  const [message, setMessage] = useState('')
  const { user } = useContext(UserContext)

  const handleMessage = event => {
    event.preventDefault()
    const trimmedMessage = message.trim()
    if (trimmedMessage.length > 0) sendMessage(message)
    setMessage('')
  }


  return (
    <div className="messages-panel">
      <ScrollToBottom className="message-display">
      {
        user && (
          <>
          {
            messages.map((message, idx) => 
              message.author === user.username 
                ? (
                  <div key={idx} className="message-container align-end">
                    <div className='message-text-container blue'>
                      <p className="message-text">{message.content}</p>
                    </div>
                  </div>
                )
                : (
                  <div key={idx} className="message-container align-start">
                    <p className="message-author">{message.author}</p>
                    <div className='message-text-container gray'>
                      <p className="message-text">{message.content}</p>
                    </div>
                  </div>
                )
            )
          }
          </>
        )
      }
      </ScrollToBottom>
      <form 
        onSubmit={handleMessage} 
        className="message-input-group"
      >
        <input 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)} 
          placeholder='Write message'
          className='message-input'
        />
        <button
          type='submit'
          className='send-message-btn'
        >
          <MdSend />
        </button>
      </form>
    </div>
  )
}


export default MessagesPanel