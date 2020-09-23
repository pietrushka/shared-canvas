import React, { useReducer } from 'react'

import { changePassReq } from '../../services/auth.service'

import './ChangePassword.scss'

const changePassReducer = (state, action) => {
  switch (action.type) {
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
        newPassword: '',
        newPasswordConfirm: '',
        currentPassword: '',
        isLoading: false
      }
    }

    case 'error': {
      return {
        ...state,
        error: 'Wrong password',
        isLoading: false
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
  error: ''
}

const ChangePassword = () => {
  const [state, dispatch] = useReducer(changePassReducer, initialState)
  const { newPassword, newPasswordConfirm, currentPassword, isLoading } = state

  const onPassChange = async (event) => {
    event.preventDefault()

    dispatch({ type: 'save' })

    const changePassData = { newPassword, currentPassword }

    try {
      await changePassReq(changePassData)
      dispatch({ type: 'success' })
    } catch (err) {
      dispatch({ type: 'error' })
    }
  }

  return (

    <form className='options__change-password' onSubmit={onPassChange}>
      <div className='cln-1'>
        <div className='data-wrapper'>
          <label>Nowe Hasło</label>
          <input
            required
            type='password'
            placeholder='Nowe hasło'
            value={newPassword}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'newPassword',
                value: event.currentTarget.value
              })}
          />
        </div>

        <div className='data-wrapper'>
          <label>Potwierdź nowe hasło</label>
          <input
            required
            type='password'
            placeholder='Potwierdź nowe hasło'
            value={newPasswordConfirm}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'newPasswordConfirm',
                value: event.currentTarget.value
              })}
          />
        </div>

      </div>

      <div className='cln-2'>
        <div className='data-wrapper'>
          <label>Obecne hasło</label>
          <input
            required
            type='password'
            placeholder='Obecne hasło'
            value={currentPassword}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'currentPassword',
                value: event.currentTarget.value
              })}
          />
        </div>

        <button
          className='btn data__save'
          style={isLoading ? { background: 'gray' } : null}
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Change password'}
        </button>
      </div>

    </form>

  )
}

export default ChangePassword
