import { useEffect, useRef } from "react";

interface Floating3DShapeProps {
  className?: string;
}

export function Floating3DShape({ className = "" }: Floating3DShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const size = 120;
    canvas.width = size;
    canvas.height = size;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      time += 0.02;

      const cx = size / 2;
      const cy = size / 2;

      ctx.strokeStyle = "rgba(201, 168, 76, 0.4)";
      ctx.lineWidth = 1;

      const vertices = [
        [0, -40, 20],
        [35, 20, 10],
        [-35, 20, 10],
        [0, 5, -30],
      ];

      const faces = [
        [0, 1, 2],
        [0, 1, 3],
        [1, 2, 3],
        [2, 0, 3],
      ];

      const rotateY = (x: number, z: number, angle: number) => ({
        x: x * Math.cos(angle) - z * Math.sin(angle),
        z: x * Math.sin(angle) + z * Math.cos(angle),
      });

      const rotateX = (y: number, z: number, angle: number) => ({
        y: y * Math.cos(angle) - z * Math.sin(angle),
        z: y * Math.sin(angle) + z * Math.cos(angle),
      });

      const rotated = vertices.map((v) => {
        let { x, y, z } = { x: v[0], y: v[1], z: v[2] };
        const ry = rotateY(x, z, time);
        x = ry.x;
        z = ry.z;
        const rx = rotateX(y, z, time * 0.5);
        y = rx.y;
        z = rx.z;
        return { x: cx + x, y: cy + y, z };
      });

      faces.forEach((face) => {
        const p1 = rotated[face[0]];
        const p2 = rotated[face[1]];
        const p3 = rotated[face[2]];

        const avgZ = (p1.z + p2.z + p3.z) / 3;
        const alpha = Math.max(0.1, Math.min(0.6, (avgZ + 50) / 100));

        ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        ctx.stroke();
      });

      const pulse = Math.sin(time * 2) * 0.15 + 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 8 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(201, 168, 76, 0.6)";
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`float-3d ${className}`}
      style={{
        filter: "drop-shadow(0 0 10px rgba(201, 168, 76, 0.3))",
      }}
    />
  );
}