'use client';

import React from 'react';
import { Dna, HeartPulse, ShieldAlert, Sparkles, Droplets, Zap, Activity } from 'lucide-react';

const biomarkerCategories = [
  {
    title: 'Cardiovascular & Lipids',
    count: '16 Markers',
    desc: 'ApoB, LDL-P, hs-CRP, and advanced lipid particle metrics for early heart disease stratification.',
    icon: HeartPulse,
    color: 'from-rose-500/20 to-orange-500/20',
    border: 'border-rose-500/30',
  },
  {
    title: 'Metabolic & Insulin Health',
    count: '12 Markers',
    desc: 'Fasting insulin, HbA1c, HOMA-IR, and glucose dynamics detecting pre-diabetes years early.',
    icon: Zap,
    color: 'from-amber-500/20 to-yellow-500/20',
    border: 'border-amber-500/30',
  },
  {
    title: 'Hormonal & Longevity Panels',
    count: '22 Markers',
    desc: 'Thyroid panel (TSH, Free T3/T4), testosterone, DHEA-S, and IGF-1 for energy and vitality optimization.',
    icon: Dna,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
  },
  {
    title: 'Liver, Kidney & Electrolytes',
    count: '18 Markers',
    desc: 'eGFR, ALT/AST, Cystatin C, BUN, and microalbumin identifying hidden organ stress.',
    icon: Droplets,
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/30',
  },
  {
    title: 'Inflammation & Immune Status',
    count: '14 Markers',
    desc: 'hs-CRP, Homocysteine, ESR, and complete blood count with differential.',
    icon: ShieldAlert,
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
  {
    title: 'Cellular Health & Nutrients',
    count: '10 Markers',
    desc: 'Vitamin D, Ferritin, B12, Magnesium RBC, and intracellular micronutrient baselines.',
    icon: Sparkles,
    color: 'from-teal-500/20 to-green-500/20',
    border: 'border-teal-500/30',
  },
];

export const BiomarkersSection = () => {
  return (
    <section id="biomarkers" className="py-24 bg-[#08090c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2fd3b4]/10 text-[#2fd3b4] text-xs font-semibold mb-4 border border-[#2fd3b4]/20">
            <Dna className="w-3.5 h-3.5" />
            Comprehensive Blood Analytics
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            A deeper look with 80+ Blood Biomarkers
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Pairing state-of-the-art MRI anatomical imaging with clinical laboratory blood panels gives you the total health baseline.
          </p>
        </div>

        {/* Biomarkers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biomarkerCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#11131a] border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#7ce788]" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {item.count}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
