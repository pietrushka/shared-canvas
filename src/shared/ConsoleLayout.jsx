import React from 'react'

import ConsoleNavbar from './ConsoleNavbar'
import './ConsoleLayout.scss'

const ConsoleLayout = ({children}) => (
  <div className="console__content">
    <ConsoleNavbar />
    <div className="base-container">
      {children}
    </div>
  </div>
)

export default ConsoleLayout