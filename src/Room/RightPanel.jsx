import React, {useState} from 'react'
import {AiFillMessage} from 'react-icons/ai'
import {MdCall} from 'react-icons/md'
import {ImCross} from 'react-icons/im'

import './RightPanel.scss'
import Call from './Call'
import Messenger from './Messenger'

const RightPanel = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [openedPanel, setOpenedPanel] = useState('call')

  return (
    <div className="right-panel" open={isOpen && true}>
      <div className="control-panel" open={isOpen && true}>
        <button 
          className="control-btn call-btn"
          onClick={() => {
            setIsOpen(true)
            setOpenedPanel('call')
          }}
        >
          <MdCall />
        </button>
        <button 
          className="control-btn message-btn"
          onClick={() => {
            setIsOpen(true)
            setOpenedPanel('message')
          }} 
        >
          <AiFillMessage/>
        </button>
        <button 
          className="control-btn exit-btn"
          onClick={() => setIsOpen(false)}
        >
          <ImCross />
        </button>
      </div>
      <div open={isOpen && true} className="lower-panel">
        <div open={openedPanel === 'call' && true }  className="panel-container">
          <Call />
        </div>
        <div open={openedPanel === 'message' && true } className="panel-container">
          <Messenger />
        </div>
        
      </div>
    </div>
  )
}

export default RightPanel