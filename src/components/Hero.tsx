import React, { useState } from 'react';
import { Phone, Calendar, ShieldCheck, Check } from 'lucide-react';
import heroImage from '../assets/images/calm_mediation_room_1791377080368.jpg';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F9FAF9] via-[#F3F7F5] to-[#F9FAF9] border-b border-[#E3EAE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Main Editorial Content Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Domain Context Kicker - Clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1B5E63]">
              <span>East Midlands Practice</span>
              <span aria-hidden="true" className="text-[#A2BAC0]">·</span>
              <span>Discreet & Independent</span>
            </div>

            {/* Exactly One H1 as requested */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-[#132A32] tracking-tight leading-[1.15] text-balance">
              Calm, Dignified Family Mediation & MIAM Assessments
            </h1>

            {/* Natural SEO Introduction incorporating all required regional & practice terms */}
            <p className="text-base sm:text-lg text-[#3E555E] leading-relaxed max-w-2xl font-normal">
              At <strong className="font-semibold text-[#162F38]">Alderton Family Mediation</strong>, we provide constructive, non-adversarial support for separated parents and couples across <span className="text-[#1A3842] font-medium">Leicestershire</span>, <span className="text-[#1A3842] font-medium">Rutland</span>, <span className="text-[#1A3842] font-medium">Lincolnshire</span> and <span className="text-[#1A3842] font-medium">Nottinghamshire</span>. Our professional accredited mediators help you resolve parenting arrangements and financial matters outside of court, providing prompt, court-recognised <span className="text-[#1A3842] font-medium">MIAM assessments</span> and trusted <span className="text-[#1A3842] font-medium">family mediation in the East Midlands</span>.
            </p>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 border-t border-[#DFE7E3]">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E63] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm text-[#445C66] font-medium">
                  Court-Compliant MIAM Certification
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E63] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm text-[#445C66] font-medium">
                  Child-Focused Parenting Plans
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E63] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm text-[#445C66] font-medium">
                  Equitable Financial Settlement
                </span>
              </div>
            </div>

            {/* Direct Action Hub */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="https://www.aldertonfamilymediation.co.uk/contact/"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183944] hover:bg-[#112830] active:bg-[#0D1F26] rounded transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#183944] text-center"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book Confidential Assessment</span>
              </a>

              <a
                href="tel:03300100199"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#183944] bg-white hover:bg-[#EEF4F1] border border-[#CCD8D2] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#183944] text-center"
              >
                <Phone className="w-4 h-4 text-[#1B5E63]" aria-hidden="true" />
                <span>Call 03300 100 199</span>
              </a>
            </div>

            {/* Discretion Note */}
            <div className="flex items-center gap-2 text-xs text-[#637D87] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#1B5E63] shrink-0" aria-hidden="true" />
              <span>Initial assessments are conducted individually in strict personal confidence.</span>
            </div>
          </div>

          {/* Visual Carrier: Single Realistic Mediation Consultation Space */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer architectural frame */}
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#D5E0DC] bg-[#E9EFE9] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={heroImage}
                  alt="Calm, dignified family mediation consultation room with natural light and comfortable armchairs"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Subtle scrim ensuring editorial contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142B34]/60 via-[#142B34]/10 to-transparent pointer-events-none" />

                {/* In-situ caption describing confidential practice setting */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#CDE1DC]">
                    Practice Environment
                  </div>
                  <p className="text-sm font-medium text-white/95 mt-0.5 leading-snug">
                    A respectful, confidential space to discuss arrangements calmly and without conflict.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
