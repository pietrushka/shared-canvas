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
          <div className='video'>
            <p>video</p>
            <div className='video__others'>
            </div>
            <div className='video__client'></div>
          </div>

          <div className='text'>
            <p>text</p>
            <div className='text__messages' ></div>
            <div className='text__input'></div>
          </div>
        </div> 

      </div>
    </>
  )
}

export default CallPage