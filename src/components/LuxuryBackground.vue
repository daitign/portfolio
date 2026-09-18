<template>
  <div
    class="luxury-bg-wrapper pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    aria-hidden="true"
  >
    <!-- Layer 1: Subtle Architectural Geometric Micro-Grid -->
    <div
      class="architectural-grid absolute inset-0 transition-opacity duration-500"
    ></div>

    <!-- Layer 2: Interactive Geometric Connected Dots Canvas (Constellation & Dynamic Gradients) -->
    <canvas
      ref="canvasRef"
      class="constellation-canvas absolute inset-0 w-full h-full"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useDark } from "@vueuse/core";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isDark = useDark();

const isCurrentlyDark = () => {
  return (
    (typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")) ||
    isDark.value
  );
};

// Geometric Particle Interface
interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorIndex: number;
  pulseOffset: number;
  pulseSpeed: number;
  isAnchor: boolean;
}

// Curated Luxury Color Palettes (Emerald & Crisp White Theme)
// Dark Mode: Vibrant Emerald, Crisp White, Luminous Mint, Deep Emerald
const DARK_PALETTE = [
  { r: 16, g: 185, b: 129, hex: "#10b981" }, // Vibrant Emerald
  { r: 255, g: 255, b: 255, hex: "#ffffff" }, // Crisp Pure White
  { r: 52, g: 211, b: 153, hex: "#34d399" }, // Luminous Mint
  { r: 5, g: 150, b: 105, hex: "#059669" }, // Deep Emerald
];

// Light Mode: Forest Emerald, Deep British Racing Emerald, Pure Emerald, Seafoam Jade
const LIGHT_PALETTE = [
  { r: 5, g: 150, b: 105, hex: "#059669" }, // Forest Emerald
  { r: 4, g: 120, b: 87, hex: "#047857" }, // Deep British Racing Emerald
  { r: 16, g: 185, b: 129, hex: "#10b981" }, // Pure Emerald
  { r: 13, g: 148, b: 136, hex: "#0d9488" }, // Seafoam Jade
];

let animationFrameId: number | null = null;
let nodes: NodePoint[] = [];
let width = 0;
let height = 0;
let dpr = 1;

// Initialize Particle Field with Responsive Density
const initNodes = () => {
  nodes = [];
  const area = width * height;
  // Node density: roughly 1 node per 26,000 px², clamped to [28, 62]
  const count = Math.max(28, Math.min(62, Math.floor(area / 26000)));

  for (let i = 0; i < count; i++) {
    const isAnchor = Math.random() < 0.2; // ~20% anchor nodes with subtle halo glow
    const baseRadius = isAnchor
      ? 2.0 + Math.random() * 0.8
      : 1.1 + Math.random() * 0.9;
    const speed = 0.14 + Math.random() * 0.24;
    const angle = Math.random() * Math.PI * 2;

    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: baseRadius,
      baseRadius,
      colorIndex: Math.floor(Math.random() * 4),
      pulseOffset: Math.random() * Math.PI * 2,
      pulseSpeed: 0.0015 + Math.random() * 0.002,
      isAnchor,
    });
  }
};

// Resize & Retina Scaling
const handleResize = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  width = window.innerWidth;
  height = window.innerHeight;
  dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.scale(dpr, dpr);
  }

  // Re-seed or keep nodes within bounds
  if (nodes.length === 0) {
    initNodes();
  } else {
    for (const node of nodes) {
      if (node.x > width) node.x = width * Math.random();
      if (node.y > height) node.y = height * Math.random();
    }
  }
};

// Render Loop
const render = (time: number) => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  const dark = isCurrentlyDark();
  const palette = dark ? DARK_PALETTE : LIGHT_PALETTE;

  // Connection distances
  const isMobile = width < 768;
  const maxConnectionDist = isMobile ? 95 : 125;

  // 1. Update Node Positions with Soft Boundary Wrapping
  const pad = 25;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < -pad) node.x = width + pad;
    else if (node.x > width + pad) node.x = -pad;

    if (node.y < -pad) node.y = height + pad;
    else if (node.y > height + pad) node.y = -pad;

    // Gentle breathing pulse on radius
    node.radius =
      node.baseRadius +
      Math.sin(time * node.pulseSpeed + node.pulseOffset) * 0.35;
  }

  // 2. Draw Geometric Connections with Two-Color Dynamic Gradients
  const maxLineOpacity = dark ? 0.32 : 0.2;
  ctx.lineWidth = dark ? 0.75 : 0.65;

  for (let i = 0; i < nodes.length; i++) {
    const p1 = nodes[i];
    const c1 = palette[p1.colorIndex];

    for (let j = i + 1; j < nodes.length; j++) {
      const p2 = nodes[j];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxConnectionDist) {
        const proximity = 1 - dist / maxConnectionDist;
        const lineOpacity = proximity * maxLineOpacity;

        const c2 = palette[p2.colorIndex];

        // Create linear gradient from p1 to p2
        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        grad.addColorStop(
          0,
          `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${lineOpacity.toFixed(3)})`
        );
        grad.addColorStop(
          1,
          `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${lineOpacity.toFixed(3)})`
        );

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // 3. Draw Nodes with Subtle Radial Glowing Halos
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const c = palette[node.colorIndex];

    // Subtle ambient halo for anchor nodes
    if (node.isAnchor) {
      const haloRadius = node.radius * (dark ? 3.6 : 2.8);
      const haloOpacity = dark ? 0.18 : 0.12;

      const haloGrad = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        haloRadius
      );
      haloGrad.addColorStop(
        0,
        `rgba(${c.r}, ${c.g}, ${c.b}, ${haloOpacity.toFixed(3)})`
      );
      haloGrad.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(node.x, node.y, haloRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Core Solid Dot
    const coreOpacity = node.isAnchor ? 0.95 : dark ? 0.85 : 0.78;
    ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${coreOpacity})`;

    // Subtle glow bloom in dark mode
    if (dark && node.isAnchor) {
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${c.r}, ${c.g}, ${c.b}, 0.85)`;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.beginPath();
    ctx.arc(node.x, node.y, Math.max(0.8, node.radius), 0, Math.PI * 2);
    ctx.fill();
  }

  // Reset shadow for next frame
  ctx.shadowBlur = 0;

  animationFrameId = requestAnimationFrame(render);
};

// Visibility Change Handler to conserve resources when tab is hidden
const onVisibilityChange = () => {
  if (document.hidden) {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  } else {
    if (animationFrameId === null) {
      animationFrameId = requestAnimationFrame(render);
    }
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  animationFrameId = requestAnimationFrame(render);
});

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>

<style scoped>
/* Architectural Micro-Grid */
.architectural-grid {
  background-image: radial-gradient(
    rgba(15, 23, 42, 0.045) 1px,
    transparent 1px
  );
  background-size: 36px 36px;
  opacity: 0.6;
}

:global(.dark .architectural-grid) {
  background-image: radial-gradient(
    rgba(16, 185, 129, 0.07) 1px,
    transparent 1px
  );
  opacity: 0.7;
}
</style>
