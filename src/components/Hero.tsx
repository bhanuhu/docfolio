'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10b981]/20 via-[#2fd3b4]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#7ce788]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#7ce788] mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7ce788]" />
          <span>Next-Generation Proactive Health Memberships</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6"
        >
          See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ce788] via-[#2fd3b4] to-[#10b981]">full picture</span> of your health. Year after year.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Proactive health memberships combining Whole Body MRI, advanced blood biomarker testing, and ongoing clinical guidance—designed to detect solid tumors, aneurysms, and silent conditions early.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#7ce788] to-[#2fd3b4] text-black font-bold text-base shadow-xl shadow-[#7ce788]/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Explore Memberships</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#scan"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            <span>How Whole Body MRI Works</span>
          </Link>
        </motion.div>

        {/* Trust Badges / Social Proof stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">170,000+</span>
            <span className="text-xs text-neutral-400 mt-1">Scans Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#7ce788]">80+</span>
            <span className="text-xs text-neutral-400 mt-1">Biomarkers Analyzed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">0 Rads</span>
            <span className="text-xs text-neutral-400 mt-1">Zero Radiation (No CT)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#2fd3b4]">4.9 / 5</span>
            <span className="text-xs text-neutral-400 mt-1">Patient Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
