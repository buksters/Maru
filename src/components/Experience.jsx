import { Suspense, useRef } from 'react'
import { OrbitControls, Sky, Stars, BakeShadows } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import { Maru } from "./Maru"

export const Experience = ({openingHead, navigate}) => {
  const headTop = useRef(null);

  let initialClockTime = null;

  useFrame(({ clock, gl }) => {
    
    if(openingHead) {
      if(initialClockTime === null){
        initialClockTime = clock.getElapsedTime();
      }
      if(headTop.current.rotation.z >= -2.5) {
        gl.shadowMap.needsUpdate = true;
        headTop.current.rotation.z -= .03
        // headTop.current.rotation.z = initialClockTime-clock.getElapsedTime()*1.06;
      }
    }

  })
  
  return (
    <> 
      <Stars radius={75} depth={10} count={3000} factor={4} saturation={0} fade speed={1} />
      {/* <Sky distance={4000} rayleigh={0.2} azimuth={30} inclination={1.2}/> */}
      <ambientLight intensity={.3} />
      <pointLight position={[-7, 8, -4]} intensity = {3} distance={50} castShadow shadow-mapSize-height={512}
  shadow-mapSize-width={512} />
      <pointLight position={[0, 1, 9]} intensity = {1.5} distance={20} />
      <OrbitControls enablePan={false} enableZoom={true} enableDamping={true}  minDistance={8} maxDistance={18} minAzimuthAngle={-5*Math.PI/45} maxAzimuthAngle={5*Math.PI/45} minPolarAngle={25*Math.PI/60} maxPolarAngle={25*Math.PI/60}/>
      <Maru navigate={navigate} showBlobs = {openingHead} ref={headTop} />
      <BakeShadows />
    </>
  )
}