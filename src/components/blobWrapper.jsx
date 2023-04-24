import * as THREE from'three'
import { useRef, useEffect, useState, useContext } from "react";
import { useFrame } from '@react-three/fiber';
import '../App.css'
import { Html } from "@react-three/drei";
import BlobInside from "./blob spring";
import { geometry } from "maath";
import { extend } from "@react-three/fiber";
import { useSpring, animated, easings} from "@react-spring/web";
import { Link } from 'react-router-dom';
import { PostsContext } from './PostsContext';
import fetchPosts from './blogData';

extend(geometry)

function Contents({archive}) {
  return (
    <div className="contents">
      <div className="title"> {archive ? "archive" : "most recent"}</div>
      <div className="details">{archive ? "browse" : "read here"}</div>
    </div>
  )
}

function BlobContainer({navigate, blobOpacity, type, url}) {

  const [{blobScale}, setScale] = useSpring(() => ({
    from: {blobScale: 1},
    config: {duration: 500, mass: .01}
  }))

  const [destination, setNav] = useState(null)

  useEffect(() => {
    if(destination!=null)
      {{navigate(url)}}
  }, [destination])

  return (
    <animated.div onClick={()=> setNav(type)} className={"blobContainer "+type} style={{scale: blobScale, opacity: blobOpacity, zIndex: blobScale.to({range: [0,1], output: [0,50]}) }}  onPointerEnter={()=>{setScale.start({blobScale:1.3})}} onPointerLeave={()=>{setScale.start({blobScale:1})}} > 
      <Contents className="contents" archive={type==="archive"} />
      <BlobInside archive={type==="archive"} className="blobInside" />
    </animated.div>
  )

}

export default function BlobWrapper({navigate, showBlobs}) {

  const posts = useContext(PostsContext);
  
  if (!posts) return

  //sorting posts by date to get most recent:
  const postsDate = posts.map(post => ([post.datePublished, post.slug]))
  postsDate.reverse()
  const mostRecentSlug = postsDate[0][1]

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
        <BlobContainer navigate = {navigate} blobOpacity={blobOpacity} type={"archive"} url={"/archive"}/>
        <BlobContainer navigate = {navigate} blobOpacity={blobOpacity} type={"recent"} url={"/archive/"+mostRecentSlug}/>
      </animated.div>

    </Html>   


  )
}