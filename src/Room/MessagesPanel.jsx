import React, {useState, useContext} from 'react'
import {MdSend} from 'react-icons/md'

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
    <div className="messages-panel-container">
      <div className="message-display">
        {
          messages.map((message, idx) => {
            if(message.author === user.username) {
              return (
                <div key={idx} className='message-container blue'>
                  <p className="message-text">{message.content}</p>
                </div>
              )
            } else {
              return (
                <div key={idx} className='message-container'>
                  <p className="message-text">{message.content}</p>
                </div>
              )
            }
          })
        }
        
      </div>
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