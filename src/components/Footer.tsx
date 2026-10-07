import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2027] text-[#9FB5BC] border-t border-[#1C333D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1C333D]">
          {/* Brand & Editorial Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="https://www.aldertonfamilymediation.co.uk/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <BrandLogo variant="light" size="large" />
            </a>

            <p className="text-sm text-[#8DA6AE] leading-relaxed max-w-sm pt-2">
              <strong className="text-white font-medium">Alderton Family Mediation</strong> provides accredited, dignified family mediation in the East Midlands. Assisting separated parents and couples with independent MIAM assessments, child arrangements, and fair financial resolution.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8DA6AE] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#24757C] shrink-0" aria-hidden="true" />
              <span>Serving Leicestershire, Rutland, Lincolnshire & Nottinghamshire</span>
            </div>
          </div>

          {/* Practice Services Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Mediation Services
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/services/miam-assessment/"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>MIAM Assessments</span>
                  <ArrowUpRight className="w-3 h-3 text-[#587983]" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/services/child-arrangements/"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Child Arrangements</span>
                  <ArrowUpRight className="w-3 h-3 text-[#587983]" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/services/financial-mediation/"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Financial Mediation</span>
                  <ArrowUpRight className="w-3 h-3 text-[#587983]" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Navigation & Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Practice Enquiries
            </div>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/about/"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.aldertonfamilymediation.co.uk/contact/"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#1C333D]">
              <span className="text-[11px] uppercase tracking-wider text-[#698892] block mb-1">
                Direct Line
              </span>
              <a
                href="tel:03300100199"
                className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#94BDC2] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#24757C]" aria-hidden="true" />
                <span>03300 100 199</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#6A858E]">
          <p className="max-w-3xl leading-relaxed">
            Mediation agreements are reached without prejudice and are not automatically legally binding until approved by a court as a formal consent order. MIAM exemptions apply under the Family Procedure Rules.
          </p>
          <div className="shrink-0 text-left md:text-right">
            © {new Date().getFullYear()} Alderton Family Mediation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
