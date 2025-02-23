import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Front from "./assets/Front.png";
import Back from "./assets/Back.png";

function App() {
  const [front, back] = useLoader(THREE.TextureLoader, [Front, Back]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas gl={{ alpha: false }}>
        <Lights />
        <mesh>
          <boxGeometry attach="geometry" args={[5.44, 8.6, 0.5]} />
          <meshStandardMaterial attach="material-0" color="#ffffff" />
          <meshStandardMaterial attach="material-1" color="#ffffff" />
          <meshStandardMaterial attach="material-2" color="#ffffff" />
          <meshStandardMaterial attach="material-3" color="#ffffff" />
          <meshStandardMaterial attach="material-4" map={front} />
          <meshStandardMaterial attach="material-5" map={back} />
        </mesh>
        <OrbitControls />
        <Environment
          files="/faraya.jpg"
          background
          backgroundRotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default App;
