import React, {useContext} from 'react'

import {UserContext} from '../../UserContext'

import UserData from '../../components/UserData/UserData'
import ChangePassword from '../../components/ChangePassword/ChangePassword'
import PageTheme from '../../components/PageTheme/PageTheme'

import './SettingsPage.scss'


const SettingsPage = () => {
  const {user, setUser} = useContext(UserContext)
  console.log(user)

  return (
    <div className="base-container">
      <div className="options">  
        <UserData />
        <ChangePassword />
        <PageTheme />
      </div>
    </div>
  )
}

export default SettingsPage