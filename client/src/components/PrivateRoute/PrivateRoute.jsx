import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, path, ...rest}) => {
  const isAuthenticated = false
  return <Route 
            path={path} 
            render={(props) => !isAuthenticated 
              ? <Redirect to={'/login'} /> 
              : <Component {...props} />
            }
            {...rest}
    />
}

export default PrivateRoute
