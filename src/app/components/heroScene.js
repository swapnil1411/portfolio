"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarField() {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000; i++) {
      const r = 50 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.012;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#aaccff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function TorusKnot({ mouseRef }) {
  const mesh = useRef(null);
  const rotX = useRef(0);
  const rotY = useRef(0);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;

    rotX.current += (mouseRef.current.y * 0.25 - rotX.current) * 0.05;
    rotY.current += (mouseRef.current.x * 0.25 - rotY.current) * 0.05;

    mesh.current.rotation.x = t * 0.12 + rotX.current;
    mesh.current.rotation.y = t * 0.22 + rotY.current;
    mesh.current.position.y = Math.sin(t * 0.55) * 0.18;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1.25, 0.4, 256, 32]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#002244"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.82}
      />
    </mesh>
  );
}

function GlowOrb() {
  const mesh = useRef(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.06;
    mesh.current.scale.setScalar(s);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2.4, 16, 16]} />
      <meshBasicMaterial
        color="#00d4ff"
        transparent
        opacity={0.025}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function HeroScene({ mouseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 58 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} color="#00d4ff" intensity={4} />
      <pointLight position={[-6, -4, -4]} color="#0040ff" intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      <StarField />
      <TorusKnot mouseRef={mouseRef} />
      <GlowOrb />
    </Canvas>
  );
}
