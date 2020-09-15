import axios from "axios";

import API_URL from './api-route'

export const register = (registerData) => {
  return axios({
    method: "POST",
    data: registerData,
    url: `${API_URL}/auth/register`
  }).catch((err) => {
    if (err.response) {
      throw new Error(err.response.data.message);
    }
    throw err;
  })
}

export const login = (email, password) => {
  return axios
    .post(API_URL + "/auth/login", {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      return response.data
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('Incorrect username or password');
      }
      throw err;
    })
}

export const logout = () => {
  localStorage.removeItem("user");
}

export const changePassReq = (changePassData) => {

  const token = localStorage.getItem('token')
    
  if (token === null) return false

  const authHeader = { Authorization: 'Bearer ' + token }

  return axios({
      method: "PATCH",
      url: `${API_URL}/auth/updateMyPassword`,
      headers: authHeader,
      data: changePassData
    })
    .then((response) => {
      return response
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('Incorrect password');
      }
      throw err;
    })
}

export const changeUserDataReq = (data) => {
  const token = localStorage.getItem('token')
    
  if (token === null) return false

  const authHeader = { Authorization: 'Bearer ' + token }

  return axios({
      method: "PATCH",
      url: `${API_URL}/user/updateMyData`,
      headers: authHeader,
      data
    })
    .then((response) => {
      return response
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('UnAuthorized');
      }
      throw err;
    })
}

