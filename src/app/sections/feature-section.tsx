'use client';

import React from 'react';
import { CheckCircle, Zap, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
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

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate professional try-on images in under 30 seconds with our optimized AI pipeline.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Diverse Models',
    description: 'Choose from hundreds of diverse virtual models with different body types, skin tones, and styles.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and GDPR compliance for your data.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms ensure realistic and high-quality try-on results.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl mx-auto text-center font-regular mb-6">
            Why Choose{' '}
            <span className="text-blue-600">Modality</span>?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl mx-auto text-center">
            Managing a small business today is already tough.
          </p>
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="pb-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", feature.bgColor)}>
                  <feature.icon className={cn("w-6 h-6", feature.color)} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.8,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="group">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedGroup>
      </div>
    </section>
  );
}