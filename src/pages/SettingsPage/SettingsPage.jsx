import React from 'react'

import UserData from '../../components/UserData/UserData'
import ChangePassword from '../../components/ChangePassword/ChangePassword'
import PageTheme from '../../components/PageTheme/PageTheme'

import './SettingsPage.scss'

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
