'use client';

import React from 'react';
import Component from '@/components/ui/image-reveal';

export function FeatureSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background" id="features">
      <div className="fluid-container">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="w-full py-24 ">
            <Component />
          </div>
        </div>
      </div>
    </section>
  );
}
