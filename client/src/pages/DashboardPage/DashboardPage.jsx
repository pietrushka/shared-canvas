import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import DashboardContent from '../../components/DashboardContent/DashboardContent'

const DashboardPage = () => {
  return (
    <>
      <Navbar />  
      <DashboardContent className='content' />
    </>
  )
}

export default DashboardPage
