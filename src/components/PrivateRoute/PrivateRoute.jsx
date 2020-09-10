import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import axios from "axios";

import { UserContext } from '../../UserContext'
import API_URL from '../../services/api-route'

const PrivateRoute = ({component: Component, ...rest}) => {
  const {user, setUser} = useContext(UserContext)  

  const isLoggedIn = async () => {
    if(user) {
      if(user.username && user.id) {
        return true
      }
    }

    const token = localStorage.getItem('token')
    console.log('token', token)
    
    if (token === null) return false

    const authHeader = { Authorization: 'Bearer ' + token }
    console.log(authHeader)

    console.log(`${API_URL}/isLoggedIn`)

    await axios({
      method: "GET",
      url: `${API_URL}/isLoggedIn`,
      headers: authHeader
    }).then(response => {
      console.log(response)
      setUser({username: response.data.username, id: response.data.id})
      console.log(user)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
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