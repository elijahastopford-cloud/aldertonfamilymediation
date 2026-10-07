import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is attending a MIAM compulsory, and what exemptions apply?',
      answer:
        'In England and Wales, anyone intending to make a court application regarding children (Form C100) or financial remedies (Form A) is legally expected to attend a Mediation Information & Assessment Meeting (MIAM) first. However, statutory exemptions do apply under Family Procedure Rules. Exemptions include documented evidence of domestic abuse, urgent child protection concerns, bankruptcy, severe geographical barriers, or where a MIAM has taken place within the preceding four months. Where an exemption applies or mediation is deemed unsuitable, an accredited mediator can sign the relevant section of the court form.',
    },
    {
      question: 'Are agreements reached in family mediation legally binding?',
      answer:
        'Mediation agreements are not automatically legally binding. This is an intentional safeguard: discussions take place on a "without prejudice" basis so that both parties feel free to explore options openly without being locked in before legal advice. Once a mutually agreeable outcome is reached, your mediator produces a comprehensive Memorandum of Understanding and Open Financial Summary. Either party can then take these documents to their respective legal advisers to be turned into a formal, legally binding Consent Order approved by the court.',
    },
    {
      question: 'What is the role of the mediator during our discussions?',
      answer:
        'A family mediator is an independent, impartial professional who does not take sides, give legal advice, or make decisions for either party. Instead, the mediator facilitates productive conversations, helps structure financial disclosure, and ensures that discussions remain calm, balanced, and focused on the future—particularly the welfare and stability of any children involved.',
    },
  ];

  return (
    <section id="faqs" className="py-20 md:py-24 bg-[#F2F6F4] border-t border-[#DEE7E3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1B5E63] mb-2">
            Clear Guidance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#142B34] font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E6671] leading-relaxed">
            Essential facts on MIAM requirements, court exemptions, and the legal status of mediation outcomes.
          </p>
        </div>

        {/* 3 Concise Accessible Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#D5E1DC] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 hover:bg-[#F9FAF9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#142B34] font-medium pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-[#EFF4F2] text-[#1B5E63] flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1B5E63] text-white' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-[#455E69] leading-relaxed border-t border-[#EEF3F0] pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
