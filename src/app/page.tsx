'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ScanViewer } from '@/components/ScanViewer';
import { BiomarkersSection } from '@/components/BiomarkersSection';
import { MemberJourney } from '@/components/MemberJourney';
import { PricingMemberships } from '@/components/PricingMemberships';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import { LocationsGrid } from '@/components/LocationsGrid';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090a0c] text-white">
      <Navbar />
      <Hero />
      <ScanViewer />
      <BiomarkersSection />
      <MemberJourney />
      <PricingMemberships />
      <TestimonialsSlider />
      <LocationsGrid />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
