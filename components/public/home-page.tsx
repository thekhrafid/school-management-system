'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from './navigation';
import Hero from './hero';
import Features from './features';
import Stats from './stats';
import News from './news';
import Contact from './contact';
import Footer from './footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
