"use client";

import { motion } from "framer-motion";
import { SiFlutter, SiDart, SiFirebase, SiTypescript } from "react-icons/si";

const icons = [
  {
    Icon: SiFlutter,
    color: "#02569B",
    size: 28,
    orbit: { rx: 180, ry: 140, duration: 20, startAngle: 0 },
    float: { y: 8, duration: 3.5 },
  },
  {
    Icon: SiDart,
    color: "#0175C2",
    size: 22,
    orbit: { rx: 160, ry: 120, duration: 18, startAngle: 72 },
    float: { y: 6, duration: 4 },
  },
  {
    Icon: SiFirebase,
    color: "#FFCA28",
    size: 20,
    orbit: { rx: 190, ry: 150, duration: 22, startAngle: 144 },
    float: { y: 10, duration: 3 },
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    size: 20,
    orbit: { rx: 150, ry: 130, duration: 16, startAngle: 216 },
    float: { y: 7, duration: 3.8 },
  },
  {
    Icon: SiFlutter,
    color: "#02569B",
    size: 18,
    orbit: { rx: 170, ry: 110, duration: 24, startAngle: 288 },
    float: { y: 9, duration: 3.2 },
  },
];

function OrbitalIcon({
  Icon,
  color,
  size,
  orbit,
  float,
}: {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  size: number;
  orbit: { rx: number; ry: number; duration: number; startAngle: number };
  float: { y: number; duration: number };
}) {
  const startRad = (orbit.startAngle * Math.PI) / 180;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ x: "-50%", y: "-50%" }}
      animate={{
        x: [
          Math.cos(startRad) * orbit.rx,
          Math.cos(startRad + Math.PI / 2) * orbit.rx,
          Math.cos(startRad + Math.PI) * orbit.rx,
          Math.cos(startRad + (3 * Math.PI) / 2) * orbit.rx,
          Math.cos(startRad + 2 * Math.PI) * orbit.rx,
        ],
        y: [
          Math.sin(startRad) * orbit.ry,
          Math.sin(startRad + Math.PI / 2) * orbit.ry,
          Math.sin(startRad + Math.PI) * orbit.ry,
          Math.sin(startRad + (3 * Math.PI) / 2) * orbit.ry,
          Math.sin(startRad + 2 * Math.PI) * orbit.ry,
        ],
      }}
      transition={{
        duration: orbit.duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        animate={{ y: [-float.y, float.y, -float.y] }}
        transition={{
          duration: float.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="group relative">
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: color }}
          />
          {/* Icon container */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/30 dark:border-white/10 dark:bg-white/5">
            <Icon size={size} color={color} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingFlutterIcons() {
  return (
    <div className="pointer-events-auto absolute inset-0" aria-hidden="true">
      {icons.map((icon, i) => (
        <OrbitalIcon key={i} {...icon} />
      ))}
    </div>
  );
}
