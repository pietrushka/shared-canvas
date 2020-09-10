import React, {useReducer, useContext} from 'react'
import {BsMoon} from 'react-icons/bs'
import {RiSunFill} from 'react-icons/ri'

import {UserContext} from '../../UserContext'

import './SettingsPage.scss'

import userImg from '../../assets/user.png'

const SettingsReducer = () => {
  const loginReducer = (state, action) => {
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
}

const initialState = { 
  username: '',
  email: '',
  isLoading: false,
  error: '',
}

const SettingsPage = () => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState)
  const {username, email, isLoading, error} = state
  const {user, setUser} = useContext(UserContext)

  console.log(user)

  const onDataChange = async (event) => {
    event.preventDefault()

    dispatch({ type: 'save'})

    try {
      // const loginData = await login(email, password)
      // const {username} = loginData
      setUser({username})
      dispatch({type: 'success'})
    } catch (error) {
      dispatch({type: 'error'})
    }
  }

  const onPassChange = async (event) => {
    
  }


  return (
    <div className="base-container">
      <div className="options">
        <form className='options__user' onSubmit={onDataChange}>
          <input type='image' src={userImg} className='avatar' />
          
          <div className="user__data">
            <div className="data-wrapper username">
              <label>Username</label>
              <input
                required
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
                required
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
      

        <div className="options__change-password">
          <h3>Change password</h3>
        </div>

        <div className="options__theme">
          <input type='checkbox' className="set-theme" id="set-theme" />
          <label class='label__theme' for='set-theme'>
            <RiSunFill className='sun-icon' />
            <BsMoon className='moon-icon' />
            <div className="ball"></div>
          </label>
        </div>

      </div>
    </div>
  )
}

export default SettingsPage