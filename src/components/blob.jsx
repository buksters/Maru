import KUTE from "kute.js/src"
import { useRef, useEffect, useState } from "react";
import '../App.css'
import { Svg } from "@react-three/drei";

export default function Blob({blobColor}) {
    const blobInitial = useRef()
    // const blobAfter = useRef()
    const [isHovered, setHover] = useState(true)

    const pathAfter = "M114.8 -136.7C145.5 -111 165.1 -71.8 180 -26C195 19.8 205.3 72.1 189.8 119.4C174.2 166.6 132.8 208.8 86 217.6C39.3 226.5 -12.7 202 -71.2 185.2C-129.7 168.4 -194.8 159.2 -215.5 124C-236.2 88.9 -212.7 27.8 -194 -26.6C-175.3 -81 -161.6 -128.6 -130.1 -154.2C-98.6 -179.8 -49.3 -183.4 -3.6 -179.1C42 -174.7 84 -162.4 114.8 -136.7"

    useEffect(() => {
      if(isHovered){
        const tween = KUTE.fromTo(blobInitial.current, {
          path: blobInitial.current,
        },{
            path: pathAfter,
        }, 
        {
            repeat: 1000,
            duration: 2500,
            yoyo: true,
            morphPrecision: 2
        });
        tween.start();
      }
    }, [isHovered])
  
  return (
    <>
      <svg id="morph-example" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <g transform="translate(300, 300)">
          <path ref={blobInitial} d="M150.8 -172.7C200 -138.4 247.7 -95.2 259.2 -43.7C270.6 7.8 245.7 67.6 211.9 118.6C178 169.6 135.2 211.6 81.6 236.6C27.9 261.5 -36.5 269.4 -78.9 242.7C-121.4 216.1 -141.9 154.9 -171.7 100.5C-201.5 46.1 -240.6 -1.6 -243.7 -53.3C-246.9 -104.9 -214.1 -160.5 -167.5 -195.2C-120.8 -230 -60.4 -244 -4.8 -238.3C50.8 -232.5 101.6 -207 150.8 -172.7" fill={blobColor}></path>
        </g>
      </svg>
    </>
  )
}