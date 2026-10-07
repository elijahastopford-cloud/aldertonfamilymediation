import React from 'react';
import { ArrowUpRight, FileCheck, Users, Landmark } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'MIAM Assessments',
      subtitle: 'Mediation Information & Assessment Meeting',
      description:
        'A formal, confidential one-to-one consultation to explore whether mediation is suitable for your circumstances. Required by family courts prior to submitting a C100 or Form A application unless an exemption applies.',
      keyAspects: [
        'Individual private session before any joint dialogue',
        'Official court certification (Form C100 / Form A) if required',
        'Impartial guidance on dispute resolution alternatives',
      ],
      href: 'https://www.aldertonfamilymediation.co.uk/services/miam-assessment/',
      icon: FileCheck,
      actionLabel: 'Read About MIAMs',
    },
    {
      title: 'Child Arrangements',
      subtitle: 'Parenting Plans & Living Arrangements',
      description:
        'Facilitated, child-centred discussions designed to assist separated parents in reaching workable co-parenting agreements. Helps reduce parental conflict and establish stability for children.',
      keyAspects: [
        'Day-to-day residence, contact schedules and school holidays',
        'Constructive communication protocols between parents',
        'Comprehensive Parenting Plan documentation',
      ],
      href: 'https://www.aldertonfamilymediation.co.uk/services/child-arrangements/',
      icon: Users,
      actionLabel: 'Read About Child Arrangements',
    },
    {
      title: 'Financial Mediation',
      subtitle: 'Property, Pensions & Asset Distribution',
      description:
        'A structured and cost-effective approach to full financial disclosure following separation or divorce. Facilitates pragmatic agreement on the family home, pensions, savings, investments, and maintenance.',
      keyAspects: [
        'Complete mutual financial disclosure and documentation review',
        'Exploration of fair housing and capital division options',
        'Memorandum of Understanding ready for legal review',
      ],
      href: 'https://www.aldertonfamilymediation.co.uk/services/financial-mediation/',
      icon: Landmark,
      actionLabel: 'Read About Financial Mediation',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-[#F9FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1B5E63] mb-2">
            Professional Practice Areas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#142B34] font-medium tracking-tight">
            Specialist Family Mediation Services
          </h2>
          <p className="mt-3 text-base text-[#4E6671] leading-relaxed">
            Our accredited mediators provide calm, structured support tailored to your unique family situation, ensuring every discussion remains constructive, confidential, and focused on resolution.
          </p>
        </div>

        {/* The Three Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-[#DCE4E0] hover:border-[#1B5E63]/40 rounded-xl p-7 lg:p-8 transition-all duration-200 hover:shadow-md"
              >
                <div>
                  {/* Top Icon & Direct External Link Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#EFF4F2] text-[#1B5E63] flex items-center justify-center group-hover:bg-[#1B5E63] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono tabular-nums text-[#8FA5AE]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Clean unboxed subtitle */}
                  <div className="text-xs font-medium text-[#1B5E63] tracking-wide mb-1">
                    {service.subtitle}
                  </div>

                  <h3 className="font-serif text-2xl text-[#142B34] font-medium mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4E6671] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet aspects */}
                  <div className="pt-4 border-t border-[#EEF2F0] space-y-2 mb-6">
                    {service.keyAspects.map((aspect, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#394F58] leading-normal">
                        <span className="w-1 h-1 rounded-full bg-[#1B5E63] mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183944] group-hover:text-[#1B5E63] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63] rounded py-1"
                  >
                    <span>{service.actionLabel}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
