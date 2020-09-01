import axios from "axios";

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
      localStorage.setItem("token", response.data.token)
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

  

