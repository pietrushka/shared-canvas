import React, {useReducer} from 'react'

import './JoinRoom.scss'

const joinRoomReducer = (state, action) => {
  switch(action.type) {

    case 'join': { 
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    }

    case 'success': {
      return {
        ...state,
        isJoined: true
      }
    }

    case 'error': { 
      return { 
        ...state,
        isLoading: false,
      }
    }

    default:
      break
  }
  return state
}

const initialState = { 
  isLoading: false,
  error: '',
  isJoined: false
}

const JoinRoom = ({history}) => {
  const [state, dispatch] = useReducer(joinRoomReducer, initialState)

  const {isLoading, error, isJoined} = state

  const onSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'join'})
    try {
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }
  
  return (
    <form className='form' onSubmit={onSubmit}>
      <div className="form-group">
        <label>Room url</label>
        <input placeholder='Room url'/>
      </div>
      <button className='btn' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading' : 'Join'}
      </button>
    </form>
  )
}

export default JoinRoom