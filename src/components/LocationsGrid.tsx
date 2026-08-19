'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const clinicLocations = [
  { city: 'New York City', area: 'Midtown East & SoHo', state: 'NY' },
  { city: 'Los Angeles', area: 'Beverly Hills & Santa Monica', state: 'CA' },
  { city: 'San Francisco', area: 'Financial District & Palo Alto', state: 'CA' },
  { city: 'Chicago', area: 'Mag Mile & River North', state: 'IL' },
  { city: 'Dallas', area: 'Uptown & Preston Hollow', state: 'TX' },
  { city: 'Miami', area: 'Brickell & Coral Gables', state: 'FL' },
  { city: 'London', area: 'Harley Street District', state: 'UK' },
  { city: 'Toronto', area: 'Yorkville & Downtown', state: 'ON' },
  { city: 'Vancouver', area: 'Downtown Waterfront', state: 'BC' },
];

export const LocationsGrid = () => {
  return (
    <section id="locations" className="py-24 bg-[#08090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 text-[#7ce788] text-xs font-semibold mb-4 border border-[#10b981]/20">
            <MapPin className="w-3.5 h-3.5" />
            Clinic Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Convenient Locations Nationwide & Globally
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Experience our calming spa-like clinics equipped with cutting-edge MRI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicLocations.map((loc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-[#7ce788]/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#7ce788] transition-colors">
                  {loc.city}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-neutral-300">
                  {loc.state}
                </span>
              </div>
              <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#7ce788]" />
                {loc.area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
