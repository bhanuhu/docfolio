'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Globe, Shield, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const countries = [
    { code: 'US', label: 'United States', flag: '🇺🇸' },
    { code: 'CA', label: 'Canada', flag: '🇨🇦' },
    { code: 'UK', label: 'United Kingdom', flag: '🇬🇧' },
    { code: 'AU', label: 'Australia', flag: '🇦🇺' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#10b981] to-[#7ce788] flex items-center justify-center shadow-lg shadow-[#10b981]/25 group-hover:scale-105 transition-transform">
            <Shield className="w-4 h-4 text-black stroke-[2.5]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#7ce788] transition-colors">
            docfolio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {/* Memberships Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('memberships')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors py-2">
              Memberships <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            {activeDropdown === 'memberships' && (
              <div className="absolute top-full left-0 w-64 bg-[#12151c] border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="#pricing"
                  className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="font-semibold text-white text-sm">Executive Membership</div>
                  <div className="text-xs text-neutral-400">Whole Body + Brain + 80+ Labs</div>
                </Link>
                <Link
                  href="#pricing"
                  className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="font-semibold text-white text-sm">Comprehensive Membership</div>
                  <div className="text-xs text-neutral-400">Whole Body MRI + Core Lab Panels</div>
                </Link>
                <Link
                  href="#pricing"
                  className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="font-semibold text-white text-sm">Core Membership</div>
                  <div className="text-xs text-neutral-400">Targeted organ scan & baseline</div>
                </Link>
              </div>
            )}
          </div>

          <Link href="#scan" className="hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#biomarkers" className="hover:text-white transition-colors">
            Biomarkers
          </Link>
          <Link href="#science" className="hover:text-white transition-colors">
            Clinical Science
          </Link>
          <Link href="#locations" className="hover:text-white transition-colors">
            Locations
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        {/* Right CTA Area */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Country Selector */}
          <div className="relative">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 transition-colors"
            >
              <span>{countries.find((c) => c.code === selectedCountry)?.flag}</span>
              <span>{selectedCountry}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {countryDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-40 bg-[#12151c] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-2xl">
                {countries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setSelectedCountry(c.code);
                      setCountryDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-white/10 text-neutral-200 text-left"
                  >
                    <span>{c.flag}</span>
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#pricing"
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors px-3 py-2"
          >
            Sign In
          </Link>

          <Link
            href="#pricing"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7ce788] via-[#2fd3b4] to-[#10b981] rounded-full transition-all duration-300 group-hover:scale-105" />
            <span className="relative flex items-center gap-2 px-5 py-2 text-xs font-bold text-black bg-[#7ce788] rounded-full group-hover:bg-opacity-95 transition-all">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              Book Now
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            Memberships & Pricing
          </Link>
          <Link
            href="#scan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            How It Works
          </Link>
          <Link
            href="#biomarkers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            80+ Biomarkers
          </Link>
          <Link
            href="#science"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            Clinical Science
          </Link>
          <Link
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            Clinic Locations
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-[#7ce788]"
          >
            FAQ
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#7ce788] text-black font-bold text-sm shadow-lg shadow-[#7ce788]/20"
            >
              Book a Scan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
