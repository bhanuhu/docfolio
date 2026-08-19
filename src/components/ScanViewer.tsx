'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldAlert, Sparkles, Activity, Layers, CheckCircle } from 'lucide-react';

const bodyRegions = [
  {
    id: 'brain',
    name: 'Brain & Head',
    tag: 'Neurology',
    findings: ['Aneurysms', 'Brain tumors', 'Silent strokes', 'White matter disease', 'Sinus disease'],
    desc: 'Multi-parametric diffusion imaging to assess brain volumetrics, intracranial aneurysms, and subtle vascular changes without harmful ionizing radiation.',
    accuracy: 'Sub-millimeter slice resolution',
  },
  {
    id: 'spine',
    name: 'Spine & Neck',
    tag: 'Musculoskeletal',
    findings: ['Disc herniations', 'Spinal stenosis', 'Vertebral fractures', 'Degenerative disc disease', 'Nerve impingement'],
    desc: 'High-contrast T1/T2 imaging through cervical, thoracic, and lumbar spine regions to identify nerve compression and early structural degeneration.',
    accuracy: 'Full spinal column coverage',
  },
  {
    id: 'torso',
    name: 'Chest, Liver & Organs',
    tag: 'Abdominal & Visceral',
    findings: ['Liver steatosis / fatty liver', 'Gallstones & cysts', 'Kidney tumors & stones', 'Pancreatic lesions', 'Splenic nodules'],
    desc: 'Comprehensive multi-contrast organ scanning delivering quantification of visceral fat, liver fat percentage, and early organ pathology detection.',
    accuracy: 'Dixon MRI Fat Quantification',
  },
  {
    id: 'pelvis',
    name: 'Pelvis & Lower Body',
    tag: 'Reproductive & Pelvic',
    findings: ['Prostate enlargement/lesions', 'Ovarian cysts & fibroids', 'Uterine pathology', 'Bladder wall thickening', 'Avascular necrosis'],
    desc: 'High-resolution targeted pelvic screening identifying early-stage reproductive, urinary, and pelvic abnormalities.',
    accuracy: 'Dual-echo contrast mapping',
  },
];

export const ScanViewer = () => {
  const [activeRegion, setActiveRegion] = useState(bodyRegions[0]);

  return (
    <section id="scan" className="py-24 bg-[#0a0c10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 text-[#7ce788] text-xs font-semibold mb-4 border border-[#10b981]/20">
            <Scan className="w-3.5 h-3.5" />
            Whole Body MRI Technology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Whole Body Scan with Zero Radiation
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Our specialized scan protocols cover up to 13 organs and key anatomical structures in under 60 minutes, detecting over 500 conditions before symptoms arise.
          </p>
        </div>

        {/* Interactive Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10131a] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Left Region Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold px-2 block mb-2">
              Select Anatomical Zone
            </span>
            {bodyRegions.map((region) => {
              const isSelected = activeRegion.id === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white/10 border-[#7ce788] shadow-lg shadow-[#7ce788]/10'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/10 text-neutral-300'
                  }`}
                >
                  <div>
                    <div className={`font-bold text-base ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                      {region.name}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">{region.tag}</div>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isSelected ? 'bg-[#7ce788] ring-4 ring-[#7ce788]/20' : 'bg-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Center / Right Visual Area */}
          <div className="lg:col-span-8 bg-[#090b0e] border border-white/10 rounded-2xl p-6 sm:p-8 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs text-[#7ce788] font-bold uppercase tracking-wider block">
                      Target Area
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeRegion.name}</h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#2fd3b4]" />
                    {activeRegion.accuracy}
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {activeRegion.desc}
                </p>

                {/* Key Findings List */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                    Conditions & Biomarkers Screened:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeRegion.findings.map((finding, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-neutral-200"
                      >
                        <CheckCircle className="w-4 h-4 text-[#7ce788] flex-shrink-0" />
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
              <span>Magnetic Resonance Imaging (1.5T / 3T Dual Read)</span>
              <span>100% Non-Invasive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
