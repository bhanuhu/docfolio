'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Shield, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Core Membership',
    price: '$1,199',
    monthly: '$109/mo',
    desc: 'Targeted single-region scan for baseline monitoring and specific organ checks.',
    features: [
      'Targeted Organ / Spine Scan',
      'Core Lab Panel (30+ biomarkers)',
      'Dual-read radiologist report',
      'Web & mobile dashboard',
      'HSA / FSA eligible',
    ],
    popular: false,
    cta: 'Book Core',
  },
  {
    name: 'Comprehensive',
    price: '$2,499',
    monthly: '$229/mo',
    desc: 'Full torso, spine, brain and essential organ screening paired with detailed blood labs.',
    features: [
      'Full Whole Body MRI Scan',
      'Brain, Spine & Torso imaging',
      'Advanced Biomarker Panel (60+ labs)',
      'Visceral fat & liver quantification',
      'Physician 1-on-1 consultation',
      'HSA / FSA eligible',
    ],
    popular: true,
    cta: 'Book Comprehensive',
  },
  {
    name: 'Executive Membership',
    price: '$3,999',
    monthly: '$369/mo',
    desc: 'Our most comprehensive longevity protocol with complete Whole Body MRI and 80+ labs.',
    features: [
      'Complete Whole Body MRI Scan',
      'Advanced Brain Health Assessment',
      'Comprehensive Biomarker Panel (80+ labs)',
      'Body composition & muscle quality analysis',
      'Priority scheduling & dedicated clinical liaison',
      'Annual longitudinal trend modeling',
      'HSA / FSA eligible',
    ],
    popular: false,
    cta: 'Book Executive',
  },
];

export const PricingMemberships = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  return (
    <section id="pricing" className="py-24 bg-[#08090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 text-[#7ce788] text-xs font-semibold mb-4 border border-[#10b981]/20">
            <Shield className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Memberships Tailored to Your Health Goals
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Invest in proactive detection. Covered by HSA/FSA with available 0% APR financing options.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#7ce788] text-black shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Pay in Full
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#7ce788] text-black shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Monthly Financing
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                p.popular
                  ? 'bg-gradient-to-b from-[#151922] to-[#0e1117] border-[#7ce788] shadow-2xl shadow-[#7ce788]/10 ring-1 ring-[#7ce788]/30 lg:-translate-y-2'
                  : 'bg-[#10131a] border-white/10 hover:border-white/20'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7ce788] to-[#2fd3b4] text-black font-extrabold text-xs tracking-wider uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">{p.desc}</p>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">
                    {billingCycle === 'annual' ? p.price : p.monthly}
                  </span>
                  <span className="text-xs text-neutral-400 ml-2">
                    {billingCycle === 'annual' ? 'per year' : 'for 12 months'}
                  </span>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                      <Check className="w-4 h-4 text-[#7ce788] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#locations"
                className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                  p.popular
                    ? 'bg-[#7ce788] text-black hover:bg-[#6edc7a] shadow-lg shadow-[#7ce788]/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                <span>{p.cta}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
