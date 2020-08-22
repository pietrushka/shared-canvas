import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import CreateRoom from '../../components/CreateRoom/CreateRoom'

import './DashboardPage.css'

const DashboardPage = () => {
  return (
    <>
      <Navbar />  
      <CreateRoom className='content' />
    </>
  )
}

export default DashboardPage
