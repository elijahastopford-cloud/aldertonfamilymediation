import React from 'react';
import { ArrowRight, UserCheck, Compass, CheckCircle } from 'lucide-react';

export const ProcessInfographic: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Private assessment',
      heading: 'Individual MIAM Meeting',
      description:
        'You meet privately with an accredited mediator for an individual, confidential assessment. We listen to your perspective, verify suitability, and explain your choices.',
      icon: UserCheck,
      detail: 'Private & strictly confidential',
    },
    {
      num: '02',
      title: 'Explore options',
      heading: 'Joint Facilitated Sessions',
      description:
        'In a structured and neutral setting, both parties work through issues methodically—exchanging financial figures and building child-focused arrangements with guidance.',
      icon: Compass,
      detail: 'Respectful, constructive dialogue',
    },
    {
      num: '03',
      title: 'Discuss next steps',
      heading: 'Clear Outcome Summary',
      description:
        'When proposals are agreed upon, your mediator drafts a detailed Memorandum of Understanding and Open Financial Statement, ready to be formalised by legal advisers.',
      icon: CheckCircle,
      detail: 'Clear roadmap for the future',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F2F6F4] border-y border-[#DEE7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1B5E63] mb-2">
            Clear, Transparent Pathway
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#142B34] font-medium tracking-tight">
            How the Mediation Process Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E6671] leading-relaxed">
            Mediation moves forward at a pace agreed by both participants. Every stage is designed to reduce stress, avoid adversarial court battles, and reach practical resolutions.
          </p>
        </div>

        {/* Process Infographic: Private assessment → Explore options → Discuss next steps */}
        <div className="relative">
          {/* Main 3-Step Grid with Flow Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col bg-white border border-[#D5E1DC] rounded-xl p-7 lg:p-8 shadow-xs"
                >
                  {/* Step Sequence Bar in Brand Colours */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#EEF3F0]">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#183944] text-[#F3F7F5] flex items-center justify-center font-mono text-xs font-semibold">
                        {step.num}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1B5E63]">
                        {step.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-md bg-[#EEF4F1] text-[#1B5E63] flex items-center justify-center">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#132A32] mb-2">
                    {step.heading}
                  </h3>

                  <p className="text-sm text-[#4A636E] leading-relaxed mb-6 grow">
                    {step.description}
                  </p>

                  {/* Grounded metadata */}
                  <div className="pt-4 border-t border-[#EEF3F0] text-xs font-medium text-[#294B55]">
                    {step.detail}
                  </div>

                  {/* Flow Arrow Indicator to Next Step (Desktop only) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#183944] text-white items-center justify-center shadow-md border-2 border-white"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Simple summary strip echoing the exact required infographic phrasing */}
          <div className="mt-10 p-4 sm:p-5 rounded-lg bg-white border border-[#D5E1DC] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center text-xs sm:text-sm font-medium text-[#183944]">
            <span className="text-[#56717D]">Summary Pathway:</span>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#142B34] font-semibold">
              <span className="text-[#1B5E63]">Private assessment</span>
              <span className="text-[#8BA3AC]" aria-hidden="true">→</span>
              <span className="text-[#1B5E63]">Explore options</span>
              <span className="text-[#8BA3AC]" aria-hidden="true">→</span>
              <span className="text-[#1B5E63]">Discuss next steps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
