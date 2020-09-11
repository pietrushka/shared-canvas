import React, {useReducer} from 'react'

import './ChangePassword.scss'

const changePassReducer = (state, action) => {
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
  newPassword: '',
  newPasswordConfirm: '',
  currentPassword: '',
  isLoading: false,
  error: '',
}

const ChangePassword = () => {
  const [state, dispatch] = useReducer(changePassReducer, initialState)
  const {newPassword, newPasswordConfirm, currentPassword} = state

  const onPassChange = async (event) => {
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

    <form className="options__change-password" onSubmit={onPassChange}>


      <div className="cln-1">
        <div className="data-wrapper">
              <label>Nowe Hasło</label>
              <input
                required
                type='password'
                placeholder='Nowe hasło'
                value={newPassword}
                onChange={event => 
                  dispatch({
                    type: "field",
                    field: 'newPassword',
                    value: event.currentTarget.value
                  })
                }
              />
            </div>
            
        <div className="data-wrapper">
              <label>Potwierdź nowe hasło</label> 
              <input
              required
              type='password'
              placeholder='Potwierdź nowe hasło'
              value={newPasswordConfirm}
              onChange={event => 
                dispatch({
                  type: "field",
                  field: 'newPasswordConfirm',
                  value: event.currentTarget.value
                })
              }
            />
            </div>
            
      </div>

      <div className="cln-2">
        <div className="data-wrapper">
          <label>Obecne hasło</label>
          <input
            required
            type='password'
            placeholder='Obecne hasło'
            value={currentPassword}
            onChange={event => 
              dispatch({
                type: "field",
                field: 'currentPassword',
                value: event.currentTarget.value
              })
            }
          />
        </div>
        
        <button className='data__save'>Zmień hasło</button>
      </div>

    </form>

  )
}

export default ChangePassword