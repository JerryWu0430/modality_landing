'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Variants } from 'framer-motion';

const transitionVariants: { container?: Variants; item?: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function CTASection() {
  return (
    <section id="cta" className="w-full py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&query=geometric pattern')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-800/90" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedGroup variants={transitionVariants} className="text-center">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl mx-auto text-center font-regular mb-6 text-white">
            Ready to Transform Your{' '}
            <span className="inline-flex items-center gap-2">
              Fashion Business
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </span>
            ?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-blue-100 max-w-xl mx-auto text-center mb-12">
            Managing a small business today is already tough.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-up">
              <Button size="lg" className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-blue-200 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </AnimatedGroup>
      </div>
    </section>
  );
}
