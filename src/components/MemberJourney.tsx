'use client';

import React from 'react';
import { CalendarCheck2, Eye, LineChart, RefreshCw } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Scan in Comfort',
    desc: 'Relax in our state-of-the-art scanner while watching Netflix or listening to Spotify. 60 minutes, zero radiation, zero contrast dye injections.',
    icon: CalendarCheck2,
  },
  {
    num: '02',
    title: 'Physician Review',
    desc: 'Expert dual-read evaluation by fellowship-trained radiologists. Receive your interactive 3D web & mobile report within days.',
    icon: Eye,
  },
  {
    num: '03',
    title: 'Track Health Baseline',
    desc: 'Understand your organ volumetrics, visceral fat %, spine health, and blood biomarkers in a unified digital health dashboard.',
    icon: LineChart,
  },
  {
    num: '04',
    title: 'Repeat & Protect',
    desc: 'Annual check-ups establish longitudinal baselines to detect micro-deviations before they develop into chronic diseases.',
    icon: RefreshCw,
  },
];

export const MemberJourney = () => {
  return (
    <section className="py-24 bg-[#0a0c10] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#7ce788] font-bold block mb-2">
            The Proactive Protocol
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Scan. Review. Track. Repeat.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#11141d] border border-white/10 p-6 flex flex-col justify-between hover:border-[#7ce788]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-neutral-600 group-hover:text-[#7ce788]">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ce788]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
