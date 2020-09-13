import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import axios from "axios";

import { UserContext } from '../../App'
import API_URL from '../../services/api-route'

const PrivateRoute = ({component: Component, ...rest}) => {
  const {user, setUser} = useContext(UserContext)
  const isLoggedIn = () => {

    if(user) {
      if(user.username && user.id) {
        return true
      }
    }

    const token = localStorage.getItem('token')
    
    if (token === null) return false

    const authHeader = { Authorization: 'Bearer ' + token }

     const isAuth = axios({
      method: "GET",
      url: `${API_URL}/isLoggedIn`,
      headers: authHeader
    }).then(response => {
      setUser({username: response.data.username, id: response.data.id})
    }).then(() => {
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
    return isAuth
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