import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
const Blob = () => {

const geometry = new THREE.IcosahedronGeometry(2,1);
const material = new THREE.MeshStandardMaterial({
  color: "#90ee90"
})
material.roughness = 0.75;



  return (
    <Canvas
    camera={{
      position: [10, 10, 10],
      fov: 20,
    }}
  >
    <OrbitControls autoRotate={3} />
    <ambientLight intensity={0.5} />
    <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
    
    <mesh geometry={geometry} material={material} />
    </Canvas>
  );
};

export default Blob;