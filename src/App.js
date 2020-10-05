import React, { createContext, useMemo, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import ConsoleRouter from './ConsoleRouter/ConsoleRouter'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Landing from './Landing/Landing'
import Register from './Register/Register'
import Login from './Login/Login'
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
          path='/console'
          component={ConsoleRouter}
        />

        <PrivateRoute
          path='/room/:roomId'
          component={Room}
          exact
        />
      </Switch>

    </UserContext.Provider>
  )
}

export default App
