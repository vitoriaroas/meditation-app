import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

import Player from './scenes/Player'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import Header from './components/Header'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
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
