'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
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

const founders = [
  {
    name: 'Ken Wu',
    role: 'CEO & Co-Founder',
    image: '/ken.jpeg',
    bio: 'Constantly exploring new technologies and methodologies to push the boundaries of what\'s possible in software development and machine learning. I aim to contribute meaningful innovations that have a tangible impact on society.',
    expertise: ['Computer Vision', 'Machine Learning', 'Product Strategy'],
    education: 'BSc in Computer Science, University of Waterloo',
    experience: 'Nokia, TD Bank, Datacurve, Vecflow',
    email: 'wooqianghao@gmail.com',
    linkedin: 'https://linkedin.com/in/kenwuu',
    twitter: 'https://x.com/KenWuqianghao',
    github: 'https://github.com/KenWuqianghao'
  },
  {
    name: 'Jerry Wu',
    role: 'CTO & Co-Founder',
    image: '/jerry.jpg',
    bio: 'Software engineer passionate about building intuitive, full-stack applications that bring together clean design, rich interactivity, and smart AI systems.',
    expertise: ['Full-Stack Development', 'Software Engineering', 'UI/UX Design'],
    education: 'BSc in Computer Science, University College London',
    experience: 'Goodnotes',
    email: 'woohaoran@gmail.com',
    linkedin: 'https://linkedin.com/in/jerrywu0430',
    twitter: 'https://x.com/JerryWu0430',
    github: 'https://github.com/JerryWu0430'
  }
];

export function AboutSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24" id="aboutus">
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
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl ">
            Two brothers combining cutting-edge AI research with deep e-commerce expertise to revolutionize how the world experiences fashion.
          </p>
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.4,
                },
              },
            },
            ...transitionVariants,
          }}
          className="fluid-grid lg:grid-cols-2 gap-12"
        >
          {founders.map((founder) => (
            <div key={founder.name} className="bg-card rounded-2xl p-8 border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{founder.name}</h2>
                  <p className="text-primary font-semibold mb-3">{founder.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{founder.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${founder.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div>
                  <h3 className="font-semibold mb-1 text-sm uppercase tracking-wide text-muted-foreground">
                    Education
                  </h3>
                  <p className="text-sm">{founder.education}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm uppercase tracking-wide text-muted-foreground">
                    Experience
                  </h3>
                  <p className="text-sm">{founder.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
} 