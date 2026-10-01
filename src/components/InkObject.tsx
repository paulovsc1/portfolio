'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface InkObjectProps {
  src?: string;
  className?: string;
  inkColor?: string;
  lineSpacing?: number;
  strokeWeight?: number;
  depth?: number;
  scale?: number;
  environmentIntensity?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  floatSpeed?: number;
  grain?: number;
  bleed?: number;
}

export const InkObject: React.FC<InkObjectProps> = ({
  src = '/logo-p-v-transparente.svg',
  className = 'h-[350px] w-full',
  inkColor = '#a3e635',
  floatIntensity = 1,
  rotationIntensity = 1,
  floatSpeed = 1.5,
  scale = 1,
}) => {
  return (
    <div className={`relative flex items-center justify-center overflow-visible ${className}`}>
      {/* 3D Floating Motion Container */}
      <motion.div
        animate={{
          y: [-12 * floatIntensity, 12 * floatIntensity, -12 * floatIntensity],
          rotateX: [-6 * rotationIntensity, 6 * rotationIntensity, -6 * rotationIntensity],
          rotateY: [-10 * rotationIntensity, 10 * rotationIntensity, -10 * rotationIntensity],
          rotateZ: [-3 * rotationIntensity, 3 * rotationIntensity, -3 * rotationIntensity],
        }}
        transition={{
          duration: 4 / floatSpeed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d',
          scale: scale,
        }}
        className="relative w-full h-full max-w-[380px] max-h-[380px] flex items-center justify-center"
      >
        {/* Glow & Depth Layers */}
        <div
          className="absolute inset-0 rounded-full blur-[80px] opacity-30 pointer-events-none transition-opacity duration-500"
          style={{ backgroundColor: inkColor }}
        />

        {/* Transparent Logo Image with Drop Shadow Glow */}
        <div
          className="relative w-full h-full flex items-center justify-center p-4"
          style={{
            filter: `drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 35px ${inkColor}44)`,
          }}
        >
          <Image
            src={src}
            alt="Ink Logo Object"
            width={380}
            height={380}
            className="w-full h-full object-contain pointer-events-none"
            priority
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
};
