import { useEffect, useState } from "react";
import { identity } from "@/client/branding";
import { loaderContent } from "@/client/animations";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [expand, setExpand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        const inc = Math.random() * 10 + 4;
        const newProgress = p + inc;
        const newStep = Math.floor(newProgress / 12.5);
        if (newStep > stepIndex && newStep < loaderContent.steps.length) {
          setStepIndex(newStep);
        }
        setExpand(Math.min(newProgress, 100));
        return newProgress;
      });
    }, 120);

    const holdTimer = setTimeout(() => setPhase("exit"), 2500);
    const exitTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete, stepIndex]);

  if (phase === "done") return null;

  const isExit = phase === "exit";

  return (
    <div className="genesis-loader">
      <style>{`
        .genesis-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: oklch(0.08 0.005 260);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          opacity: ${isExit ? 0 : 1};
          transition: opacity 0.6s ease;
        }
        
        .genesis-core {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .genesis-initial {
          position: relative;
          font-size: 6rem;
          font-weight: 700;
          color: oklch(0.94 0.004 250);
          letterSpacing: -0.06em;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          text-shadow: 
            0 0 60px oklch(0.78 0.15 70 / 0.4),
            0 0 100px oklch(0.78 0.15 70 / 0.2);
        }
        .genesis-dot {
          color: oklch(0.78 0.15 70);
        }
        
        .genesis-expand-ring {
          position: absolute;
          border: 1px solid oklch(0.78 0.15 70);
          borderRadius: 50%;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .genesis-particles {
          position: absolute;
          inset: -120px;
          pointer-events: none;
        }
        .genesis-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: oklch(0.78 0.15 70);
          borderRadius: 50%;
          opacity: 0;
          transition: all 0.4s ease;
          box-shadow: 0 0 6px oklch(0.78 0.15 70);
        }
        
        .genesis-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .genesis-step {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.25em;
          textTransform: uppercase;
          color: oklch(0.78 0.15 70);
          font-family: monospace;
        }
        .genesis-substep {
          font-size: 9px;
          letter-spacing: 0.15em;
          textTransform: uppercase;
          color: oklch(0.5 0.01 260);
          margin-top: 0.25rem;
        }
        .genesis-line {
          width: 200px;
          height: 3px;
          background: oklch(1 0 0 / 0.08);
          borderRadius: 3px;
          overflow: hidden;
          position: relative;
        }
        .genesis-fill {
          height: 100%;
          background: linear-gradient(90deg, oklch(0.78 0.15 70), oklch(0.9 0.15 70));
          borderRadius: 3px;
          transition: width 0.1s linear;
          box-shadow: 
            0 0 15px oklch(0.78 0.15 70 / 0.6),
            0 0 30px oklch(0.78 0.15 70 / 0.3);
        }
        
        .genesis-percent {
          font-size: 14px;
          font-weight: 600;
          color: oklch(0.78 0.15 70);
          font-family: monospace;
          margin-top: 0.5rem;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .genesis-loader { transition: none; }
          .genesis-loader * { animation: none !important; }
        }
      `}</style>

      <div className="genesis-core">
        <div className="genesis-particles">
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * 360;
            const dist = 50 + (expand * 0.8);
            const delay = i * 0.05;
            const show = expand > (i * 5);
            return (
              <span
                key={i}
                className="genesis-particle"
                style={{
                  top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * dist}px)`,
                  left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * dist}px)`,
                  opacity: show ? 1 : 0,
                  transform: show ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.3s ease',
                  transitionDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>

        {[120, 180, 260, 360].map((size, i) => {
          const show = expand > (i + 1) * 20;
          return (
            <div
              key={i}
              className="genesis-expand-ring"
              style={{
                width: `${size + expand * 0.5}px`,
                height: `${size + expand * 0.5}px`,
                opacity: show ? 0.3 - (i * 0.05) : 0,
                transform: `scale(${expand / 100})`,
                transition: 'all 0.3s ease'
              }}
            />
          );
        })}

        <span 
          className="genesis-initial"
          style={{
            transform: `scale(${0.5 + (expand / 200)})`,
            textShadow: expand > 50 
              ? `0 0 ${30 + expand * 0.3}px oklch(0.78 0.15 70 / 0.4)` 
              : `0 0 30px oklch(0.78 0.15 70 / 0.3)`
          }}
        >
          {identity.initial}
          <span className="genesis-dot">.</span>
        </span>
      </div>

      <div className="genesis-info">
        <span className="genesis-step">System {loaderContent.steps[Math.min(stepIndex, loaderContent.steps.length - 1)]}</span>
        <span className="genesis-substep">{loaderContent.subtext}</span>
        <div className="genesis-line">
          <div className="genesis-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <span className="genesis-percent">{Math.floor(Math.min(progress, 100))}%</span>
      </div>
    </div>
  );
}