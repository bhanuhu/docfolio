'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Dr. Sarah Jenkins, MD',
    role: 'Internal Medicine Physician',
    quote:
      'As a doctor, I recommend Docfolio to my patients who want true preventative baseline data. The precision of their whole-body protocol and dual-read radiologist report is unmatched.',
    rating: 5,
    location: 'New York, NY',
  },
  {
    name: 'David Sterling',
    role: 'Docfolio Member (2 Years)',
    quote:
      'My scan detected an asymptomatic stage-1 renal lesion that regular blood work completely missed. That early intervention saved my life. I will never miss my annual scan.',
    rating: 5,
    location: 'San Francisco, CA',
  },
  {
    name: 'Elena Rostova',
    role: 'Biohacker & Triathlete',
    quote:
      'The combination of MRI visceral fat mapping and 80+ blood biomarkers gave me actionable insights to fine-tune my longevity stack. The experience was painless and premium.',
    rating: 5,
    location: 'Miami, FL',
  },
];

export const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-[#0a0c10] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-[#7ce788] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#7ce788]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by over 170,000 patients and leading physicians
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-[#11141d] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-[#7ce788]/20 mb-6" />
          <p className="text-lg sm:text-2xl text-neutral-200 font-medium leading-relaxed mb-8">
            “{reviews[current].quote}”
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div>
              <div className="font-bold text-white text-base sm:text-lg">{reviews[current].name}</div>
              <div className="text-xs sm:text-sm text-neutral-400">
                {reviews[current].role} • {reviews[current].location}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
