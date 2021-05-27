import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import Header from './components/Header'
import Stream from './img/stream.jpg'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Home" component={Home} />
        </Switch>
        <img src={Stream} alt="Stream" />
       {/* <Footer style={{ textAlign: 'center' }}>©2021 Created by Vitoria Roas</Footer>  */}
      </Router>
    </div>
  )
}

export default App
