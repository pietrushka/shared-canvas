import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import axios from "axios";

import { UserContext } from '../../UserContext'
import authHeader from '../../services/auth-header'
import API_URL from '../../services/api-route'

const PrivateRoute = ({component: Component, ...rest}) => {
  const {user, setUser} = useContext(UserContext)  

  const isLoggedIn = () => {
    if(user) {
      if(user.username && user.id) {
        return true
      }
    }
  
    const apiReq = axios({
      method: "POST",
      url: `${API_URL}/isLoggedIn`,
      headers: authHeader()
    }).then(response => {
      console.log(response)
      setUser({username: response.data.username, id: response.data.id})
      return true
    }).catch(err => {
      console.log(err)
      return false
    })

    return apiReq
  }

  return (
    <Route {...rest} render={props => (
        isLoggedIn() ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
  )
}

export default PrivateRoute