import React from 'react'
import queryString from 'query-string' //help with retrieving data from url
import io from 'socket.io-client'

import Canvas from '../../components/canvas/canvas.component'

const CanvasPage = () => {
  const socket = io('http://localhost:4000')
  return (
    <Canvas />
  )
}

export default CanvasPage