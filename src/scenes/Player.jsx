import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Sound from 'react-sound'
import soundx1 from '../soundx1/beach1min.mp3'
import soundx5 from '../soundx5/beach5min.mp3'
import soundx10 from '../soundx10/beach10min.mp3'
import soundx15 from '../soundx15/beach15min.mp3'

const Player = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [playing1, setPlaying1] = useState(false)
  const [playing5, setPlaying5] = useState(false)
  const [playing10, setPlaying10] = useState(false)
  const [playing15, setPlaying15] = useState(false)

  return (
    <section className="hero">
      <div className="welcome">Welcome</div>
      <div className="buttonArea">
        <Button onClick={() => setPlaying1(!playing1)} variant="dark">{!playing1 ? '1 min' : 'Stop'}</Button>
        <Button onClick={() => setPlaying5(!playing5)} variant="dark">{!playing5 ? '5 min' : 'Stop'}</Button>
        <Button onClick={() => setPlaying10(!playing10)} variant="dark">{!playing10 ? '10 min' : 'Stop'}</Button>
        <Button onClick={() => setPlaying15(!playing15)} variant="dark">{!playing15 ? '15 min' : 'Stop'}</Button>
        <Sound
          url={soundx1}
          playStatus={playing1 ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinished={handleSongFinishedPlaying}
        />
        <Sound
          url={soundx5}
          playStatus={playing5 ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinished={handleSongFinishedPlaying}
        />
        <Sound
          url={soundx10}
          playStatus={playing10 ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinished={handleSongFinishedPlaying}
        />
        <Sound
          url={soundx15}
          playStatus={playing15 ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinished={handleSongFinishedPlaying}
        />
      </div>
    </section>
  )
}

export default Player
