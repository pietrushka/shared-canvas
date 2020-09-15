import React from 'react'
import {Route} from 'react-router-dom'

import JoinMakeRoomPage from './pages/JoinMakeRoomPage/JoinMakeRoomPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'

import Navbar from './components/Navbar/Navbar'

import './ConsoleRouter.scss'

const ConsoleRouter = ({location}) => {

  const pathName = location.pathname
  const currentPage = pathName.slice(9)

  return (
    <div className='console__content' >
      <Navbar currentPage={currentPage} />
      
      <Route path='/console/join-room' exact component={JoinMakeRoomPage} />
          {/* <Route path='/console/contact' exact component={ContactPage} />
          <Route path='/console/saved' exact component={NotDoneYet} /> */}
      <Route path='/console/settings' exact component={SettingsPage} />

    </div>
  )
}

export default ConsoleRouter