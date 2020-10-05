import React from 'react'

import UserData from './UserData'
import ChangePassword from './ChangePassword'
import PageTheme from './PageTheme'

import './Settings.scss'

const SettingsPage = () => {
  return (
    <div className='base-container'>
      <div className='options'>
        <UserData />
        <ChangePassword />
        <PageTheme />
      </div>
    </div>
  )
}

export default SettingsPage
