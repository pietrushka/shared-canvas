import React from 'react'
import { BsMoon } from 'react-icons/bs'
import { RiSunFill } from 'react-icons/ri'

import './PageTheme.scss'

const PageTheme = () => {
  return (
    <div className='options__theme'>
      <input onClick={() => window.alert('Work in progress')} type='checkbox' className='set-theme' id='set-theme' />
      <label className='label__theme' htmlFor='set-theme'>
        <RiSunFill className='sun-icon' />
        <BsMoon className='moon-icon' />
        <div className='ball' />
      </label>
    </div>
  )
}

export default PageTheme
