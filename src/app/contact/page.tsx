'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Building, User, MessageSquare, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Variants } from 'framer-motion';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const transitionVariants: { container?: Variants; item?: Variants } = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 } },
  },
};

type State = {
  message: string;
  success: boolean;
} | null;

async function submitForm(prevState: State, formData: FormData): Promise<State> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const message = formData.get('message');

  if (name && email && company && message) {
    console.log({ name, email, company, message });
    return { message: "Your meeting request has been sent successfully. We'll be in touch shortly.", success: true };
  } else {
    return { message: 'Please fill out all fields before submitting.', success: false };
  }
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
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
                Please provide your details, and we'll get back to you to arrange a time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input name="name" placeholder="Full Name" className="pl-10" required />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input name="company" placeholder="Company Name" className="pl-10" required />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input name="email" type="email" placeholder="Work Email" className="pl-10" required />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Textarea name="message" placeholder="Tell us about your project or what you'd like to see..." className="pl-10 min-h-32" required />
                </div>
                <SubmitButton />
                {state && (
                  <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                    {state.message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </AnimatedGroup>
    </main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Request a Meeting'}
    </Button>
  );
} 