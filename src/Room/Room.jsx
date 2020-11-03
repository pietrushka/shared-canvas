import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import { UserContext } from '../App'
import RightPanel from './RightPanel'
import './Room.scss'
import Whiteboard from './Whiteboard'

const RoomPage = ({ match }) => {
  const { user } = useContext(UserContext)
  const [messages, setMessages] = useState([]);
  const socketRef = useRef()
  const whiteboardRef = useRef()
  const { roomId } = match.params
  const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT
  
  useEffect(() => {
    if (!user) return
    
    socketRef.current = io.connect(SERVER_ENDPOINT)

    socketRef.current.emit('join', { user, roomId }, (error) => {
      if (error) {
        window.alert(error)
      }
    })

    socketRef.current.on('drawing', whiteboardRef.current.onDrawingEvent)
    
    //handle new messages 
    const handleNewMessage = (message) => {
      setMessages(messages => [ ...messages, message ])
    }
    socketRef.current.on('message', handleNewMessage)
    return () => socketRef.current.disconnect()
    
  }, [SERVER_ENDPOINT, user, roomId])



  
  const emitDrawing = (data) => {
    socketRef.current.emit('drawing', data)
  }

  const showRoomIdPrompt = () => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', roomId)
  }

  const sendMessage = (message) => {
    socketRef.current.emit('message', message)
    setMessages(messages => [ ...messages, {author: user.username, content: message} ])
  }
  
  return (
    <>
      <div className='room-container'>
        <div className="left-panel">
          <div className='exit'>
            <Link to='/console/create-join-room' className='exit-link'>
              Exit
            </Link>
          </div>

          <div className='roomId'>
            <button className='roomId-btn' onClick={showRoomIdPrompt}>Get room ID</button>
          </div>
        </div>

        <Whiteboard ref={whiteboardRef} emitDrawing={emitDrawing} />

        <RightPanel messages={messages} sendMessage={sendMessage} />


      </div>
    </>
  )
}

export default RoomPage
