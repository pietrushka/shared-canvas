import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import { UserContext } from '../../UserContext'

const Homepage = () => {
  const {user, setUser} = useContext(UserContext)
  console.log(user)

  if(user === null) {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    )
  } else {
    return <button onClick={() => setUser(null)}>Logout</button>
  }
}

export default Homepage