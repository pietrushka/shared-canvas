import React, { useState, useRef, useEffect, useContext, createContext } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import { UserContext } from '../App'
import RightPanel from './RightPanel'
import './Room.scss'
import Whiteboard from './Whiteboard'

const SocketContext = createContext()

const RoomPage = ({ match }) => {
  const { user } = useContext(UserContext)
  const [socket, setSocket] = useState(null)
  const { roomId } = match.params
  const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT

  const connectSocket = () => {
    setSocket(
        io.connect(SERVER_ENDPOINT, {
          transports: ['websocket'],
          reconnectionAttempts: 15
        })
      )
  }

  useEffect(() => {
    if (user && !socket) connectSocket()
      
    if (!!socket) {
      socket.emit('join', { user, roomId }, (error) => {
        if (error) {
          window.alert(error)
        }
      })
    }
    
    return () => {
      if (!!socket) socket.disconnect()
    }
  }, [user, socket])


  const showRoomIdPrompt = () => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', roomId)
  }
  
  return (
      <SocketContext.Provider
      value={{
        socket: socket
      }}
    >
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

        <Whiteboard />

        <RightPanel />

      </div>
    </SocketContext.Provider>
  )
}

export default RoomPage

export const useSocket = () => useContext(SocketContext)