import * as THREE from'three'
import { useRef, useEffect, useState } from "react";
import { useFrame } from '@react-three/fiber';
import '../App.css'
import { Html } from "@react-three/drei";
import BlobInside from "./blob spring";
import { geometry } from "maath";
import { extend } from "@react-three/fiber";
import { useSpring, animated, easings} from "@react-spring/web";
import { Link } from 'react-router-dom';


extend(geometry)

function Contents({archive}) {
  return (
    <div className="contents">
      <div className="title"> {archive ? "archive" : "most recent"}</div>
      <div className="details">{archive ? "browse" : "read here"}</div>
    </div>
  )
}

function BlobContainer({navigate, blobOpacity, type}) {

  const [{blobScale}, setScale] = useSpring(() => ({
    from: {blobScale: 1},
    config: {duration: 500, mass: .01}
  }))

  const [destination, setNav] = useState(null)

  useEffect(() => {
    if(destination==="archive"){
      navigate("/archive")
    }
    if(destination==="recent") {
      navigate("/archive/getting-over-fears")
    }
  }, [destination])

  return (
  // <a href = "#" target="_blank">
    <animated.div onClick={()=> setNav(type)} className={"blobContainer "+type} style={{scale: blobScale, opacity: blobOpacity, zIndex: blobScale.to({range: [0,1], output: [0,50]}) }}  onPointerEnter={()=>{setScale.start({blobScale:1.3})}} onPointerLeave={()=>{setScale.start({blobScale:1})}} > 
      <Contents className="contents" archive={type==="archive"} />
      <BlobInside archive={type==="archive"} className="blobInside" />
    </animated.div>
  // </a>
  )

}

export default function BlobWrapper({navigate, showBlobs}) {

  const {blobOpacity} = useSpring({
    blobOpacity: showBlobs ? 1 : 0,
    delay: 300,
    config: { duration: 1200, easing: easings.easeOutBack}
  })

  if (!showBlobs)
  {return}

  return (

    <Html transform >
      <animated.div className="content-wrapper" style={{top: blobOpacity.to({range: [0,1], output: [30,0]})}}>
        <BlobContainer navigate = {navigate} blobOpacity={blobOpacity} type={"archive"} />
        <BlobContainer navigate = {navigate} blobOpacity={blobOpacity} type={"recent"} />
      </animated.div>

    </Html>   


  )
}