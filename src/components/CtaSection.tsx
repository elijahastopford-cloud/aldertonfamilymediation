import React from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#142B34] text-white relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="10" r="40" fill="#1B5E63" />
          <circle cx="10" cy="90" r="30" fill="#24757C" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#94BDC2] mb-3">
          Take the Next Step Together
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto leading-tight text-balance">
          Arrange Your Private & Confidential Assessment
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#C5D5D8] max-w-2xl mx-auto leading-relaxed">
          Initial MIAM assessments are conducted independently for each person. Contact our practice today to discuss dates, check suitability, and explore how mediation can help your family move forward.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.aldertonfamilymediation.co.uk/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#142B34] bg-white hover:bg-[#EEF4F1] rounded transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4 text-[#1B5E63]" aria-hidden="true" />
            <span>Book Confidential Assessment</span>
          </a>

          <a
            href="tel:03300100199"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white hover:text-white bg-[#1E3B46] hover:bg-[#254652] border border-[#3A5B66] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4 text-[#94BDC2]" aria-hidden="true" />
            <span>Call 03300 100 199</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#9BB1B7]">
          <ShieldCheck className="w-4 h-4 text-[#94BDC2]" aria-hidden="true" />
          <span>Strictly confidential. No referral from a solicitor is required.</span>
        </div>
      </div>
    </section>
  );
};
