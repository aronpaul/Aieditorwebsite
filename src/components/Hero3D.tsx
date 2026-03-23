"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Extract Vimeo video ID from URL
const VIMEO_VIDEO_ID = "1150865868";
const VIMEO_EMBED_URL = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&muted=1&controls=0&playsinline=1`;

function LightPlane({ position, speed }: { position: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[0, 0, Math.PI / 4]}
    >
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial
        color="#4a9eff"
        emissive="#1a5fb3"
        emissiveIntensity={0.3}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6ba3ff" transparent opacity={0.4} />
    </points>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x += (mouse.x * 0.5 - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (-mouse.y * 0.5 - cameraRef.current.position.y) * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 8]}
        fov={50}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a9eff" />
      <fog attach="fog" args={["#0a0a0a", 10, 25]} />
      <LightPlane position={[-3, 2, -2]} speed={0.3} />
      <LightPlane position={[3, -2, -4]} speed={0.4} />
      <LightPlane position={[0, 0, -6]} speed={0.25} />
      <Particles />
    </>
  );
}

interface Hero3DProps {
  useVimeoBackground?: boolean;
}

export default function Hero3D({ useVimeoBackground = true }: Hero3DProps) {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [shouldUseVimeo, setShouldUseVimeo] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const checkCapabilities = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.innerWidth < 768;
      
      // Use Vimeo on desktop if enabled and no reduced motion
      if (useVimeoBackground && !prefersReducedMotion && !isMobile) {
        setShouldUseVimeo(true);
        setShouldRender3D(false);
      } else if (!prefersReducedMotion && !isMobile) {
        setShouldUseVimeo(false);
        setShouldRender3D(true);
      } else {
        setShouldUseVimeo(false);
        setShouldRender3D(false);
      }
    };

    checkCapabilities();
    window.addEventListener("resize", checkCapabilities);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMouse({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkCapabilities);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [useVimeoBackground]);

  // Vimeo background video
  if (shouldUseVimeo) {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={VIMEO_EMBED_URL}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "none",
            transform: "scale(1.1)", // Slight zoom to avoid letterboxing
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: "grain 8s steps(10) infinite",
          }}
        />
        <style jsx>{`
          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -25%); }
            40% { transform: translate(-5%, 25%); }
            50% { transform: translate(-15%, 10%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(3%, 35%); }
            90% { transform: translate(-10%, 10%); }
          }
        `}</style>
      </div>
    );
  }

  // Fallback: 2D gradient + grain (mobile/reduced motion)
  if (!shouldRender3D) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: "grain 8s steps(10) infinite",
          }}
        />
        <style jsx>{`
          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -25%); }
            40% { transform: translate(-5%, 25%); }
            50% { transform: translate(-15%, 10%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(3%, 35%); }
            90% { transform: translate(-10%, 10%); }
          }
        `}</style>
      </div>
    );
  }

  // 3D scene fallback (if Vimeo is disabled)
  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ background: "#0a0a0a" }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
