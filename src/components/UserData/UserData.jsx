import React, {useReducer} from 'react'

import './UserData.scss'
import userImg from '../../assets/user.png'


const userDataReducer = (state, action) => {
  switch(action.type) {

    case 'field': {
      return {
        ...state,
        [action.field]: action.value 
      }
    }

    case 'save': { 
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
  username: '',
  email: '',
  isLoading: false,
  error: '',
}

const UserData = () => {
  const [state, dispatch] = useReducer(userDataReducer, initialState)
  const {username, email, isLoading, error} = state

  const onDataChange = async (event) => {
    event.preventDefault()

    dispatch({ type: 'save'})

    try {
      // const loginData = await login(email, password)
      // const {username} = loginData
      // setUser({username})
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }

  return (
    <form className='options__user' onSubmit={onDataChange}>
      <input type='image' src={userImg} className='avatar' />
          
      <div className="user__data">

        <div className="data-wrapper username">
          <label>Nazwa użytkownika</label>
          <input
            type='text'
            placeholder='user1'
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
        
        <div className="data-wrapper email">
          <label>Email</label>
          <input
            type='text'
            placeholder='user1@gmail.com'
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

        <button className='data__save'>Zapisz</button>

      </div>
    </form>
  )
}

export default UserData