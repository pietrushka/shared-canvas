import React, {useReducer} from 'react'
import Axios from "axios";

import './LoginPage.css'


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
      console.log('success')
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
    Axios({
      method: "POST",
      data: {
        username,
        password
      },
      withCredentials: true,
      url: "http://localhost:4000/user/login",
    })
      .then((response) => {
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
    <div className='outerFormContainer'>
      <div className='innerFormContainer'>
        <h2 className='title'>Zaloguj się</h2>
        <form className='form' onSubmit={onSubmit}>
          {isLoggedIn && <p>zalogowano</p>}
          {error && <p className='error'>{error}</p>}
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={event => 
              dispatch({
                type: "field",
                field: 'username',
                value: event.currentTarget.value
              })
            }
          />
          <input
            type='password'
            required
            placeholder='password'
            value={password}
            onChange={event => 
              dispatch({
                type: "field",
                field: 'password',
                value: event.currentTarget.value
              })
            }
          />

          <button className={`submit {isLoading && 'invert'}`}type='submit' disabled={isLoading}>
            {isLoading ? 'Loading' : 'Login'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default LoginPage