"use client";

import { MeshPhysicalMaterialProps } from "@react-three/fiber";
import React from "react";

interface GlassMaterialProps extends MeshPhysicalMaterialProps {
  color?: string;
  iridescent?: boolean;
}

export default function GlassMaterial({ 
  color = "#ffffff", 
  iridescent = false,
  ...props 
}: GlassMaterialProps) {
  return (
    <meshPhysicalMaterial
      color={color}
      transmission={1} // Makes it glass-like
      opacity={1}
      transparent
      roughness={0.05} // Slight frosted look
      thickness={2} // Refraction volume
      ior={1.5} // Index of Refraction (glass is ~1.5)
      clearcoat={1} // Adds a highly reflective layer
      clearcoatRoughness={0}
      iridescence={iridescent ? 1 : 0} // Optional iridescent oil-slick effect
      iridescenceIOR={1.3}
      iridescenceThicknessRange={[100, 400]}
      {...props}
    />
  );
}
