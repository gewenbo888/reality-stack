"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * CosmicField
 *
 * Two coexisting particle worlds, blended by scroll:
 *   A — cosmic starfield (spherical shell, gentle drift)
 *   B — layered stack (particles snap into 10 horizontal planes)
 *
 * Drives a uniform uStack 0 → 1 from scroll position so the universe
 * literally crystallizes into a 10-layer architecture as you descend.
 */
export default function CosmicField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const COUNT = 12000;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 10);

    const aStar = new Float32Array(COUNT * 3);
    const aStack = new Float32Array(COUNT * 3);
    const aLayer = new Float32Array(COUNT);
    const aSeed = new Float32Array(COUNT);

    const LAYERS = 10;
    for (let i = 0; i < COUNT; i++) {
      // Star shell
      const r = 6 + Math.random() * 4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      aStar[i * 3 + 0] = r * Math.sin(p) * Math.cos(t);
      aStar[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      aStar[i * 3 + 2] = r * Math.cos(p);

      // Stack — 10 horizontal planes
      const layer = Math.floor(Math.random() * LAYERS);
      const yCenter = (layer - (LAYERS - 1) / 2) * 0.85;
      aStack[i * 3 + 0] = (Math.random() - 0.5) * 9.5;
      aStack[i * 3 + 1] = yCenter + (Math.random() - 0.5) * 0.18;
      aStack[i * 3 + 2] = (Math.random() - 0.5) * 5.5;

      aLayer[i] = layer / (LAYERS - 1); // 0..1 for shader color ramp
      aSeed[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("aStar", new THREE.BufferAttribute(aStar, 3));
    geo.setAttribute("aStack", new THREE.BufferAttribute(aStack, 3));
    geo.setAttribute("aLayer", new THREE.BufferAttribute(aLayer, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));

    const uniforms = {
      uTime: { value: 0 },
      uStack: { value: 0 },
      uSize: { value: 1.7 * Math.min(window.devicePixelRatio, 2) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec3 aStar;
        attribute vec3 aStack;
        attribute float aLayer;
        attribute float aSeed;
        uniform float uTime;
        uniform float uStack;
        uniform float uSize;
        varying float vLayer;
        varying float vAlpha;
        varying float vTwinkle;
        void main() {
          float m = smoothstep(0.0, 1.0, uStack);

          // Tiny per-point breathing
          float wobble = sin(uTime * 0.5 + aSeed * 6.2831) * 0.05;
          vec3 pos = mix(aStar, aStack, m);
          pos += normalize(pos + 0.0001) * wobble * (0.5 + 0.5 * (1.0 - m));

          // Slow rotation of the starfield, vanishing as it stacks
          float a = uTime * 0.03 * (1.0 - m * 0.85);
          float ca = cos(a), sa = sin(a);
          vec3 rot = vec3(ca * pos.x - sa * pos.z, pos.y, sa * pos.x + ca * pos.z);

          vec4 mv = modelViewMatrix * vec4(rot, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + (1.0 - m) * 1.5) * (320.0 / -mv.z);

          vLayer = aLayer;
          vAlpha = 0.6 + 0.4 * (1.0 - m);
          vTwinkle = sin(uTime * 1.4 + aSeed * 12.0) * 0.5 + 0.5;
        }
      `,
      fragmentShader: `
        precision highp float;
        varying float vLayer;
        varying float vAlpha;
        varying float vTwinkle;

        // Stack tier palette — matches Tailwind L0..L9
        const vec3 P_PHYS = vec3(0.357, 0.424, 1.000); // L0 #5b6cff
        const vec3 P_ENRG = vec3(0.984, 0.749, 0.141); // L1 #fbbf24
        const vec3 P_MATT = vec3(0.753, 0.792, 0.961); // L2 #c0caf5
        const vec3 P_LIFE = vec3(0.204, 0.831, 0.600); // L3 #34d399
        const vec3 P_INTL = vec3(0.655, 0.545, 0.980); // L4 #a78bfa
        const vec3 P_CIVL = vec3(0.984, 0.443, 0.522); // L5 #fb7185
        const vec3 P_INFO = vec3(0.133, 0.827, 0.933); // L6 #22d3ee
        const vec3 P_SIML = vec3(0.941, 0.671, 0.988); // L7 #f0abfc
        const vec3 P_AI   = vec3(0.525, 0.937, 0.671); // L8 #86efac
        const vec3 P_META = vec3(0.992, 0.906, 0.541); // L9 #fde68a

        vec3 palette(float t) {
          // 10-stop gradient
          float s = t * 9.0;
          int i = int(floor(s));
          float f = fract(s);
          vec3 a = P_PHYS, b = P_ENRG;
          if (i==1){a=P_ENRG;b=P_MATT;}
          else if(i==2){a=P_MATT;b=P_LIFE;}
          else if(i==3){a=P_LIFE;b=P_INTL;}
          else if(i==4){a=P_INTL;b=P_CIVL;}
          else if(i==5){a=P_CIVL;b=P_INFO;}
          else if(i==6){a=P_INFO;b=P_SIML;}
          else if(i==7){a=P_SIML;b=P_AI;}
          else if(i>=8){a=P_AI;b=P_META;}
          return mix(a, b, f);
        }

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float falloff = smoothstep(0.5, 0.0, d);
          vec3 col = palette(vLayer);
          float core = pow(falloff, 2.0);
          float alpha = falloff * vAlpha * (0.6 + vTwinkle * 0.4);
          gl_FragColor = vec4(col * (0.55 + core * 0.7), alpha);
        }
      `,
    });

    const points = new THREE.Points(geo, material);
    scene.add(points);

    // --- Scroll → stack progress ---
    let scrollTarget = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      // 0 at top, 1 once you've scrolled ~80% of the page
      scrollTarget = Math.min(1, y / (max * 0.55));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // --- Mouse parallax ---
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let frame = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      uniforms.uStack.value += (scrollTarget - uniforms.uStack.value) * 0.03;

      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.025;
      camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      material.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-[1]"
      aria-hidden
      style={{ pointerEvents: "none" }}
    />
  );
}
