import Button from 'react-bootstrap/Button'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import AnimatedNumber from 'react-animated-number'

import sound from '../sounds/meditation.mp3'
import yoga from '../img/bk6.png'

const Player = () => {
  const [count, setCount] = useState(0)
  const [streakHistory, setStreakHistory] = useState('')
  const [disable, setDisable] = useState(false)
  const { user } = useContext(UserContext)
  
  useEffect(() => {
    if (user) {
      fetch(`https://meditation-api.web.app/users/${user}`)
      .then(res => res.json())
      .then(data => setStreakHistory(data.count))
      .catch(err => console.log(err))
    }
  },[count])


  const soundBite = new Audio(sound)
  console.log(count)
  console.log('user id here', user ? user : '')

  const sendLog = () => {
    if (user) {
      console.log('found user')
      fetch(`https://meditation-api.web.app/users/${user}`, {
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
      <h1 className="quote">"Meditation is not evasion; <br/> it is a serene encounter with reality."</h1>
      
      <div className="buttonArea">
        <Button disabled={disable}
          onClick={() => {
            soundBite.play()
            setDisable(true)
            setCount(count + 1)
            sendLog()
          }}
          variant="dark"
        >
          Meditate
        </Button>
      </div>
      <br />
      <br />
      <h2> Total: {streakHistory}   </h2>
      <h3> Today's</h3>
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
            <Button variant="dark">Save Progress </Button>
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