// src/components/Loader/Loader.jsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import styles from './Loader.module.css';

// Your college logo
import sitLogo from '../../assets/logo-sit.jpg';

// This is the 3D object that will spin
function SpinningShape() {
  const meshRef = useRef();

  // Rotate the mesh on every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 100, 16]}>
      <meshStandardMaterial 
        color="#00b4d8"  // Our techy blue
        wireframe={true}  // Makes it look high-tech
      />
    </TorusKnot>
  );
}

// This is the main Loader component
export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      
      {/* Your College Logo */}
      <img src={sitLogo} alt="IEEE SIT Logo" className={styles.logo} />

      {/* The 3D Canvas */}
      <div className={styles.canvasContainer}>
        <Canvas>
          <ambientLight intensity={1.5} />
          <SpinningShape />
        </Canvas>
      </div>

      {/* The "Thought" */}
      <p className={styles.loadingText}>
        Loading Innovation...
      </p>
    </div>
  );
};