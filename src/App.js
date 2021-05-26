import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Signup from './scenes/Signup'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
