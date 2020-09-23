import axios from 'axios'

const SERVER_ENDPOINT = `${process.env.REACT_APP_SERVER_ENDPOINT}/api`
console.log(SERVER_ENDPOINT)

export const register = (registerData) => {
  return axios({
    method: 'POST',
    data: registerData,
    url: `${SERVER_ENDPOINT}/auth/register`
  }).catch((err) => {
    if (err.response) {
      throw new Error(err.response.data.message)
    }
    throw err
  })
}

export const login = (email, password) => {
  console.log(SERVER_ENDPOINT)
  return axios
    .post(SERVER_ENDPOINT + '/auth/login', {
      email,
      password
    })
    .then((response) => {
      window.localStorage.setItem('token', response.data.token)
      return response.data
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('Incorrect username or password')
      }
      throw err
    })
}

export const logout = () => {
  window.localStorage.removeItem('user')
}

export const changePassReq = (changePassData) => {
  const token = localStorage.getItem('token')

  if (token === null) return false

  const authHeader = { Authorization: 'Bearer ' + token }

  return axios({
    method: 'PATCH',
    url: `${SERVER_ENDPOINT}/auth/updateMyPassword`,
    headers: authHeader,
    data: changePassData
  })
    .then((response) => {
      return response
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('Incorrect password')
      }
      throw err
    })
}

export const changeUserDataReq = (data) => {
  const token = window.localStorage.getItem('token')

  if (token === null) return false

  const authHeader = { Authorization: 'Bearer ' + token }

  return axios({
    method: 'PATCH',
    url: `${SERVER_ENDPOINT}/user/updateMyData`,
    headers: authHeader,
    data
  })
    .then((response) => {
      return response
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('UnAuthorized')
      }
      throw err
    })
}
