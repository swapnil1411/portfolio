import { OrbitControls } from "@react-three/drei";

const Blob = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Blob;