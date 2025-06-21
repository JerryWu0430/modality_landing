import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Variants } from 'framer-motion';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import ContactFormClient from './contact-form';

const transitionVariants: { container?: Variants; item?: Variants } = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 } },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        className={cn(
          '[--color:white] h-full w-full skew-y-12',
        )}
      />
      <AnimatedGroup variants={transitionVariants} className="relative z-10">
        <div className="light">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <Link href="/">
                <Button variant="ghost" className="text-black -ml-4 mb-2">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <CardTitle>Book a Meeting</CardTitle>
              <CardDescription>
                Please provide your details, and we&apos;ll get back to you to arrange a time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactFormClient />
            </CardContent>
          </Card>
        </div>
      </AnimatedGroup>
    </main>
  );
} 