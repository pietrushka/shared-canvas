import React from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './Logo.scss'

const LogoContainer = () => ( 
  <div className='LogoContainer'>
    <IoIosArrowForward className='logo__arrow-first'/>
    <IoIosArrowBack className='logo__arrow-second'/>
  </div>
)

export default LogoContainer