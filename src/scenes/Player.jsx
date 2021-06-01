import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'

const useAudio = (url) => {
  const [audio] = useState(new Audio('/stream.mp3'))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <section className="hero">
      <div className="welcome">Welcome</div>
      <div className="buttonArea">
        <Button onClick={toggle} variant="dark">
          {playing ? 'Pause' : '10 min'}
        </Button>
      </div>
    </section>
  )
}

export default Player
