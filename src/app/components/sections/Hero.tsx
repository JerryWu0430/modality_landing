'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Try On Clothes
              <span className="text-blue-600"> Virtually</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of fashion shopping with our AI-powered virtual try-on technology. See how clothes look on you before you buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 