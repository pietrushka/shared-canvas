import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

import './CallPage.scss'

const CallPage = () => {
  console.log('call Page')
  return (
    <>
      <Navbar />
      <div className='console__content'>

        <div className='canvas'>
          <div className='canvas__whiteboar'>
            <p>whiteboard</p>
          </div>
          <div className='canvas__tools'>
            <p>tools</p>
          </div>
        </div>

        <div className='chat'>
            <div className='chat__nav' >
              <p>chat nav</p>
            </div>
            <div className='chat__messages' >
              <p>chat messages</p>
            </div>
            <div className='chat__input'>
              <p>chat input</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default CallPage