"use client";
import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// ─── Stars ───────────────────────────────────────────────────────────────────
function Stars() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 65 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={3000} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.12} color="#aaccff" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// ─── Procedural Mountain ─────────────────────────────────────────────────────
function ProceduralMountain() {
  const { rockGeo, snowGeo } = useMemo(() => {
    const seg = 80;
    const v = new THREE.Vector3();

    const rockGeo = new THREE.ConeGeometry(9, 20, seg, seg);
    const rp = rockGeo.attributes.position;
    for (let i = 0; i < rp.count; i++) {
      v.fromBufferAttribute(rp, i);
      const h = (v.y + 10) / 20; // 0=base, 1=tip
      const disp = 1.6 * (1 - h * 0.55);
      v.x += (Math.random() - 0.5) * disp;
      v.z += (Math.random() - 0.5) * disp;
      rp.setXYZ(i, v.x, v.y, v.z);
    }
    rp.needsUpdate = true;
    rockGeo.computeVertexNormals();

    const snowGeo = new THREE.ConeGeometry(3.2, 6.5, seg, 2);
    const sp = snowGeo.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      v.fromBufferAttribute(sp, i);
      v.x += (Math.random() - 0.5) * 0.55;
      v.z += (Math.random() - 0.5) * 0.55;
      sp.setXYZ(i, v.x, v.y, v.z);
    }
    sp.needsUpdate = true;
    snowGeo.computeVertexNormals();

    return { rockGeo, snowGeo };
  }, []);

  return (
    <group position={[0, -10, 0]}>
      <mesh geometry={rockGeo}>
        <meshStandardMaterial color="#1e2a48" roughness={1} metalness={0} />
      </mesh>
      <mesh geometry={snowGeo} position={[0, 9, 0]}>
        <meshStandardMaterial
          color="#ddeeff"
          roughness={0.65}
          emissive="#99bbdd"
          emissiveIntensity={0.12}
        />
      </mesh>
    </group>
  );
}

// ─── GLB Mountain ────────────────────────────────────────────────────────────
function GLBMountain({ scrollRef }) {
  const [scene, setScene] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/models/2.glb", (gltf) => setScene(gltf.scene));
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = scrollRef.current * Math.PI * 2;
  });

  if (!scene) return null;
  return <primitive ref={ref} object={scene} position={[0, -18, 0]} scale={[14, 20, 14]} />;
}

function MountainWithFallback({ scrollRef }) {
  return <GLBMountain scrollRef={scrollRef} />;
}

// ─── Snowflake texture (drawn on a canvas, 6-pointed star) ───────────────────
function makeSnowflakeTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const cx = size / 2;
  const cy = size / 2;
  const arms = 6;
  const len = size * 0.42;
  const branchLen = len * 0.35;
  const branchAngle = Math.PI / 6;

  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";

  for (let i = 0; i < arms; i++) {
    const angle = (i / arms) * Math.PI * 2;
    const ex = cx + Math.cos(angle) * len;
    const ey = cy + Math.sin(angle) * len;

    // main arm
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(ex, ey);
    ctx.stroke();

    // two side branches at 40% and 70% along the arm
    for (const frac of [0.4, 0.68]) {
      const bx = cx + Math.cos(angle) * len * frac;
      const by = cy + Math.sin(angle) * len * frac;
      ctx.lineWidth = 1.5;
      for (const sign of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(
          bx + Math.cos(angle + sign * branchAngle) * branchLen * (1 - frac * 0.4),
          by + Math.sin(angle + sign * branchAngle) * branchLen * (1 - frac * 0.4)
        );
        ctx.stroke();
      }
    }
  }

  // soft glow at center
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.18);
  grad.addColorStop(0, "rgba(255,255,255,0.9)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.18, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

// ─── Snowfall ─────────────────────────────────────────────────────────────────
function Snowfall() {
  const ref = useRef();
  const COUNT = 1800;

  const texture = useMemo(() => (typeof window !== "undefined" ? makeSnowflakeTexture() : null), []);

  const { posArr, speeds, drifts, wobblePhase } = useMemo(() => {
    const posArr      = new Float32Array(COUNT * 3);
    const speeds      = new Float32Array(COUNT);
    const drifts      = new Float32Array(COUNT);
    const wobblePhase = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      posArr[i * 3]     = (Math.random() - 0.5) * 40;
      posArr[i * 3 + 1] = Math.random() * 34 - 4;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 40;
      speeds[i]      = 0.012 + Math.random() * 0.022;
      drifts[i]      = (Math.random() - 0.5) * 0.005;
      wobblePhase[i] = Math.random() * Math.PI * 2;
    }
    return { posArr, speeds, drifts, wobblePhase };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const p = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      p[i * 3]     += drifts[i] + Math.sin(t * 0.5 + wobblePhase[i]) * 0.003;
      p[i * 3 + 1] -= speeds[i];
      if (p[i * 3 + 1] < -16) {
        p[i * 3 + 1] = 22;
        p[i * 3]     = (Math.random() - 0.5) * 40;
        p[i * 3 + 2] = (Math.random() - 0.5) * 40;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={posArr} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.45}
        map={texture}
        transparent
        opacity={0.82}
        alphaTest={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ─── Hang Glider ─────────────────────────────────────────────────────────────
function HangGlider({ scrollRef }) {
  const groupRef = useRef();
  const ORBIT_R = 13;
  const BASE_Y = -2; // orbits around the visible upper peaks

  // Delta-wing shape: nose at (0,-1.5) → maps to +z after rotation.x=-PI/2
  const wingGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -1.8);       // nose (forward tip)
    shape.lineTo(-4.2, 1.4);     // left tip
    shape.lineTo(-0.4, 0.4);     // left inner
    shape.lineTo(0, 0.7);        // center trailing
    shape.lineTo(0.4, 0.4);      // right inner
    shape.lineTo(4.2, 1.4);      // right tip
    shape.lineTo(0, -1.8);
    return new THREE.ShapeGeometry(shape);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const a = scrollRef.current * Math.PI * 6; // 3 full orbits across full page scroll
    const x = Math.cos(a) * ORBIT_R;
    const z = Math.sin(a) * ORBIT_R;
    const y = BASE_Y + Math.sin(a * 1.3) * 2.2; // gentle vertical wave

    groupRef.current.position.set(x, y, z);
    // face direction of travel (tangent to circle)
    groupRef.current.rotation.y = a + Math.PI;
    // subtle banking
    groupRef.current.rotation.z = Math.cos(a) * 0.18;
  });

  return (
    <group ref={groupRef} scale={0.42}>
      {/* Main wing */}
      <mesh geometry={wingGeo} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#ff5e1a"
          side={THREE.DoubleSide}
          emissive="#cc2200"
          emissiveIntensity={0.2}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>
      {/* Wing wireframe overlay for detail */}
      <mesh geometry={wingGeo} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ff9966" side={THREE.DoubleSide} transparent opacity={0.25} wireframe />
      </mesh>
      {/* Pilot body (capsule) */}
      <mesh position={[0, -0.12, 0.5]}>
        <capsuleGeometry args={[0.12, 0.5, 4, 8]} />
        <meshStandardMaterial color="#223344" roughness={0.8} />
      </mesh>
      {/* Keel bar */}
      <mesh position={[0, -0.06, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1.4, 6]} />
        <meshStandardMaterial color="#556677" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Left leading edge tube */}
      <mesh position={[-1.6, 0, -0.4]} rotation={[0, 0.32, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 3.2, 6]} />
        <meshStandardMaterial color="#667788" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Right leading edge tube */}
      <mesh position={[1.6, 0, -0.4]} rotation={[0, -0.32, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 3.2, 6]} />
        <meshStandardMaterial color="#667788" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function MountainBackground() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, -2, 32], fov: 70 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#0a0f1e"]} />
        <fog attach="fog" args={["#0a0f1e", 60, 130]} />

        <ambientLight intensity={0.35} />
        <directionalLight position={[14, 28, 10]} intensity={0.95} color="#ffffff" />
        <pointLight position={[-10, 12, 18]} color="#6699ff" intensity={2.5} distance={65} />
        <pointLight position={[0, 28, 0]} color="#aaccff" intensity={1.8} distance={55} />

        <Stars />
        <Suspense fallback={null}>
          <MountainWithFallback scrollRef={scrollRef} />
        </Suspense>
        <Snowfall />
        <HangGlider scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}
