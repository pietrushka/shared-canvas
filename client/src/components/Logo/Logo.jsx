import React from 'react'
import {IconContext} from 'react-icons'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './Logo.scss'

const LogoContainer = () => ( 
  <>
    <IoIosArrowForward class='logo__arrow-first'/>
    <IoIosArrowBack class='logo__arrow-second'/>
  </>
)

export default LogoContainer