import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesGrid } from '../components/home/FeaturesGrid';

export default function HomePage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <FeaturesGrid />
    </main>
  );
}