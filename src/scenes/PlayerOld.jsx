// import Button from 'react-bootstrap/Button'
// import React, { useState, useEffect } from 'react'
// import soundBite from './stream.mp3'

// const useAudio = () => {
//   const [audio] = useState(new Audio('/stream.mp3'))
//   const [playing, setPlaying] = useState(false)

//   const toggle = () => setPlaying(!playing)

//   useEffect(() => {
//     playing ? audio.play() : audio.pause()
//   }, [playing])

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false))
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false))
//     }
//   }, [audio])

//   return [playing, toggle]
// }


// const Player = () => {
//   const soundBite = new Audio('/stream.mp3')
// const  startAudio = () => {
//   soundBite.play()
// }
// const  stopAudio = () => {
//   soundBite.pause()
// }

//   return (
//     <section className="hero">
//       <div className="welcome">Welcome</div>
//       <div className="buttonArea">
//         <Button onClick={startAudio} variant="dark">
//         play
//         </Button>
//         <Button onClick={stopAudio} variant="dark">
//         stop
//         </Button>
//       </div>
//     </section>
//   )
// }

// export default Player
