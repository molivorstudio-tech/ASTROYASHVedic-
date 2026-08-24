"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarfieldPointsProps {
  count?: number;
}

function StarfieldPoints({ count = 3000 }: StarfieldPointsProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ y: 0, targetY: 0 });

  // Generate radial gradient circular texture for soft pinprick stars
  const starTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(213, 183, 238, 0.8)");
    gradient.addColorStop(0.5, "rgba(153, 102, 204, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Generate 3D star positions, colors, and sizes
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const amethystColor = new THREE.Color("#9966CC");
    const lightAmethystColor = new THREE.Color("#B380D9");
    const lavenderColor = new THREE.Color("#D5B7EE");
    const whiteColor = new THREE.Color("#F8FAFC");

    const colorChoices = [amethystColor, lightAmethystColor, lavenderColor, whiteColor];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 60;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;

      sz[i] = Math.random() * 0.8 + 0.4;
    }

    return [pos, col, sz];
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollRef.current.targetY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.015;

    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.03;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.03;

    scrollRef.current.y += (scrollRef.current.targetY - scrollRef.current.y) * 0.03;

    pointsRef.current.position.x = mouseRef.current.x * 0.8;
    pointsRef.current.position.y = mouseRef.current.y * 0.8 - scrollRef.current.y * 0.002;
    pointsRef.current.rotation.x = mouseRef.current.y * 0.04 + scrollRef.current.y * 0.0001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        map={starTexture || undefined}
        vertexColors
        transparent
        opacity={0.45}
        alphaTest={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeStarfield() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <StarfieldPoints count={3000} />
      </Canvas>
    </div>
  );
}
