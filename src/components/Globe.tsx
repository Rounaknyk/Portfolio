import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

const locations = [
  { name: 'USA', lat: 38, lng: -97 },
  { name: 'Netherlands', lat: 52, lng: 5 },
  { name: 'UAE', lat: 23, lng: 54 },
  { name: 'Kenya', lat: -1, lng: 38 },
  { name: 'Philippines', lat: 12, lng: 122 },
  { name: 'India', lat: 24, lng: 78 },
]; 

function Marker({ name, lat, lng }: { name: string, lat: number, lng: number }) {
  const radius = 1.52; // slightly larger than the globe to sit on surface
  
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
 
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color="#ec4899" />
      <Html distanceFactor={6}>
        <div className="text-[12px] font-mono font-bold text-pink -translate-x-1/2 -translate-y-3 whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm pointer-events-none uppercase tracking-widest">
          {name}
        </div>
      </Html>
    </mesh>
  );
}

function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  
  // High-res solid map texture without gridlines
  const mapTexture = useTexture('https://unpkg.com/three-globe/example/img/earth-water.png');

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = 0.1; 
    }
  });

  return (
    <group ref={groupRef}>
      {/* The Textured Globe */}
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial 
          map={mapTexture}
          color="#10B981" 
          transparent={true}
          opacity={0.8}
          blending={THREE.NormalBlending}
          roughness={0.8}
        />
      </Sphere>

      {/* The Markers */}
      {locations.map((loc) => (
        <Marker key={loc.name} name={loc.name} lat={loc.lat} lng={loc.lng} />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 3, 5]} intensity={2} />
        <Suspense fallback={null}>
          <RotatingGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
