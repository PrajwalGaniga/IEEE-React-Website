// src/components/Hero/HeroAnimation.jsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron } from '@react-three/drei';

// This is our spinning shape
function SpinningMesh() {
  const meshRef = useRef();

  // This hook runs on every single frame (60fps)
  useFrame((state, delta) => {
    // Animate the rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <Dodecahedron args={[1.8, 0]} ref={meshRef}> {/* 1.8 = size */}
      <meshStandardMaterial 
        color="#00b4d8" /* Our accent color */
        wireframe={true}  /* This makes it "techy" */
      />
    </Dodecahedron>
  );
}

// This is the main component that renders the 3D scene
export const HeroAnimation = () => {
  return (
    <Canvas>
      {/* Add some lighting */}
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Add the spinning shape */}
      <SpinningMesh />
    </Canvas>
  );
};