import React, {useState} from 'react'
import pressPlayImg from "../../assets/press_play_icon.svg";

import Navbar from '../../components/Navbar/Navbar'
import JoinRoom from '../../components/JoinRoom/JoinRoom'
import CreateRoom from '../../components/CreateRoom/CreateRoom'

import './RoomsPage.scss'


const RoomPage = () => {  
  const [currentTab, setCurrentTab] = useState('Join')

  const handleToggle = () => {
    if (currentTab === 'Join') {
      setCurrentTab('Create')
    } else {
      setCurrentTab('Join')
    }
  } 

  return (
    <>
      <div className='base-container'>
        <div className='form-container'>
          <p>Click to switch</p>
          <button onClick={handleToggle} className='form-container__toggle'>
            {currentTab}
          </button>

          <div className="image">
            <img src={pressPlayImg} />
          </div>

          {currentTab === 'Join' ? <JoinRoom/> : <CreateRoom/>}
        </div>
      </div>
    </>
  )
}

export default RoomPage