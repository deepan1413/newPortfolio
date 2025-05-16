import { Html, useProgress } from '@react-three/drei';

import "./Loader.css"

export default function Loader() {
  

  return (
    <Html fullscreen>
      <div className='carte'>        
        <img className='ship' src='./Textures/cloud.png'/>
        <p className='text'>Loading...</p> 
        <p className='text'>to Deepan's KameHouse Space</p> 
      </div>
    </Html>
  )
}