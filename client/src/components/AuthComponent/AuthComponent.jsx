import React, {useState, useEffect} from 'react'
import Axios from "axios";

const AuthComponent = ({history, children}) => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      history.push('login')
    }

    Axios({
      method: "POST",
      withCredentials: true,
      url: `http://localhost:4000/api/auth/getUser`,
      headers: {
        'Authorization': `Basic ${token}`
      },
    }).then((res) => {
        setUser(res.data)
      }).catch((err) => {
        localStorage.removeItem('token')
        history.push('/login')
      })
  }, [])

  return (
    <div>
      {children}   
    </div>
  )
}

export default AuthComponent
