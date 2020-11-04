import React from 'react'
import { Link } from 'react-router-dom'

import './LeftPanel.scss'

const LeftPanel = ({roomId}) => {
  const showRoomIdPrompt = () => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', roomId)
  }
  
  return (
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
  )
}

export default LeftPanel