import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";

const Blob = ({dark}) => {
  const geometry = new THREE.IcosahedronGeometry(3, 5);

  // Define your vertex shader as a string
  const vertexShader = `
    varying vec2 vUv;
    uniform float time;

    // Perlin noise function
    float noise(vec3 p) {
      return sin(p.x * 10.0 + time) * cos(p.y * 10.0 + time) * sin(p.z * 10.0 + time);
    }
    

    void main() {
      vUv = uv;

     
      vec3 pos = position;

     
      float displacement = 0.3 * noise(pos);
      pos += normal * displacement;

      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;


  const fragmentShader = `
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(0.313, 0.784, 0.471, 1.0);; // Green color
  }
`;
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 } // Time uniform to control the animation
    },
    vertexShader: vertexShader,
    fragmentShader,
   
  });
  material.colorWrite

  // Update time uniform in animation loop
  useEffect(() => {
    const animate = () => {
      material.uniforms.time.value += 0.02; // Increment time in each frame
      requestAnimationFrame(animate);
    };
    animate();
  }, [dark]);

  return (
    <Canvas
      camera={{
        position: [13, 13, 13],
        fov: 20,
      }}
    >
      <OrbitControls autoRotate={3} enableZoom={false} enablePan={false} enableRotate={false} />
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

      <mesh geometry={geometry} material={material} />
    </Canvas>
  );
};

export default Blob;
