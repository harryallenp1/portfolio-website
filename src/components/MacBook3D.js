import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, RoundedBox } from '@react-three/drei';

// MacBook Pro 3D Model Component
function MacBookModel({ scrollProgress, onScreenClick }) {
  const groupRef = useRef();
  
  // Animate based on scroll progress
  useFrame(() => {
    if (groupRef.current) {
      // More dramatic animations based on scroll
      const rotation = scrollProgress * Math.PI * 0.5; // Increased rotation
      const scale = 1 + scrollProgress * 1.2; // More scaling
      const yPosition = scrollProgress * 1.5; // Add vertical movement
      
      groupRef.current.rotation.y = rotation;
      groupRef.current.rotation.x = scrollProgress * 0.2; // Add slight X rotation
      groupRef.current.scale.setScalar(scale);
      groupRef.current.position.y = yPosition;
      
      // Move camera closer as we scroll
      groupRef.current.position.z = scrollProgress * 3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* MacBook Base */}
      <RoundedBox
        args={[4, 0.2, 3]}
        position={[0, -0.1, 0]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      
      {/* MacBook Screen Back */}
      <RoundedBox
        args={[4, 2.5, 0.1]}
        position={[0, 1.25, -1.45]}
        rotation={[-Math.PI * 0.02, 0, 0]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      
      {/* MacBook Screen */}
      <RoundedBox
        args={[3.6, 2.2, 0.05]}
        position={[0, 1.25, -1.4]}
        rotation={[-Math.PI * 0.02, 0, 0]}
        radius={0.05}
        smoothness={4}
        onClick={onScreenClick}
      >
        <meshStandardMaterial 
          color="#000000" 
          emissive="#111111"
          metalness={0.1} 
          roughness={0.9} 
        />
      </RoundedBox>
      
      {/* Apple Logo */}
      <Text
        position={[0, 1.8, -1.35]}
        rotation={[-Math.PI * 0.02, 0, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        
      </Text>
      
      {/* Keyboard Area */}
      <RoundedBox
        args={[3.2, 2.2, 0.05]}
        position={[0, 0.05, -0.3]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </RoundedBox>
      
      {/* Trackpad */}
      <RoundedBox
        args={[1.2, 0.8, 0.02]}
        position={[0, 0.06, 0.5]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

// Scene Setup Component
function Scene({ scrollProgress, onScreenClick }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Adjust camera position based on scroll
    const targetZ = 5 - scrollProgress * 3;
    camera.position.z = targetZ;
    camera.lookAt(0, 0, 0);
  }, [scrollProgress, camera]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      {/* MacBook Model */}
      <MacBookModel scrollProgress={scrollProgress} onScreenClick={onScreenClick} />
      
      {/* Controls */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={false}
      />
    </>
  );
}

// Main MacBook3D Component
const MacBook3D = ({ scrollProgress = 0, onScreenClick }) => {
  // Debug: Log scroll progress changes
  useEffect(() => {
    console.log('MacBook3D received scrollProgress:', scrollProgress);
  }, [scrollProgress]);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene scrollProgress={scrollProgress} onScreenClick={onScreenClick} />
      </Canvas>
    </div>
  );
};

export default MacBook3D;