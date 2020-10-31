import React, { useReducer, useContext, useEffect } from 'react'

import { UserContext } from '../App'
import { login } from '../utils/auth.service'

import FormGroup from '../shared/FormGroup'
import SubmitButton from '../shared/SubmitButton'
import loginImg from '../assets/login_icon.svg'
import './Login.scss'

const loginReducer = (state, action) => {
  switch (action.type) {
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

const LoginPage = ({ history }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  const { setUser } = useContext(UserContext)
  const { email, password, isLoading, error } = state

  const onSubmit = async (event) => {
    event.preventDefault()

    dispatch({ type: 'login' })

    try {
      const loginData = await login(email, password)
      const { id, username } = loginData
      setUser({ id, username })
      dispatch({ type: 'success' })
      history.push('/console/create-join-room')
    } catch (error) {
      dispatch({ type: 'error' })
    }
  }

  useEffect(() => {
    window.alert('Test credentials\nEmail: test@test.com\nPassword: password')
  }, [])

  return (
    <div className='base-container--login'>
      <div className='form__container--login'>
        <p>Login</p>
        <div className='image'>
          <img alt='login illustration' src={loginImg} />
        </div>
        <form className='form--login' onSubmit={onSubmit}>
          {error && <p className='error-message'>{error}</p>}

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

          <SubmitButton
            text='Login' 
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
