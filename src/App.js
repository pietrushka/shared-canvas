import React, { createContext, useMemo, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Landing from './Landing/Landing'
import About from './About/About'
import Contact from './Contact/Contact'
import Register from './Register/Register'
import Login from './Login/Login'
import CreateJoinRoom from './CreateJoinRoom/CreateJoinRoom'
import Settings from './Settings/Settings'
import Room from './Room/Room'

export const UserContext = createContext()

function App () {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({ user, setUser, isLoggedIn: !!user }), [user, setUser])

  return (
    <UserContext.Provider value={providerValue}>
      <Switch>

        <Route
          path='/'
          component={Landing}
          exact
        />

        <Route
          path='/contact'
          component={Contact}
          exact
        />

        <Route
          path='/about'
          component={About}
          exact
        />

        <PublicRoute
          path='/login'
          component={Login}
          exact
        />

        <PublicRoute
          path='/register'
          component={Register}
          exact
        />

        <PrivateRoute
          path='/console/create-join-room'
          component={CreateJoinRoom}
          exact
        />
        <PrivateRoute
          path='/console/settings'
          component={Settings}
          exact
        />

        <Route
          path='/room/:roomId'
          component={Room}
          exact
        />
        
      </Switch>
    </UserContext.Provider>
  )
}

export default App
