"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { cn } from "@/lib/utils";

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

  /**
   * @default 10
   * @type number
   * @description
   * The count of sparkles
   * */
  sparklesCount?: number;

  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the sparkles
   * */
  colors?: {
    first: string;
    second: string;
  };
}

export function SparklesText({ text, className, colors = { first: "#9E7AFF", second: "#FE8BBB" }, sparklesCount = 10 }: SparklesTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const createSparkle = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      const id = Date.now();
      setSparkles(prev => [...prev, { id, x, y }]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== id));
      }, 1000);
    };

    const interval = setInterval(createSparkle, 300);
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
}