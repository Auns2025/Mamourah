import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be located on Mamourah Development & Construction website."
      />

      <section className="min-h-[80vh] flex items-center justify-center pt-36 pb-20 bg-brand-surface">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="text-7xl sm:text-9xl font-montserrat font-black text-brand-red opacity-80 mb-2">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-montserrat font-black uppercase text-brand-black mb-4">
            PAGE NOT LOCATED
          </h1>
          <p className="text-sm sm:text-base text-brand-body font-poppins leading-relaxed mb-8">
            The page or architectural resource you requested may have moved or is unavailable. Please return to the homepage or explore our verified portfolio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton to="/" variant="primary" size="md" icon={Home}>
              Return to Home
            </MagneticButton>
            <MagneticButton to="/projects" variant="outline" size="md">
              View Project Portfolio
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
