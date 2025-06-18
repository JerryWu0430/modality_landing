"use client"

import { motion, useInView } from "framer-motion"
import { Upload, UserCheck, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

const steps = [
  {
    icon: Upload,
    title: "Upload product photo",
    description: "Simply drag and drop your product image or select from your device.",
  },
  {
    icon: UserCheck,
    title: "Choose model or upload your own",
    description: "Select from our diverse AI model library or upload your preferred model.",
  },
  {
    icon: Download,
    title: "Download ready-to-use photos/videos",
    description: "Get studio-quality content in seconds, ready for any platform.",
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <Badge>How It Works</Badge>
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl mx-auto text-center font-regular mb-4">
            Three simple steps to
            <br />
            <span className="text-gray-600">transform your products</span>
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl mx-auto text-center">
            Managing a small business today is already tough.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`flex-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.div className="flex items-center mb-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-400 font-light tracking-widest">
                    STEP {String(index + 1).padStart(2, "0")}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-medium text-black mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
              </div>

              <div className={`flex-1 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-16 h-16 text-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
