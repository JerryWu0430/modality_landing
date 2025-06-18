"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRef, useState } from "react"

export function VisualDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section ref={containerRef} className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <Badge>See It In Action</Badge>
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl mx-auto text-center font-regular mb-4">
            From product to
            <br />
            <span className="text-gray-600">professional imagery</span>
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl mx-auto text-center">
            Managing a small business today is already tough.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm z-10">
                BEFORE
              </div>
              <motion.div
                className="aspect-square bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <span className="text-4xl">👕</span>
                  </div>
                  <p className="text-sm text-gray-500 font-light">Product flat lay</p>
                </div>
              </motion.div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              <motion.div
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg"
                animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 right-4 bg-black px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm z-10">
                AFTER
              </div>
              <motion.div
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <span className="text-4xl">🧍‍♀️</span>
                  </div>
                  <p className="text-sm text-gray-700 font-light">AI model wearing product</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-sm tracking-wide font-medium"
          >
            Try It Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
