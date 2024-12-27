import React from 'react';
import { motion } from 'framer-motion';

export function Loading() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        className="w-12 h-12 border-2 border-[#00ff41] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}