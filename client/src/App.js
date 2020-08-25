import React, {useMemo, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {IconContext} from 'react-icons'

import {UserContext} from './UserContext'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Homepage from './pages/homepage/homepage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ConsoleRouter from './ConsoleRouter'




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
              path='/login' 
              component={LoginPage} 
              exact 
            />
            <Route 
              path='/register' 
              component={RegisterPage} 
              exact 
            />
            <PrivateRoute 
              path='/console' 
              component={ConsoleRouter} 
            />
          </Router>
        </UserContext.Provider>
        
      </IconContext.Provider>  
  )
}


export default App;