"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, BakeShadows, AdaptiveEvents, View } from "@react-three/drei";
import { useUIStore } from "@/store/ui-store";
import { useEffect, useRef } from "react";

interface GlobalCanvasProps {
  children?: React.ReactNode;
}

export default function GlobalCanvas({ children }: GlobalCanvasProps) {
  const setMouse = useUIStore((state) => state.setMouse);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setMouse]);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Let clicks pass through to DOM by default
        zIndex: 0,
      }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
    >
      <Environment preset="sunset" background={false} />
      
      {/* We can tunnel components from the DOM into the canvas using View, 
          or just render global elements here. For now, we render children directly. */}
      {children}

      <BakeShadows />
      <AdaptiveEvents />
    </Canvas>
  );
}
