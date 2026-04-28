"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useUIStore } from "@/store/ui-store";
import * as THREE from "three";

export default function HeroSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Entrance animation state
  const targetScale = 1;
  const currentScale = useRef(0);

  // Parallax effect tied to mouse position & entrance animation
  useFrame((state, delta) => {
    const { mouse } = useUIStore.getState();
    if (groupRef.current) {
      // Entrance animation
      currentScale.current = THREE.MathUtils.damp(
        currentScale.current,
        targetScale,
        3,
        delta
      );
      groupRef.current.scale.setScalar(currentScale.current);

      // Smoothly interpolate towards mouse position for parallax
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        mouse.y * 0.5,
        4,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        mouse.x * 0.5,
        4,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color="#e0f2fe"
            transmission={1}
            opacity={1}
            transparent
            roughness={0.05}
            thickness={2.5}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0}
            iridescence={1}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[100, 400]}
            distort={0.4} // Liquid distortion effect
            speed={2} // Speed of the liquid animation
          />
        </mesh>
      </Float>
    </group>
  );
}
