import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import JoinPage from './pages/join-page/join-page.component'
import CanvasPage from './pages/canvas-page/canvas-page.component'


function App() {
  return (
    <Router>
      <Route exact path='/' component={JoinPage} /> 
      <Route path='/canvas' component={CanvasPage} /> 
    </Router>
  )
}

export default App;