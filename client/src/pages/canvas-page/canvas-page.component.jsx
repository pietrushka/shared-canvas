import React, {useState, useEffect} from 'react'
import queryString from 'query-string' //help with retrieving data from url
import io from 'socket.io-client'

import Canvas from '../../components/canvas/canvas.component'

let socket

const CanvasPage = ({location}) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT = 'http://localhost:4000'

  useEffect(() => {
    const {name, room}  = queryString.parse(location.search)//parameters from url 

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', {name, room}, () => {
      
    })

    //componentDidUnmount
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  return (
    <Canvas />
  )
}

export default CanvasPage