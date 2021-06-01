import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Player from './scenes/Player'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/" component={Player} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
