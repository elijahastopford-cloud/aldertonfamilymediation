/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessInfographic } from './components/ProcessInfographic';
import { BenefitsAndCoverage } from './components/BenefitsAndCoverage';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF9] text-[#1D2A30] font-sans antialiased selection:bg-[#1B5E63] selection:text-white">
      {/* Top 3-Zone Accessible Navigation */}
      <Navbar />

      <main className="grow">
        {/* Hero Section with H1, intro, primary CTAs and realistic mediation room image */}
        <Hero />

        {/* Three Core Service Cards */}
        <ServicesSection />

        {/* Process Infographic: Private assessment → Explore options → Discuss next steps */}
        <ProcessInfographic />

        {/* Benefits & Regional East Midlands Coverage */}
        <BenefitsAndCoverage />

        {/* Three Concise FAQs with MIAM exemptions and legal status details */}
        <FaqSection />

        {/* Confidential Consultation CTA */}
        <CtaSection />
      </main>

      {/* Branded Practice Footer */}
      <Footer />
    </div>
  );
}
