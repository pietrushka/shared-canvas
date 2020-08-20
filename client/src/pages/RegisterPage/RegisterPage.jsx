import React, {useReducer} from 'react'
import Axios from 'axios'


import './RegisterPage.css'

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

  console.log(username, password, email)

  const registerUser = (username, email, password) => {
    Axios({
      method: "POST",
      data: email,
      withCredentials: true,
      url: "http://localhost:4000/user/register",
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
    <div className='outerFormContainer'>
      <div className='innerFormContainer'>
      <h2 className='title'>Dołącz do shared-workspace</h2>
      <form className='form' onSubmit={onSubmit}>
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
          type='text'
          placeholder='email'
          value={email}
          onChange={event => 
            dispatch({
              type: "field",
              field: 'email',
              value: event.currentTarget.value
            })
          }
        />
        <input
          type='text'
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
        <input
          type='text'
          placeholder='confirmPassword'
          value={confirmPassword}
          onChange={event => 
            dispatch({
              type: "field",
              field: 'confirmPassword',
              value: event.currentTarget.value
            })
          }
        />
        <button className='submit' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading' : 'Register'}
        </button>
      </form>
    </div>
    </div>
  )
}

export default SignUpPage