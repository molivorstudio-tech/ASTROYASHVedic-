"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
varying vec2 vUv;

// Inline 2D Simplex Noise Algorithm
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 st = vUv;
  float t = uTime * 0.06;

  // Multi-layered organic aurora noise
  float n1 = snoise(vec2(st.x * 2.0 + t, st.y * 1.5 - t * 0.4));
  float n2 = snoise(vec2(st.x * 3.2 - t * 0.6, st.y * 2.2 + t * 0.2));

  float noiseVal = (n1 * 0.6 + n2 * 0.4) * 0.5 + 0.5;

  // Amethyst palette
  vec3 navy = vec3(0.043, 0.055, 0.102);         // #0B0E1A
  vec3 indigo = vec3(0.12, 0.09, 0.22);         // #1F1738
  vec3 amethyst = vec3(0.6, 0.4, 0.8);          // #9966CC

  // Aurora band color mixing
  vec3 color = mix(navy, indigo, smoothstep(0.2, 0.7, noiseVal));
  color = mix(color, amethyst, smoothstep(0.7, 0.98, noiseVal) * 0.3);

  // Soft vertical vignette mask
  float vignette = smoothstep(0.0, 0.25, st.y) * smoothstep(1.0, 0.7, st.y);
  float alpha = noiseVal * 0.4 * vignette;

  gl_FragColor = vec4(color, alpha);
}
`;

function AuroraPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

interface AuroraShaderProps {
  onError?: () => void;
}

export default function AuroraShader({ onError }: AuroraShaderProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", pointerEvents: "none" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            if (onError) onError();
          });
        }}
      >
        <AuroraPlane />
      </Canvas>
    </div>
  );
}
