import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({component: Component, ...props}) => {

  const isLoggedIn = () => {

    const token = localStorage.getItem('token')
    
    if (token) return true

    return false

  }

  return (
    <Route {...props} render={props => (
        !isLoggedIn() 
          ? <Component {...props} />
          : <Redirect to="/console" />
    )} />
  )
}

export default PublicRoute