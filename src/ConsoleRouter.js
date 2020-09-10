import React from 'react'
import {Switch, Route} from 'react-router-dom'

import JoinMakeRoomPage from './pages/JoinMakeRoomPage/JoinMakeRoomPage'
import NotDoneYet from './pages/NotDoneYet'

import Navbar from './components/Navbar/Navbar'

const ConsoleRouter = ({match}) => {
  return (
    <>
      <Navbar />
        <div className='console__content' style={{marginLeft: '7rem' }}>
          <Switch>
            <Route path={match.path + '/join-make-room'} component={JoinMakeRoomPage} />
            <Route exact path={match.path + '/user'} component={NotDoneYet} />
            <Route exact path={match.path + '/contacts'} component={NotDoneYet} />
            <Route exact path={match.path + '/bookmarks'} component={NotDoneYet} />
          </Switch>
        </div>
    </>
  )
}

export default ConsoleRouter