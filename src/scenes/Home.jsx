import React from 'react'
import Button from 'react-bootstrap/Button'

function Home() {
  let audio = new Audio('/stream.mp3')

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
        <h1 className="time-display">0:00</h1>
        <Button onClick={start} data-time="120" variant="dark">
          Start
        </Button>
        <Button onClick={stop} variant="dark">
          Stop
        </Button>
        {/* <Button onClick={stop} variant="dark">5 min</Button>
        <Button onClick={stop} variant="dark">10 min</Button> */}
      </div>
    </section>
  )
}

export default Home
