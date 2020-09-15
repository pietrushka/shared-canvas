import React, {useReducer} from 'react'

import {changeUserDataReq} from '../../services/auth.service'

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
        username: '',
        email: '',
        isLoading: false,
      }
    }

    case 'error': { 
      return { 
        ...state,
        error: 'Incorrect data!',
        isLoading: false,
        username: '',
        email: '',
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
    console.log('data change start')

    dispatch({ type: 'save'})
    
    const changeData = { username, email }

    try {
      const res = await changeUserDataReq(changeData)
      console.log(res)
      dispatch({type: 'success'})
    } catch (err) {
      dispatch({type: 'error'})
      console.log(error)
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
      </div>

      <button
          className='btn' 
          style={isLoading ? {background: 'gray'} : null}
          type='submit' 
          disabled={isLoading} 
          className='data__save'
        >
          {isLoading ? 'Loading' : 'Save'}
        </button>
    </form>
  )
}

export default UserData