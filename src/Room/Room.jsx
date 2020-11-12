import React, { useState, useRef, useEffect, useContext, createContext } from 'react'
import io from 'socket.io-client'
import { useHistory } from "react-router-dom";

import { UserContext } from '../App'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Whiteboard from './Whiteboard'

import './Room.scss'


// create context and export hook to acccess it
const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)

const RoomPage = ({match}) => {
  const { user } = useContext(UserContext)
  const [socket, setSocket] = useState(null)
  const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT
  const { roomId } = match.params
  let history = useHistory();

  useEffect(() => {
    // connect socket
    if (user && !socket) {
      setSocket(
        io.connect(SERVER_ENDPOINT, {
          transports: ['websocket'],
          reconnectionAttempts: 15
        })
      )
    }
      
    if (!!socket) {
      socket.emit('join', { user, roomId }, (error) => {
        if (error) {
          window.alert(error)
          history.push("/console/create-join-room")
        }
      })

      socket.on('room-full', () => {
        socket.disconnect()
        history.push("/console/create-join-room")
        window.alert(`Room ${roomId} is full`)
      })
    }
    
    return () => {
      if (!!socket) socket.disconnect()
    }
  }, [user, socket])

  return (
    <SocketContext.Provider value={{ socket }}>

      <div className='room-container'>

        <LeftPanel roomId={roomId} />

        <Whiteboard />

        <RightPanel />

      </div>

    </SocketContext.Provider>
  )
}

export default RoomPage