"use client";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import avatar from "../../../public/avatar.png";

function BlobMesh() {
  const meshRef = useRef(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(3, 5), []);

  const vertexShader = `
    varying vec2 vUv;
    uniform float time;

    float noise(vec3 p) {
      return sin(p.x * 10.0 + time) * cos(p.y * 10.0 + time) * sin(p.z * 10.0 + time);
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      float displacement = 0.35 * noise(pos);
      pos += normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    void main() {
      gl_FragColor = vec4(0.0, 0.83, 1.0, 0.12);
    }
  `;

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        wireframe: false,
      }),
    []
  );

  useFrame(() => {
    if (material) {
      material.uniforms.time.value += 0.018;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function BlobWireframe() {
  const meshRef = useRef(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(3.15, 2), []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.003;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

const Blob = ({ dark, size = 280 }) => {
  const avatarSize = Math.round(size * 0.52);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* 3D canvas layer */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 9], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
              <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={2} />
          <BlobMesh />
          <BlobWireframe />
        </Canvas>
      </div>

      {/* Avatar overlay */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-full overflow-hidden ring-2 ring-cyan-400/50"
          style={{
            width: avatarSize,
            height: avatarSize,
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.35), 0 0 80px rgba(0, 212, 255, 0.12)",
          }}
        >
          <Image
            src={avatar}
            alt="Swapnil Nanavati"
            width={avatarSize}
            height={avatarSize}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Blob;
