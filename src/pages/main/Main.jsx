import React from 'react'
import './main.css'
import videobg from './video/1851190-hd_1920_1080_25fps.mp4'
const Main = () => {
  return (
    <div >
      <video src={videobg} type='video/mp4' autoPlay loop muted playsInline></video>
    </div>
  )
}

export default Main