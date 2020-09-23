import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import { UserContext } from '../../App'
const SERVER_ENDPOINT = `${process.env.REACT_APP_SERVER_ENDPOINT}/api`
console.log(SERVER_ENDPOINT)

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(UserContext)
  const isLoggedIn = () => {
    if (user) {
      if (user.username && user.id) {
        return true
      }
    }

    const token = window.localStorage.getItem('token')

    if (token === null) return false

    const authHeader = { Authorization: 'Bearer ' + token }

    const isAuth = axios({
      method: 'GET',
      url: `${SERVER_ENDPOINT}/isLoggedIn`,
      headers: authHeader
    }).then(response => {
      setUser({ username: response.data.username, id: response.data.id })
    }).then(() => {
      return true
    }).catch(err => {
      return false
    })
    return isAuth
  }

  return (
    <Route
      {...rest} render={props => (
        isLoggedIn()
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  )
}

export default PrivateRoute
