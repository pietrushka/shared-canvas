import React, {useState} from 'react'
import {BsFillMicFill, BsCameraVideoFill} from 'react-icons/bs'
import './CallPanel.scss'

const CallPanel = () => {
  return (
    <div className="call-panel-container">
      <div className="call-control-panel">
        <button className="mic-btn">
          <BsFillMicFill />
        </button>
        <button className="cam-btn">
          <BsCameraVideoFill />
        </button>
      </div>

      <div className="participant-cam">
        <div>cam1</div>
      </div>

      <div className="participant-cam">
        <div>cam2</div>
      </div>
    </div>
  )
}

export default CallPanel