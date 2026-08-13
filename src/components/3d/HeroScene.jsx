import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Ring({
  radius,
  rotation,
  color,
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      state.clock.elapsedTime * 0.15;

    ref.current.rotation.x =
      rotation[0] +
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
    >
      <torusGeometry
        args={[
          radius,
          0.012,
          16,
          128,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function Particle({
  position,
  color,
  size,
}) {
  return (
    <mesh position={position}>
      <sphereGeometry
        args={[size, 16, 16]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <Float
        speed={1}
        rotationIntensity={0.2}
        floatIntensity={0.6}
      >
        <Ring
          radius={2.1}
          rotation={[0.8, 0.2, 0]}
          color="#FF7350"
        />

        <Ring
          radius={2.4}
          rotation={[1.4, 0.5, 0.5]}
          color="#8B7CFF"
        />

        <Ring
          radius={2.7}
          rotation={[0.3, 1, 0.2]}
          color="#FF7350"
        />
      </Float>

      <Particle
        position={[2.3, 1.1, 0]}
        color="#FF7350"
        size={0.06}
      />

      <Particle
        position={[-2.3, 0.8, 0]}
        color="#8B7CFF"
        size={0.05}
      />

      <Particle
        position={[1.8, -1.5, 0]}
        color="#FF7350"
        size={0.05}
      />

      <Particle
        position={[-1.8, -1.6, 0]}
        color="#8B7CFF"
        size={0.07}
      />

      <Particle
        position={[0.5, 2.5, 0]}
        color="#FF7350"
        size={0.04}
      />

      <Particle
        position={[-0.8, -2.5, 0]}
        color="#8B7CFF"
        size={0.05}
      />
    </>
  );
}

function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}

export default HeroScene;