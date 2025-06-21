'use client'

import { Check, MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Variants } from "framer-motion";

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

export function PricingCardsSection() {
  return (
    <section id="pricing" className="w-full bg-background py-16 md:py-24">
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
          className="flex text-left  gap-4 flex-col"
        >
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Start for Free
            </h2>
            <p className="text-lg pt-2 text-muted-foreground max-w-2xl">
              Get started with our core features, and upgrade as you grow. No credit card required.
            </p>
          </div>
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 w-full"
        >
          <Card className="w-full rounded-md fluid-card container-query transition-all hover:scale-105 flex flex-col">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-4xl">
                  Free
                </span>
              </CardTitle>
              <CardDescription>
                Get a feel for our platform with essential features. Perfect for individuals and small projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="flex flex-row items-baseline gap-2 text-xl">
                <span className="text-5xl tracking-tighter">$0</span>
              </p>
              <div className="pt-6">
                <Link href="/dashboard">
                  <Button variant="outline" className="gap-4 fluid-button w-full">
                    Sign up for free <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-t my-6" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Up to 100 virtual try-ons/month</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Support for 10 clothing items</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Community support</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md fluid-card container-query transition-all hover:scale-105 flex flex-col">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-4xl">
                  Pro
                </span>
              </CardTitle>
              <CardDescription>
                The most popular choice for growing businesses looking to boost sales and reduce returns.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="flex flex-row items-baseline gap-2 text-xl">
                <span className="text-5xl tracking-tighter">$99</span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </p>
              <div className="pt-6">
                <Link href="/dashboard">
                  <Button className="gap-4 fluid-button w-full bg-black text-white hover:bg-gray-800">
                    Get started <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-t my-6" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Up to 10,000 virtual try-ons/month</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Support for 500 clothing items</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Advanced analytics & insights</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-sm">Priority email & chat support</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md fluid-card container-query transition-all hover:scale-105 bg-black text-white flex flex-col">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-4xl">
                  Enterprise
                </span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Tailored solutions for large-scale retailers needing unlimited capabilities and dedicated support.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="flex flex-row items-baseline gap-2 text-xl">
                <span className="text-5xl tracking-tighter">Custom</span>
              </p>
              <div className="pt-6">
                <Link href="/contact">
                  <Button variant="outline" className="gap-4 fluid-button w-full bg-white text-black hover:bg-gray-200">
                    Book a meeting <PhoneCall className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-t my-6 border-gray-700" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-white" />
                  <p className="text-sm">Unlimited virtual try-ons</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-white" />
                  <p className="text-sm">Unlimited clothing items</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-white" />
                  <p className="text-sm">Custom model training & API access</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Check className="w-4 h-4 text-white" />
                  <p className="text-sm">Dedicated account manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>
    </section>
  )
} 