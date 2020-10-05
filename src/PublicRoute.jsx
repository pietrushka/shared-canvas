import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = () => {
    const token = window.localStorage.getItem('wideboardToken')

    if (token) return true

    return false
  }

  return (
    <Route
      {...props} render={props => (
        !isLoggedIn()
          ? <Component {...props} />
          : <Redirect to='/console' />
      )}
    />
  )
}

export default PublicRoute
