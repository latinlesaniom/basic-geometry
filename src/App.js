import * as THREE from 'three'
import {OrbitControls} from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber';
import './App.css';
import { useState, useRef } from 'react';



function Boxes(props){
  const [isBig, setIsBig] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef()

  const size = isBig ? 2 : 1;

  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return(
    <>
    <mesh 
      {...props}
      ref={ref}
      onClick={() => setIsBig(!isBig)}
      onPointerOver = {(event) => setIsHovered(true)}
      onPointerOut={(event) => setIsHovered(false)}
    >
        <boxBufferGeometry attach='geometry' args={[size, size, size]} />
        <meshStandardMaterial attach="material" color={isHovered ? "red" : "orange"} />
    </mesh>
    </>
  )
}


function Scene(){
  return(
    <>
      <ambientLight />
      <pointLight castShadow={true} intensity={1}  position={[0, 3, 3]} />
      <Boxes position={[-4, 0, 0]} />
      <Boxes position={[4, 0, 0]} />
    </>
  )
}

function App() {
  return (
    <>
        <Canvas>
          <Scene />
        </Canvas>
    </>
  );
}

export default App;
