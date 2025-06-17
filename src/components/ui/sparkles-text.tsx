"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SparklesTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: React.ReactElement;

  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string;

  /**
   * @required
   * @type string
   * @description
   * The text to be displayed
   * */
  text: string;
}

export const SparklesText: React.FC<SparklesTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <span>{text}</span>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-400"
          >
            <path
              d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
