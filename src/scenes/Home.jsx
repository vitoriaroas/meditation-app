import React from 'react'
import Button from 'react-bootstrap/Button'

function Home() {
  let audio = new Audio('/beach.mp3')

  const start = () => {
    audio.play()
  }

 const stop = () => {
   audio.pause()
 }
  return (
    <section className="hero">
      <div className="welcome">Welcome</div>
      <div className="buttonArea">
        <Button onClick={start} variant="dark"> Start</Button>
        <Button onClick={stop} variant="dark">Stop</Button>
      </div>
      </section>
   
  )
}

export default Home
