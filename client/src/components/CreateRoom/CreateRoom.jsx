import React, {useReducer} from 'react'
import { withRouter } from "react-router"
import { v4 as uuidv4 } from 'uuid'

import './CreateRoom.scss'

const createRoomReducer = (state, action) => {
  switch(action.type) {

    case 'create': { 
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
        isCreated: true
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
  newRoomUrl: '',
  isLoading: false,
  error: '',
  isCreated: false
}

const CreateRoom = ({history}) => {
  const [state, dispatch] = useReducer(createRoomReducer, initialState)

  const {newRoomUrl, isLoading, error, isCreated} = state

  const onSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'create'})
    const roomId = uuidv4()
    try {
      history.push(`/room/${roomId}`)
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }
  
  return (
    <form className='form' onSubmit={onSubmit}>
        
      <button className='btn' type='submit' disabled={isLoading}>
        {isLoading ? 'Loading' : 'Create'}
      </button>
    </form>
  )
}

export default withRouter(CreateRoom)