import React, {useReducer} from 'react'
import Axios from "axios";

import loginImg from "../../assets/login_icon.svg";

import './LoginPage.scss'


const loginReducer = (state, action) => {
  switch(action.type) {

    case 'field': {
      return {
        ...state,
        [action.field]: action.value 
      }
    }

    case 'login': { 
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    }

    case 'success': {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true
      }
    }

    case 'error': { 
      console.log('error')
      return { 
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: ''
      }
    }

    default:
      break
  }
  return state
}

const initialState = { 
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isRegistered: false
}

const LoginPage = ({setupSocket, history}) => {

  const [state, dispatch] = useReducer(loginReducer, initialState)

  const {username, password, isLoading, error, isLoggedIn} = state

  const loginUser = (username, password) => {
    const loginData = {username, password}
    Axios({
      method: "POST",
      data: loginData,
      withCredentials: true,
      url: "http://localhost:4000/users/login",
    })
      .then((response) => {
        if(response.data === 'No User Exists') throw new Error('No User Exists')
        console.log("success", response.data);
        history.push("/dashboard");
        setupSocket();
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
        console.log("error", err.response.data.message);
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    dispatch({ type: 'login'})

    try {
      await loginUser(username, password)
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }

  return (
    <div className='base-container--login'>
        <div className='form__container--login'>
          <p>Login</p>
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className='form--login' onSubmit={onSubmit}>

          <div className="form-group">
            <label>Username</label>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={event => 
                dispatch({
                  type: "field",
                  field: 'username',
                  value: event.currentTarget.value
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type='password'
              required
              placeholder='Password'
              value={password}
              onChange={event => 
                dispatch({
                  type: "field",
                  field: 'password',
                  value: event.currentTarget.value
                })
              }
            />
          </div>

          <button 
            className='btn' 
            style={isLoading ? {background: 'gray'} : null}
            type='submit' 
            disabled={isLoading}
          >
            {isLoading ? 'Loading' : 'Login'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default LoginPage