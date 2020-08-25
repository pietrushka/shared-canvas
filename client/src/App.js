import React, {useEffect, useMemo, useState} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {IconContext} from 'react-icons'

import {UserContext} from './UserContext'

import Homepage from './pages/homepage/homepage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RoomPage from './pages/RoomPage/RoomPage'
import NotDoneYet from './pages/NotDoneYet'



function App() {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user,setUser])

  return (
      <IconContext.Provider value ={{color: '#61dafb', size: '3rem'}}>
        <UserContext.Provider value={providerValue}>
          <Router>
            <Route 
              path='/' 
              component={Homepage} 
              exact 
            /> 
            <Route 
              path='/user' 
              component={NotDoneYet} 
              exact 
            />
            <Route 
              path='/login' 
              component={LoginPage} 
              exact 
            />
            <Route 
              path='/register' 
              component={RegisterPage} 
              exact 
            />
            <Route
              path='/rooms' 
              component={RoomPage} 
              exact
            />
          </Router>
        </UserContext.Provider>
        
      </IconContext.Provider>  
  )
}


export default App;