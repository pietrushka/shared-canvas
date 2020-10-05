import React from 'react'
import { Route } from 'react-router-dom'

import CreateJoinRoom from '../CreateJoinRoom/CreateJoinRoom'
import Settings from '../Settings/Settings'

import Navbar from './Navbar'

import './ConsoleRouter.scss'

const ConsoleRouter = ({ location }) => {
  const pathName = location.pathname
  const currentPage = pathName.slice(9)

  return (
    <div className='console__content'>
      <Navbar currentPage={currentPage} />

      <Route path='/console/create-join-room' exact component={CreateJoinRoom} />
      {/* <Route path='/console/contact' exact component={ContactPage} />
          <Route path='/console/saved' exact component={NotDoneYet} /> */}
      <Route path='/console/settings' exact component={Settings} />

    </div>
  )
}

export default ConsoleRouter
