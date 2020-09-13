import React, {useState, useContext} from 'react'
import pressPlayImg from "../../assets/press_play_icon.svg";

import { UserContext } from '../../App'
import JoinRoom from '../../components/JoinRoom/JoinRoom'
import CreateRoom from '../../components/CreateRoom/CreateRoom'

import './JoinMakeRoomPage.scss'


const JoinMakeRoomPage = () => {  
  const [currentTab, setCurrentTab] = useState('Join')
  const {user, setUser} = useContext(UserContext)
  console.log(user)

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

export default JoinMakeRoomPage