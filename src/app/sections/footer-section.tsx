'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
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

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API', href: '/api' },
    { name: 'Integrations', href: '/integrations' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact', href: '/contact' },
    { name: 'Status', href: '/status' },
    { name: 'Documentation', href: '/docs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function FooterSection() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/icon.png"
                alt="Modality Logo"
                width={32}
                height={32}
                className="rounded-none"
              />
              <span className="font-bold text-xl">ODALITY</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md text-sm">
              Revolutionizing fashion retail with AI-powered virtual try-on technology. Create stunning, realistic product visualizations in seconds.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Product</h3>
            <ul className="space-y-1">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Support</h3>
            <ul className="space-y-1">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-1">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedGroup>

        <AnimatedGroup variants={transitionVariants}>
          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs">
              © 2025 Modality. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-3 md:mt-0">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Mail className="w-3 h-3" />
                <span>woohaoran@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span>+44 (7425) 206299</span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </footer>
  );
}
