import { useEffect, useRef, useState } from "react";
import { getPrimaryColor } from "@/lib/utils";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
}

export function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [colors, setColors] = useState({ primary: "201, 168, 76" });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsVisible(!prefersReducedMotion);
    
    if (prefersReducedMotion) return;
    
    setColors({ primary: getPrimaryColor() });
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    const fov = 350;

    let autoAngleY = 0;
    let autoAngleX = 0;

    const particles: Point3D[] = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * width * 1.3;
      const y = (Math.random() - 0.5) * height * 1.3;
      const z = (Math.random() - 0.5) * 600;
      particles.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 1.2,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 0.2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      autoAngleY += 0.0008;
      autoAngleX += 0.0004;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.02;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.02;

      const angleY = autoAngleY + mouseRef.current.x;
      const angleX = autoAngleX + mouseRef.current.y;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = particles.map((p) => {
        p.baseX += p.vx;
        p.baseY += p.vy;
        p.baseZ += p.vz;

        const boundX = width * 0.7;
        const boundY = height * 0.7;
        const boundZ = 250;

        if (Math.abs(p.baseX) > boundX) p.vx *= -1;
        if (Math.abs(p.baseY) > boundY) p.vy *= -1;
        if (Math.abs(p.baseZ) > boundZ) p.vz *= -1;

        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        const scale = fov / (fov + z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        return { screenX, screenY, depth: z2, scale, size: p.size * scale };
      });

      for (let i = 0; i < projected.length; i++) {
        const pA = projected[i];
        if (pA.depth < -fov + 40) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const pB = projected[j];
          if (pB.depth < -fov + 40) continue;

          const dx = pA.screenX - pB.screenX;
          const dy = pA.screenY - pB.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 150;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4 * Math.min(pA.scale, pB.scale);
            ctx.strokeStyle = `rgba(${colors.primary}, ${alpha * 0.12})`;
            ctx.lineWidth = 0.5 * Math.min(pA.scale, pB.scale);
            ctx.beginPath();
            ctx.moveTo(pA.screenX, pA.screenY);
            ctx.lineTo(pB.screenX, pB.screenY);
            ctx.stroke();
          }
        }
      }

      projected.forEach((p, idx) => {
        if (p.depth < -fov + 40) return;

        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, Math.max(0.5, p.size), 0, Math.PI * 2);

        if (idx % 20 === 0) {
          ctx.fillStyle = `rgba(${colors.primary}, 0.7)`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(${colors.primary}, 0.3)`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors, isVisible]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-10]"
      style={{ background: "transparent", mixBlendMode: "screen" }}
    />
  );
}