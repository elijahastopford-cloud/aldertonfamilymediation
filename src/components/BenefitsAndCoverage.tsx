import React from 'react';
import { Shield, Clock, Heart, DollarSign, MapPin, Check } from 'lucide-react';

export const BenefitsAndCoverage: React.FC = () => {
  const benefits = [
    {
      title: 'Control Over Decisions',
      description:
        'You and your former partner retain authority over practical arrangements, rather than having rigid solutions imposed by a family judge.',
      icon: Heart,
    },
    {
      title: 'Significantly Less Costly',
      description:
        'Resolving issues through structured mediation avoids the substantial financial expense and extended timescales of adversarial court litigation.',
      icon: DollarSign,
    },
    {
      title: 'Protects Children from Conflict',
      description:
        'Focused entirely on the emotional and day-to-day welfare of your children, encouraging healthy co-parenting dialogue for years ahead.',
      icon: Shield,
    },
    {
      title: 'Time-Efficient & Flexible',
      description:
        'Sessions are scheduled to fit around work and family commitments, with both remote video appointments and face-to-face meetings available.',
      icon: Clock,
    },
  ];

  const regions = [
    {
      county: 'Leicestershire',
      areas: 'Leicester, Loughborough, Hinckley, Melton Mowbray, Market Harborough',
    },
    {
      county: 'Rutland',
      areas: 'Oakham, Uppingham, and surrounding rural communities',
    },
    {
      county: 'Lincolnshire',
      areas: 'Lincoln, Grantham, Stamford, Boston, Sleaford',
    },
    {
      county: 'Nottinghamshire',
      areas: 'Nottingham, Mansfield, Newark-on-Trent, Worksop',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F9FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Short Benefits */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1B5E63] mb-2">
                Why Families Choose Mediation
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#142B34] font-medium tracking-tight">
                A Dignified Alternative to Court
              </h2>
              <p className="mt-3 text-base text-[#4E6671] leading-relaxed">
                Family separation is inherently challenging. Structured mediation allows parents and couples to address difficult questions with respect, clarity, and genuine forward momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="w-9 h-9 rounded-md bg-[#EFF5F2] text-[#1B5E63] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#142B34] mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-[#526973] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Regional Coverage across the East Midlands */}
          <div className="lg:col-span-6 bg-white border border-[#DCE4E0] rounded-xl p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1B5E63] mb-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Regional Coverage</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#142B34] font-medium tracking-tight mb-3">
                Supporting Families Across the East Midlands
              </h3>
              <p className="text-sm text-[#4E6671] leading-relaxed mb-6">
                <strong>Alderton Family Mediation</strong> provides dedicated family mediation and MIAM assessments across the East Midlands. We offer flexible attendance options to suit individual arrangements:
              </p>

              {/* County Breakdown */}
              <div className="space-y-3.5 border-t border-[#EEF2F0] pt-5">
                {regions.map((region, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EBF2EF] text-[#1B5E63] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#162F38]">
                        {region.county}
                      </span>
                      <p className="text-xs text-[#637C86] mt-0.5">
                        {region.areas}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Format Summary */}
            <div className="mt-8 pt-5 border-t border-[#EEF2F0] bg-[#F7FAF9] -mx-7 -mb-7 lg:-mx-9 lg:-mb-9 p-6 rounded-b-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-[#4F6873]">
                <strong className="text-[#152B33] block">Remote & In-Person Availability</strong>
                Secure video mediation sessions or face-to-face appointments across the region.
              </div>
              <a
                href="https://www.aldertonfamilymediation.co.uk/contact/"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#183944] hover:text-[#1B5E63] border border-[#CCD8D2] bg-white rounded transition-colors whitespace-nowrap"
              >
                Enquire Locally
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
