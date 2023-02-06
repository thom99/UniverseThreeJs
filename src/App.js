import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, useTexture, Stars, Text } from "@react-three/drei";
import Rock045_1K_Color from "./Texture/Rock045_1K_Color.jpg";
import Rock045_1K_Displacement from "./Texture/Rock045_1K_Displacement.jpg";
import Rock045_1K_NormalDX from "./Texture/Rock045_1K_NormalDX.jpg";
import Rock045_1K_Roughness from "./Texture/Rock045_1K_Roughness.jpg";
import Rock045_1K_AmbientOcclusion from "./Texture/Rock045_1K_AmbientOcclusion.jpg";

const TextMesh = () => {
  return (
    <mesh position={[0,3,0]}>
      <Text font="normal" fontSize={0.3} color="#fff" anchorX="center" anchorY="center">
        WELCOME TO MY WEB SITE
      </Text>
    </mesh>
  );
};

const Sphere = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      Rock045_1K_Color,
      Rock045_1K_Displacement,
      Rock045_1K_NormalDX,
      Rock045_1K_Roughness,
      Rock045_1K_AmbientOcclusion,
    ]);
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[2, 80, 50]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
        <Stars
          radius={30}
          depth={10}
          count={5000}
          factor={3}
          saturation={0}
          fade
        />
      </mesh>
    </>
  );
};

export default function App() {
  return (
    <>
      <div className="container">
        <Canvas>
          <Suspense fallback={null}>
            <TextMesh />
            <Sphere />
            <OrbitControls autoRotate />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
