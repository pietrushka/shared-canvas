import React, { useReducer } from 'react'

import { register } from '../utils/auth.service'

import registerImg from '../assets/register_icon.svg'
import './Register.scss'
import FormGroup from '../shared/FormGroup'
import SubmitButton from '../shared/SubmitButton'

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

          <FormGroup 
            label='Username'
            type='text'
            field='username'
            value={username}
            handler={dispatch}
            isRequired={true}
          />

          <FormGroup 
            label='Email'
            type='email'
            field='email'
            value={email}
            handler={dispatch}
            isRequired={true}
          />

          <FormGroup 
            label='Password'
            type='password'
            field='password'
            value={password}
            handler={dispatch}
            isRequired={true}
          />
          <FormGroup 
            label='Confirm Password'
            type='password'
            field='confirmPassword'
            value={confirmPassword}
            handler={dispatch}
            isRequired={true}
          />

          <SubmitButton
            text='Register' 
            isLoading={isLoading}
          />

        </form>
      </div>
    </div>
  )
}

export default RegisterPage
