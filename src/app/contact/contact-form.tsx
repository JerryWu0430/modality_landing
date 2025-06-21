'use client';

import React, { useState } from 'react';
import { Mail, Building, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormAction } from './actions';

type State = {
  message: string;
  success: boolean;
} | null;

export default function ContactFormClient() {
  const [state, setState] = useState<State>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await contactFormAction(null, formData);
      setState(result);
    } catch {
      setState({ message: 'An error occurred. Please try again.', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-6">
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
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Request a Meeting'}
      </Button>
      {state && (
        <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
} 