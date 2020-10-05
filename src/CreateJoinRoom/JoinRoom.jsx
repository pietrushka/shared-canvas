import React, {useReducer} from 'react'
import { withRouter } from "react-router"

import './JoinRoom.scss'

const joinRoomReducer = (state, action) => {
  switch(action.type) {

    case 'field': {
      return {
        ...state,
        [action.field]: action.value 
      }
    }

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
  roomId: '',
  isLoading: false,
  error: '',
  isJoined: false
}

const JoinRoom = ({history}) => {
  const [state, dispatch] = useReducer(joinRoomReducer, initialState)

  const {roomId, isLoading} = state

  const onSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'join'})
    try {
      history.push(`/room/${roomId}`)
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }
  
  return (
    <form className='form' onSubmit={onSubmit}>
      <div className="form-group">
        <label>Room ID</label>
        <input
          required
          type='text'
          placeholder='Room ID'
          value={roomId}
          onChange={event => 
            dispatch({
              type: "field",
              field: 'roomId',
              value: event.currentTarget.value
            })
          }
        />
      </div>
      <button className='btn' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading' : 'Join'}
      </button>
    </form>
  )
}

export default withRouter(JoinRoom)