"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  label: string;
  color: string;
}

const nodes: Node[] = [
  { x: 60,  y: 120, label: "Trigger",   color: "#e3fd79" },
  { x: 200, y: 60,  label: "WhatsApp",  color: "#25d366" },
  { x: 200, y: 180, label: "E-mail",    color: "#4285f4" },
  { x: 340, y: 120, label: "IA Agent",  color: "#a855f7" },
  { x: 480, y: 60,  label: "CRM",       color: "#ffe7d0" },
  { x: 480, y: 180, label: "Slack",     color: "#e01e5a" },
];

const edges = [
  [0, 1], [0, 2],
  [1, 3], [2, 3],
  [3, 4], [3, 5],
];

interface Dot {
  edgeIndex: number;
  progress: number;
  speed: number;
}

export default function N8nAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    dotsRef.current = edges.map((_, i) => ({
      edgeIndex: i,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.002,
    }));

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    function getPoint(t: number, from: Node, to: Node) {
      const cx = (from.x + to.x) / 2;
      const cy = (from.y + to.y) / 2 - 20;
      const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x;
      const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y;
      return { x, y };
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Draw edges
      edges.forEach(([a, b]) => {
        const from = nodes[a];
        const to = nodes[b];
        const cx = (from.x + to.x) / 2;
        const cy = (from.y + to.y) / 2 - 20;

        ctx!.beginPath();
        ctx!.moveTo(from.x, from.y);
        ctx!.quadraticCurveTo(cx, cy, to.x, to.y);
        ctx!.strokeStyle = "rgba(255,231,208,0.12)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      });

      // Draw moving dots
      dotsRef.current.forEach((dot) => {
        dot.progress += dot.speed;
        if (dot.progress > 1) dot.progress = 0;

        const [a, b] = edges[dot.edgeIndex];
        const from = nodes[a];
        const to = nodes[b];
        const pt = getPoint(dot.progress, from, to);

        ctx!.beginPath();
        ctx!.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
        ctx!.fillStyle = "#e3fd79";
        ctx!.shadowColor = "#e3fd79";
        ctx!.shadowBlur = 6;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node) => {
        // Outer ring
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx!.strokeStyle = node.color + "60";
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Inner fill
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 16, 0, Math.PI * 2);
        ctx!.fillStyle = "#323232";
        ctx!.fill();
        ctx!.strokeStyle = node.color + "90";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Label
        ctx!.fillStyle = "rgba(255,231,208,0.7)";
        ctx!.font = "9px Arial";
        ctx!.textAlign = "center";
        ctx!.fillText(node.label, node.x, node.y + 32);
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={560}
      height={240}
      className="w-full h-auto opacity-90"
      style={{ maxHeight: 220 }}
    />
  );
}
