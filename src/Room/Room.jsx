import React, { useRef, useEffect, useContext } from 'react'
import io from 'socket.io-client'

import { UserContext } from '../App'

import {
  RoomContainer, LeftPanel, ExitBox, ExitLink, RoomIdBox, RoomIdBtn, Toolbox, Pen, ColorsList, ColorBtn, Eraser, WhiteBoard
} from './Room.styles'

const RoomPage = ({ match }) => {
  const { user } = useContext(UserContext)
  const { roomId } = match.params

  const socketRef = useRef()
  const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT
  socketRef.current = io.connect(SERVER_ENDPOINT)

  const showRoomIdPrompt = () => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', roomId)
  }

  useEffect(() => {
    // emits 2 join with user: null and user: id
    // without first join live drawing doesnt work
    socketRef.current.emit('join', { user, roomId }, (error) => {
      if (error) {
        window.alert(error)
      }
    })
  }, [SERVER_ENDPOINT, user, roomId])

  // --- DEALING WITH DRAWING
  const canvasRef = useRef(null)
  const colorsRef = useRef(null)
  const eraserRef = useRef(null)

  useEffect(() => {
    // --------------- getContext() method returns a drawing context on the canvas-----

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // ----------------------- Colors --------------------------------------------------

    const eraser = document.getElementById('eraser')
    const colors = document.getElementsByClassName('color')

    // set the current color
    const current = {
      color: 'black'
    }

    const getEraser = () => {
      current.color = 'eraser'
    }

    eraser.addEventListener('click', getEraser, false)

    // helper that will update the current color
    const onColorUpdate = (e) => {
      current.color = e.target.className.split(' ')[1]
    }

    // loop through the color elements and add the click event listeners
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', onColorUpdate, false)
    }
    let drawing = false

    // ------------------------------- create the drawline ----------------------------

    const drawLine = (x0, y0, x1, y1, color, emit) => {
      if (color === 'eraser') {
        context.clearRect(x0, y0, 10, 10)
      } else {
        context.beginPath()
        context.moveTo(x0, y0)
        context.lineTo(x1, y1)
        context.strokeStyle = color
        context.lineWidth = 2
        context.stroke()
        context.closePath()
      }

      if (!emit) { return }

      const w = canvas.width
      const h = canvas.height

      socketRef.current.emit('drawing', {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color
      })
    }

    // ---------------- mouse movement --------------------------------------

    const onMouseDown = (e) => {
      drawing = true
      current.x = e.clientX || e.touches[0].clientX
      current.y = e.clientY || e.touches[0].clientY
    }

    const onMouseMove = (e) => {
      if (!drawing) { return }
      drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, current.color, true)
      current.x = e.clientX || e.touches[0].clientX
      current.y = e.clientY || e.touches[0].clientY
    }

    const onMouseUp = (e) => {
      if (!drawing) { return }
      drawing = false
      drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, current.color, true)
    }

    // ----------- limit the number of events per second -----------------------

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime()
      return function () {
        const time = new Date().getTime()

        if ((time - previousCall) >= delay) {
          previousCall = time
          callback.apply(null, arguments)
        }
      }
    }

    // -----------------add event listeners to our canvas ----------------------

    canvas.addEventListener('mousedown', onMouseDown, false)
    canvas.addEventListener('mouseup', onMouseUp, false)
    canvas.addEventListener('mouseout', onMouseUp, false)
    canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false)

    // Touch support for mobile devices
    canvas.addEventListener('touchstart', onMouseDown, false)
    canvas.addEventListener('touchend', onMouseUp, false)
    canvas.addEventListener('touchcancel', onMouseUp, false)
    canvas.addEventListener('touchmove', throttle(onMouseMove, 10), false)

    // -------------- make the canvas fill its parent component -----------------

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', onResize, false)
    onResize()

    // ----------------------- socket.io connection ----------------------------
    const onDrawingEvent = (data) => {
      const w = canvas.width
      const h = canvas.height
      drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color)
    }

    socketRef.current.on('drawing', onDrawingEvent)
  }, [])

  return (
    <>
      <RoomContainer>

        <LeftPanel>
          <ExitBox>
            <ExitLink to='/console/create-join-room'>
              Exit
            </ExitLink>
          </ExitBox>

          <RoomIdBox>
            <RoomIdBtn onClick={showRoomIdPrompt}>Get room ID</RoomIdBtn>
          </RoomIdBox>
        </LeftPanel>

        <Toolbox>

          <Pen>
            <summary>Pen</summary>
            <ColorsList ref={colorsRef}>
              <ColorBtn className='black' />
              <ColorBtn className='red' />
              <ColorBtn className='green' />
              <ColorBtn className='blue' />
              <ColorBtn className='yellow' />
            </ColorsList>
          </Pen>

          <Eraser ref={eraserRef} id='eraser'>
            Eraser
          </Eraser>

        </Toolbox>

        <WhiteBoard ref={canvasRef} />

      </RoomContainer>
    </>
  )
}

export default RoomPage
