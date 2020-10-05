import React, { useReducer } from 'react'

import { register } from '../utils/auth.service'

import registerImg from '../assets/register_icon.svg'
import './Register.scss'

const registerReducer = (state, action) => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value
      }
    }

    case 'register': {
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
        isRegistered: true
      }
    }

    case 'error': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }

    default:
      break
  }
  return state
}

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isLoading: false,
  error: '',
  isRegistered: false
}

const RegisterPage = ({ history }) => {
  const [state, dispatch] = useReducer(registerReducer, initialState)

  const { username, email, password, confirmPassword, isLoading, error } = state

  const onSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      dispatch({ type: 'error', payload: 'Passwords do not match' })
      return
    }

    dispatch({ type: 'register' })

    try {
      const registerData = { username, email, password }
      await register(registerData)
      dispatch({ type: 'success' })
      history.push('/login')
    } catch (error) {
      dispatch({ type: 'error', payload: error.toString().slice(6) })
    }
  }

  return (
    <div className='base-container--register'>
      <div className='form__container--register'>
        <p>Register</p>

        <div className='image'>
          <img alt='register illustration' src={registerImg} />
        </div>

        <form className='form--register' onSubmit={onSubmit}>
          {error && <p className='error-message'>{error}</p>}

          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Username'
              value={username}
              required
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'username',
                  value: event.currentTarget.value
                })}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Email'
              value={email}
              required
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'email',
                  value: event.currentTarget.value
                })}
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              required
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'password',
                  value: event.currentTarget.value
                })}
            />
          </div>

          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              required
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'confirmPassword',
                  value: event.currentTarget.value
                })}
            />
          </div>

          <button className='btn' style={isLoading ? { background: 'gray' } : null} type='submit' disabled={isLoading}>
            {isLoading ? 'Loading' : 'Register'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage
