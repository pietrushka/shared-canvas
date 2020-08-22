import React, {useReducer} from 'react'
import loginImg from "../../assets/programmer.svg";

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
  isLoading: false,
  error: '',
  isCreated: false
}

const CreateRoom = ({history}) => {
  const [state, dispatch] = useReducer(createRoomReducer, initialState)

  const {isLoading, error, isCreated} = state

  const onSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'register'})
    try {
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }
  
  return (
    <div className='base-container'>
      <div className='form-container'>
        <h2 className='title'>Join a meeting</h2>
        <div className="image">
          <img src={loginImg} />
        </div>
        <form className='form' onSubmit={onSubmit}>
          <div className="form-group">
            <label>Type of workspace</label>
            <input className='input-workspace-type' placeholder='Workspace Type'/>
          </div>
          <button className='btn' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading' : 'Join'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRoom