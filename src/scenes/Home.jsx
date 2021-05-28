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
    <>
      <h1 class="container">Welcome</h1>
      <div class="container">
        <Button onClick={start} variant="dark">
          Start
        </Button>{' '}
        <Button onClick={start} variant="dark">
          5 min
        </Button>{' '}
        <Button onClick={start} variant="dark">
          10 min
        </Button>{' '}
        <Button onClick={start} variant="dark">
          15 min
        </Button>{' '}
        <Button onClick={stop} variant="dark">
          Stop
        </Button>{' '}
      </div>
    </>
  )
}

export default Home
