import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white border-t-2 border-brand-red pt-16 sm:pt-20 pb-12 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xs overflow-hidden shrink-0">
                <img
                  src="/images/logo.jpeg"
                  alt="Mamourah Development & Construction Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-black text-lg tracking-[0.18em] text-white">
                  MAMOURAH
                </span>
                <span className="text-[9px] font-montserrat font-medium tracking-widest uppercase text-neutral-400">
                  Development &amp; Construction LLC SP
                </span>
              </div>
            </Link>

            <p className="text-xs font-montserrat font-bold text-brand-red uppercase tracking-wider mb-3">
              &ldquo;{companyData.tagline}&rdquo;
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
              {companyData.introduction}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span>ISO 9001 &bull; ISO 14001 &bull; ISO 45001 Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-montserrat font-bold tracking-architectural uppercase text-white mb-5 border-l-2 border-brand-red pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-montserrat">
              <li>
                <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-red transition-colors">About Mamourah</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-red transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-red transition-colors">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-brand-red transition-colors">Expertise &amp; Capabilities</Link>
              </li>
              <li>
                <Link to="/quality-hse" className="hover:text-brand-red transition-colors">Quality &amp; HSE</Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-brand-red transition-colors">Certifications &amp; Approvals</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Disciplines (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-montserrat font-bold tracking-architectural uppercase text-white mb-5 border-l-2 border-brand-red pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="hover:text-brand-red transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.title}</span>
                    <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-brand-red transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-montserrat font-bold tracking-architectural uppercase text-white mb-5 border-l-2 border-brand-red pl-2.5">
              Headquarters
            </h4>
            <address className="not-italic space-y-3.5 text-xs text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  {companyData.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-red shrink-0" />
                <a
                  href={companyData.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyData.website}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-500">
                {companyData.workingHours}
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal, Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-brand-red transition-colors">
              Inquiries
            </Link>
            <Link to="/certificates" className="hover:text-brand-red transition-colors">
              Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}