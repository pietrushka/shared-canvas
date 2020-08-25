import React from 'react'
import {Switch, Route} from 'react-router-dom'

import CallPage from './pages/CallPage/CallPage'
import NotDoneYet from './pages/NotDoneYet'

import Navbar from './components/Navbar/Navbar'

const ConsoleRouter = ({match}) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={match.path + '/call'} component={CallPage} />
      </Switch>
    </>
  )
}

export default ConsoleRouter