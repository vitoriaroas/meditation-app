import Button from 'react-bootstrap/Button'
import React, { useContext, useState } from 'react'
import soundx1 from '../sounds/beach1min.mp3'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

const Player = () => {
  const [count, setCount] = useState(0)
  const { user } = useContext(UserContext)

  const soundBite = new Audio(soundx1)
  console.log(count)
  console.log('user id here', user ? user : '')

  const sendLog = () => {
    if (user) {
      console.log('found user')
      fetch(`http://localhost:5000/users/${user}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          count: count,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err))
    } else {
      window.alert('Please Login to keep track of how many times you meditate')
    }
  }

  return (
    <section className="hero">
      <div className="welcome">Welcome</div>

      <div className="buttonArea">
        <Button
          onClick={() => {
            soundBite.play()
            setCount(count + 1)
            sendLog()
          }}
          variant="dark"
        >
          Meditate
        </Button>
      </div>
      <div className="buttonArea">
        <Link to="/Signup">
          <Button variant="dark">save</Button>
        </Link>
      </div>
    </section>
  )
}

export default Player
