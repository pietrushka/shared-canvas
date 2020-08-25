import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const register = (username, email, password) => {
  return axios.post(API_URL + "/register", {
    username,
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.user) {
        if(response.data === 'No User Exists') throw new Error('No User Exists')

        localStorage.setItem("user", JSON.stringify(response.data))
      }

      return response.data;
    }).catch((err) => {
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      )
      console.log("error", err.response.data.message);
      return err.response.data.message
  })
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const isUserLoggedIn = () => {
  return JSON.parse(localStorage.getItem("user"));
};

