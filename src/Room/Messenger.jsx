import React, {useState, useContext, useEffect} from 'react'
import {MdSend} from 'react-icons/md'
import ScrollToBottom from 'react-scroll-to-bottom';

import { UserContext } from '../App'
import {useSocket} from './Room'

import './Messenger.scss'

const Messenger = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext)
  const {socket} = useSocket()

  useEffect(() => {
    //handle new messages 
    const handleNewMessage = (message) => {
      setMessages(messages => [ ...messages, message ])
    }
    if (!!socket) socket.on('message', handleNewMessage)
  }, [socket])

  const sendMessage = (message) => {
    if (!!socket) {
      socket.emit('message', message)
      setMessages(messages => [ ...messages, {author: user.username, content: message} ])
      setMessage('')
    } else {
      window.alert("Message failed to send. Please try again later")
    }
  }

  const handleMessage = event => {
    event.preventDefault()
    const trimmedMessage = message.trim()
    if (trimmedMessage.length > 0) sendMessage(message)
    
  }

  return (
    <div className="messages">
      <ScrollToBottom className="messages-display">
      {
        user && (
          <>
          {
            messages.map((message, idx) => 
              message.author === user.username 
                ? (
                  <div key={idx} className="messages-container align-end">
                    <div className='message-text-container blue'>
                      <p className="message-text">{message.content}</p>
                    </div>
                  </div>
                )
                : (
                  <div key={idx} className="messages-container align-start">
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
      
      <form onSubmit={handleMessage} className="messages-input-group">
        <input 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)} 
          placeholder='Write message'
          className='message-input'
        />
        <button type='submit' className='send-message-btn'>
          <MdSend />
        </button>
      </form>
    </div>
  )
}


export default Messenger