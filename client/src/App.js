import React, {useMemo, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {IconContext} from 'react-icons'

import {UserContext} from './UserContext'

import ConsoleRouter from './ConsoleRouter'
import PublicRoute from './components/PublicRoute/PublicRoute'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import CallPage from './pages/CallPage/CallPage'

function App() {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user,setUser])

  return (
      <IconContext.Provider value ={{color: '#61dafb', size: '3rem'}}>
        <UserContext.Provider value={providerValue}>

          <Router>
            <Route 
              path='/' 
              component={LandingPage} 
              exact 
            /> 
            <PublicRoute 
              path='/login' 
              component={LoginPage} 
              exact 
            />
            <PublicRoute
              path='/register' 
              component={RegisterPage} 
              exact 
            />
            <PrivateRoute 
              path='/console' 
              component={ConsoleRouter} 
            />

            <Route 
              path='/call' 
              component={CallPage} 
              exact 
            /> 
          </Router>
        </UserContext.Provider>
        
      </IconContext.Provider>  
  )
}


export default App;