import React from 'react'
import {Switch, Route} from 'react-router-dom'

import RoomsPage from './pages/RoomsPage/RoomsPage'
import NotDoneYet from './pages/NotDoneYet'

import Navbar from './components/Navbar/Navbar'

const ConsoleRouter = ({match}) => {
  return (
    <>
      <Navbar />
        <div className='console__content' style={{marginLeft: '5rem' }}>
          <Switch>
            <Route path={match.path + '/rooms'} component={RoomsPage} />
            {/* <Route exact path={match.path + '/call'} component={CallPage} /> */}
            <Route exact path={match.path + '/user'} component={NotDoneYet} />
            <Route exact path={match.path + '/contacts'} component={NotDoneYet} />
            <Route exact path={match.path + '/bookmarks'} component={NotDoneYet} />
          </Switch>
        </div>
    </>
  )
}

export default ConsoleRouter