import React from 'react'

import './SubmitButton.scss'

const SubmitButton = ({text, isLoading}) => {
  return (
    <button 
      className='submit-btn' 
      style={isLoading ? { background: 'gray' } : null} 
      type='submit' disabled={isLoading}
    >
      {isLoading ? 'Loading' : text}
    </button>
  )
}

export default SubmitButton