'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

const faqs = [
  {
    question: 'How accurate is the virtual try-on technology?',
    answer: 'Our AI-powered virtual try-on technology achieves 95%+ accuracy in fit prediction and visual representation. The system uses advanced computer vision algorithms trained on millions of fashion items and body types to provide realistic, personalized try-on experiences.'
  },
  {
    question: 'What types of clothing can I try on virtually?',
    answer: 'Currently, we support tops, dresses, outerwear, and accessories. Our technology works best with structured clothing items. We\'re continuously expanding our catalog and adding new categories like pants, skirts, and swimwear.'
  },
  {
    question: 'Do I need to upload photos of myself?',
    answer: 'No, you don\'t need to upload personal photos. Our technology can work with a simple body measurement input or use our AI to estimate your body type from basic information. For the most accurate results, you can optionally upload a photo, but it\'s not required.'
  },
  {
    question: 'How does the technology handle different body types?',
    answer: 'Our AI has been trained on diverse body types, sizes, and shapes. The system automatically adjusts clothing visualization to match your specific measurements, ensuring realistic representation across all body types and sizes.'
  },
  {
    question: 'Can I use this technology on my e-commerce website?',
    answer: 'Yes! We offer easy-to-integrate APIs and SDKs for e-commerce platforms. Our technology can be seamlessly integrated into your existing website or mobile app, helping increase conversion rates and reduce returns.'
  },
  {
    question: 'What are the system requirements?',
    answer: 'Our technology works on any modern web browser and mobile device. No special hardware or software installation is required. The processing happens on our secure cloud infrastructure, so you only need an internet connection.'
  },
  {
    question: 'How secure is my data?',
    answer: 'We take data security seriously. All personal information is encrypted, and we never store or share your photos or measurements without explicit consent. Our systems comply with GDPR, CCPA, and other privacy regulations.'
  },
  {
    question: 'What makes Modality different from other virtual try-on solutions?',
    answer: 'Unlike other solutions that use basic image overlays, our AI creates truly realistic, physics-based clothing simulations. We focus on fit accuracy, fabric behavior, and lighting to provide the most authentic virtual try-on experience available.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-background py-16 md:py-24" id="faqs">
      <div className="fluid-container">
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI-powered virtual try-on technology
          </p>
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            },
            ...transitionVariants,
          }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-4' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
} 