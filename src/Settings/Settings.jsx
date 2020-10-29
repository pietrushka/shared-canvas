import React from 'react'

import UserData from './UserData'
import ChangePassword from './ChangePassword'
import PageTheme from './PageTheme'

import './Settings.scss'
import ConsoleLayout from '../shared/ConsoleLayout'

const SettingsPage = () => {
  return (
    <ConsoleLayout>
      <div className='options'>
        <UserData />
        <ChangePassword />
        <PageTheme />
      </div>
    </ConsoleLayout>
  )
}

export default SettingsPage
