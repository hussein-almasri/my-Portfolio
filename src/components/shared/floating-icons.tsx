"use client";

import { motion } from "framer-motion";
import { SiFlutter, SiDart, SiFirebase, SiTypescript } from "react-icons/si";

const flutterIcons = [
  { Icon: SiFlutter, color: "#02569B", delay: 0 },
  { Icon: SiDart, color: "#0175C2", delay: 0.2 },
  { Icon: SiFirebase, color: "#FFCA28", delay: 0.4 },
  { Icon: SiTypescript, color: "#3178C6", delay: 0.6 },
  { Icon: SiFlutter, color: "#02569B", delay: 0.8 },
];

const floatingVariants = {
  animate: (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  }),
};

interface FloatingIconProps {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  delay: number;
  className?: string;
}

function FloatingIcon({ Icon, color, delay, className }: FloatingIconProps) {
  return (
    <motion.div
      custom={delay}
      variants={floatingVariants}
      animate="animate"
      className={`absolute ${className}`}
    >
      <div className="glass flex h-12 w-12 items-center justify-center rounded-xl shadow-lg">
        <Icon size={24} color={color} />
      </div>
    </motion.div>
  );
}

export function FloatingFlutterIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingIcon
        Icon={flutterIcons[0].Icon}
        color={flutterIcons[0].color}
        delay={flutterIcons[0].delay}
        className="left-0 top-1/4"
      />
      <FloatingIcon
        Icon={flutterIcons[1].Icon}
        color={flutterIcons[1].color}
        delay={flutterIcons[1].delay}
        className="top-1/6 right-4"
      />
      <FloatingIcon
        Icon={flutterIcons[2].Icon}
        color={flutterIcons[2].color}
        delay={flutterIcons[2].delay}
        className="bottom-1/4 left-4"
      />
      <FloatingIcon
        Icon={flutterIcons[3].Icon}
        color={flutterIcons[3].color}
        delay={flutterIcons[3].delay}
        className="bottom-1/3 right-0"
      />
      <FloatingIcon
        Icon={flutterIcons[4].Icon}
        color={flutterIcons[4].color}
        delay={flutterIcons[4].delay}
        className="left-1/4 top-0"
      />
    </div>
  );
}
