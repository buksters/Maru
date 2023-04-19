import { useState, Suspense, useRef } from 'react'
import '../App.css'
import { Canvas, useThree } from '@react-three/fiber'
import { Experience } from './Experience'
import { Vector3 } from 'three';
import Blob from './blobWrapper';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Nav from './Nav';




function Footer() {
  return (
    <div className="footer">
      <p>made by <a target='_blank' href="https://ibukiwasaki.com">Ibuki Iwasaki</a>. <br/>character design inspired by <a href="https://www.instagram.com/feliciachiao" target='_blank'>Felicia Chiao</a>.</p>
    </div>
  )
}


export default function Home() {
  const [headOpen, setHeadOpen] = useState(false);

  const cameraFov = 77.5 - (window.innerWidth / 52.5)
  const navigate = useNavigate();


  function handleClick() {
    setHeadOpen(!headOpen);
  }

  return (
    <>
      <Nav displayBack={false} />
      <button disabled={headOpen} onClick={handleClick} className='openHeadButton'>What's inside Maru's mind...</button>
      <Canvas renderer={{size: (window.innerWidth/2, window.innerHeight/2)}} camera={{ fov: cameraFov, position: [0, 8, 13]}} shadows>
        <Experience navigate={navigate} openingHead={headOpen} />
      </Canvas>
      <Footer />
      
    </>
  )
}

