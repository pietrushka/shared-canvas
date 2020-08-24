import React, {useReducer} from 'react'
import Axios from 'axios'

import joinImg from "../../assets/join.svg";


import './RegisterPage.scss'
import JoinPage from '../join-page/join-page.component';

const registerReducer = (state, action) => {
  switch(action.type) {

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
        isRegistered: true
      }
    }

    case 'error': { 
      return { 
        ...state,
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

const SignUpPage = ({history}) => {
  const [state, dispatch] = useReducer(registerReducer, initialState)

  const {username, email, password, confirmPassword, isLoading, error, isRegistered} = state

  
  const registerUser = () => {
    const registerData = {username, email, password}
    
    Axios({
      method: "POST",
      data: registerData,
      withCredentials: true,
      url: "http://localhost:4000/users/register",
    })
        .then((response) => {
          console.log("success", response.data.message);
          history.push("/login");
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

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    dispatch({ type: 'register'})

    try {
      await registerUser({username, email, password})
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }

  return (
    <div className='base-container--register'>
        <div className='form__container--register'>
          <p>Register</p>

          <div className="image">
            <img src={joinImg} />
          </div>

        <form className='form--register' onSubmit={onSubmit}>

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
            <label>Password</label>
            <input
              type='password'
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
          
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={event => 
                dispatch({
                  type: "field",
                  field: 'confirmPassword',
                  value: event.currentTarget.value
                })
              }
            />
          </div>

          <button className='btn' style={isLoading ? {background: 'gray'} : null} type='submit' disabled={isLoading}>
            {isLoading ? 'Loading' : 'Register'}
          </button>
        
        </form>
      </div>
    </div>




  )
}

export default SignUpPage