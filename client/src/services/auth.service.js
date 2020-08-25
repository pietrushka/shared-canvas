import axios from "axios";

import authHeader from './auth-header'

import API_URL from './api-route'

export const register = (registerData) => {
  return axios({
    method: "POST",
    data: registerData,
    url: `${API_URL}/register`
  }).catch((err) => {
    if (err.response) {
      throw new Error(err.response.data.message);
    }
    throw err;
  })
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token))
      return response.data
    }).catch((err) => {
      if (err.response.status === 401) {
        throw new Error('Incorrect username or password');
      }
      throw err;
    })
};

export const logout = () => {
  localStorage.removeItem("user");
};

// export const isUserLoggedIn = (user) => {
//   if(user) return true

//   axios({
//     method: "POST",
//     data: registerData,
//     url: `${API_URL}/isLoggedIn`,
//     headers: authHeader()
//   }).then(response => {

//   }).catch(err => {
//     if (err.response.status === 401) {
//       return false
//     }
//   })
  

