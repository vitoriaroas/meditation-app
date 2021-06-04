import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from 'firebase'
import firebaseConfig from './config'

import Player from './scenes/Player'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import Header from './components/Header'

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userFromLs = localStorage.getItem('user')
    setUser(userFromLs)
  }, [])

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, firebaseAuth }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/" component={Player} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App
