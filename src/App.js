import React, { createContext, useMemo, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import ConsoleRouter from './ConsoleRouter'
import PublicRoute from './components/PublicRoute/PublicRoute'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RoomPage from './pages/RoomPage/RoomPage'

export const UserContext = createContext()

function App () {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({ user, setUser, isLoggedIn: !!user }), [user, setUser])

  return (
    <UserContext.Provider value={providerValue}>
      <Switch>

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

        <PrivateRoute
          path='/room/:roomId'
          component={RoomPage}
          exact
        />
      </Switch>

    </UserContext.Provider>
  )
}

export default App
