'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How is a Whole Body MRI different from a CT scan?',
    a: 'MRI uses powerful magnetic fields and radio waves, emitting zero harmful ionizing radiation. CT scans use X-ray radiation. MRI provides superior soft-tissue resolution for detecting tumors, cysts, brain health markers, and disc herniations safely year after year.',
  },
  {
    q: 'Does Docfolio use contrast dye?',
    a: 'No. Our whole body screening protocols are entirely non-invasive and non-contrast. We do not inject gadolinium or any other contrast agent.',
  },
  {
    q: 'What if I am claustrophobic?',
    a: 'Our MRI suites feature wide-bore scanners with ambient lighting, soothing music or your choice of Netflix/Spotify during the scan. Our clinical technologists remain in constant communication throughout.',
  },
  {
    q: 'Can I use my HSA / FSA funds for Docfolio?',
    a: 'Yes! Docfolio memberships and scans are eligible for HSA (Health Savings Account) and FSA (Flexible Spending Account) reimbursement.',
  },
  {
    q: 'Who reads and analyzes my scan results?',
    a: 'Every Docfolio scan undergoes a comprehensive dual-read review by our board-certified, fellowship-trained subspecialist radiologists.',
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0c10] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 text-[#7ce788] text-xs font-semibold mb-4 border border-[#10b981]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#11131b] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between text-white font-bold text-base sm:text-lg hover:text-[#7ce788] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#7ce788]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
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
