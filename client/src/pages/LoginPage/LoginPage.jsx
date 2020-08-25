import React, {useReducer, useContext} from 'react'
import Axios from "axios";

import {login} from '../../services/auth.service'

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
      return { 
        ...state,
        error: 'Incorrect email or password!',
        isLoggedIn: false,
        isLoading: false,
        email: '',
        password: ''
      }
    }

    default:
      break
  }
  return state
}

const initialState = { 
  email: '',
  password: '',
  isLoading: false,
  error: '',
  isRegistered: false
}

const LoginPage = ({setupSocket, history}) => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const {email, password, isLoading, error, isLoggedIn} = state

  const onSubmit = async (event) => {
    event.preventDefault()

    dispatch({ type: 'login'})

    try {
      await login(email, password)
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
            <label>Email</label>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={event => 
                dispatch({
                  type: "field",
                  field: 'email',
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