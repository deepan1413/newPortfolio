import { Html, useProgress } from '@react-three/drei';

import "./Loader.css"

export default function Loader() {
  

  return (
    <Html fullscreen>
      <div className='carte'>        
        <img className='ship' src='./Textures/logo.png'/>
        <p className='text'>Loading...</p> 
        <p className='text'>Deepan's  Courage theme portfolio</p> 
      </div>
    </Html>
  )
}