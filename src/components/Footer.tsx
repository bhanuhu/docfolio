'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#060709] border-t border-white/10 text-neutral-400 text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#10b981] to-[#7ce788] flex items-center justify-center shadow-lg shadow-[#10b981]/25">
                <Shield className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">docfolio</span>
            </Link>
            <p className="text-neutral-400 max-w-sm text-xs sm:text-sm leading-relaxed">
              Proactive health memberships combining Whole Body MRI, advanced blood biomarker testing, and ongoing clinical guidance.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-white block mb-2">Subscribe to clinical insights:</span>
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#7ce788]"
                />
                <button className="p-2.5 rounded-xl bg-[#7ce788] text-black font-bold hover:bg-[#6edc7a] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Memberships</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link href="#pricing" className="hover:text-white transition-colors">Executive</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Comprehensive</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Core</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Technology</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link href="#scan" className="hover:text-white transition-colors">Whole Body MRI</Link></li>
              <li><Link href="#biomarkers" className="hover:text-white transition-colors">80+ Biomarkers</Link></li>
              <li><Link href="#scan" className="hover:text-white transition-colors">AI Organ Quantification</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Safety & Protocols</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link href="#locations" className="hover:text-white transition-colors">Clinic Locations</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">For Physicians</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Docfolio Inc. All rights reserved. Docfolio is a health protocol platform.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
