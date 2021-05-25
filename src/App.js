import React from 'react' 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'
import YoutubeEmbed from "./components/YoutubeEmbed"

function App() {
  return <div className="App"> <h1>Lets mediate</h1>
  <YoutubeEmbed embedId="uhkRjE3Ny84" />
  </div>
}
  
export default App
