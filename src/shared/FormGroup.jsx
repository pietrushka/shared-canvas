import React, { useReducer, useContext } from 'react'

import './FormGroup.scss'

const FormGroup = ({ label, type, value, field, handler, isRequired }) => {
  return (
    <div className='form-group'>
      <label className='form-group__label'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={event => 
          handler({
            type: 'field',
            field: field,
            value: event.currentTarget.value
          })}
        required={isRequired && true}
        className='form-group__input'
      />
    </div>
  )
}

export default FormGroup