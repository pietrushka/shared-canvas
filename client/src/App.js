import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage'
import SignUpPage from './pages/sign-up-page/sign-up-page'
import SignInPage from './pages/sign-in-page/sign-in-page'
import JoinPage from './pages/join-page/join-page.component'
import CanvasPage from './pages/canvas-page/canvas-page.component'


function App() {
  return (
    <Router>
      <Route exact path='/' component={Homepage} /> 
      <Route path='/register' component={SignUpPage} />
      <Route path='/login' component={SignInPage} />
      <Route path='/join' component={JoinPage} />
      <Route path='/canvas' component={CanvasPage} /> 
    </Router>
  )
}

export default App;