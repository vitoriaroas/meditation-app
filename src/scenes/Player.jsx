import Button from 'react-bootstrap/Button'
import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import AnimatedNumber from 'react-animated-number'

import sound from '../sounds/meditation.mp3'
import img from '../img/bk4.png'
import yoga from '../img/bk6.png'

const Player = () => {
  const [count, setCount] = useState(0)
  const { user } = useContext(UserContext)

  const soundBite = new Audio(sound)

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
      <img className="banner" src={img} alt="Meditation is not evasion; it is a serene encounter with reality."></img>
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
      <AnimatedNumber
        value={count}
        style={{
          fontSize: 150,
        }}
        formatValue={(v) => v.toFixed(0)}
        duration={1000}
        frameStyle={(perc) => ({ opacity: perc / 100 })}
      />
      <br />
      <br />
      <div className="buttonArea">
        {!user ? (
          <Link to="/Signup">
            <Button variant="dark">Save </Button>
          </Link>
        ) : (
          <img className="banner" src={yoga} alt="cartoon doing yoga pose"></img>
        )}
        <br />
      </div>
    </section>
  )
}

export default Player
