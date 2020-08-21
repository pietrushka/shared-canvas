import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import io from 'socket.io-client';

import Homepage from './pages/homepage/homepage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import JoinPage from './pages/join-page/join-page.component'
import CanvasPage from './pages/canvas-page/canvas-page.component'


function App() {
  const [socket, setSocket] = React.useState(null)
  const ENDPOINT = 'https://shared-workspace.herokuapp.com'
  

  const setupSocket = () => {
    const token = localStorage.getItem("CC_Token")
    if (token && !socket) {
      const newSocket = io(ENDPOINT, {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        console.log('socket disconnected')
      });

      newSocket.on("connect", () => {
        console.log('!!! socket connected')
      });

      setSocket(newSocket);
    }
  }

  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <Router>
      <Route 
        path='/' 
        component={Homepage} 
        exact 
      /> 
      <Route 
        path='/login' 
        component={LoginPage} 
        setupSocket={setupSocket} 
        exact 
      />
      <Route 
        path='/register' 
        component={RegisterPage} 
        exact 
      />
      <Route 
        path='/dashboard' 
        component={JoinPage} 
        socket={socket} 
        exact
      />
      <Route 
        path='/canvas:id' 
        component={CanvasPage} 
        socket={socket} 
        exact
      /> 
    </Router>
  )
}

export default App;