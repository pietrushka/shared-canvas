import React, { useRef, useEffect, useState } from 'react'


const Canvas = () => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2 //vw of browser
    canvas.height = window.innerHeight * 2 //vh of browser
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d') //definig 2d context 

    //starter context settings
    context.scale(2, 2) //to support increase of screen density
    context.lineCap = 'round'
    context.strokeStyles = "black"
    context.lineWidth =  5

    contextRef.current = context
  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    setIsDrawing(false)
    contextRef.current.closePath()
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing) {
      return
    }

    const {offsetX, offsetY} = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  return (
    <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default Canvas