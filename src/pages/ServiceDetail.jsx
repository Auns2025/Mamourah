import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers, ArrowLeft, Phone, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import MagneticButton from '../components/MagneticButton';
import FinalCta from '../components/FinalCta';
import ClipRevealImage from '../components/ClipRevealImage';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} | Services`}
        description={service.shortDesc}
        canonical={`https://www.mamourah.ae/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-neutral-400 hover:text-white uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Services</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-mono font-bold uppercase mb-4">
              DISCIPLINE {service.number}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 font-poppins leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 8 cols: Detailed Description & Capabilities */}
            <div className="lg:col-span-8">
              <SectionHeader
                badge={`DISCIPLINE ${service.number}`}
                title={service.title}
                subtitle={service.shortDesc}
              />

              <div className="prose prose-neutral max-w-none text-sm sm:text-base text-brand-body leading-relaxed mb-10 font-poppins">
                <p>{service.fullDesc}</p>
              </div>

              {/* Service Hero Image Display */}
              <div className="mb-12">
                <ClipRevealImage
                  src={service.image}
                  alt={service.title}
                  aspectRatio="aspect-[16/10]"
                  className="shadow-elevated"
                />
              </div>

              {/* Capabilities List */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold uppercase text-brand-black mb-6 border-b border-brand-border pb-3">
                  Scope &amp; Core Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-brand-ivory border border-brand-border flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-poppins text-brand-black leading-relaxed">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Connection Section */}
              <div className="p-8 bg-brand-black text-white border-l-4 border-brand-red mb-12">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  <Layers className="w-4 h-4 text-brand-red" />
                  <span>PROCESS INTEGRATION</span>
                </div>
                <h4 className="text-lg font-montserrat font-bold text-white mb-3">
                  How This Service Connects to Turnkey Execution
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-poppins leading-relaxed">
                  {service.processConnection}
                </p>
              </div>

              {/* Contact Trigger */}
              <div className="p-8 bg-brand-ivory border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-base sm:text-lg font-montserrat font-bold text-brand-black">
                    Inquire About {service.title}
                  </h4>
                  <p className="text-xs text-brand-body font-poppins mt-1">
                    Connect directly with our engineering desk for scopes, estimates or consultations.
                  </p>
                </div>
                <MagneticButton
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                >
                  Request Consultation
                </MagneticButton>
              </div>

            </div>

            {/* Right 4 cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Key Specifications Card */}
              <div className="p-6 bg-brand-ivory border border-brand-border">
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-architectural text-brand-black mb-4 border-b border-brand-border pb-2">
                  Discipline Highlights
                </h4>

                <dl className="space-y-4 text-xs font-poppins">
                  {service.keyPoints.map((kp, idx) => (
                    <div key={idx} className="border-b border-brand-border/60 pb-3 last:border-b-0">
                      <dt className="text-brand-body font-semibold">{kp.label}</dt>
                      <dd className="font-montserrat font-bold text-brand-black mt-0.5">
                        {kp.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Direct Office Contacts */}
              <div className="p-6 bg-white border border-brand-border shadow-subtle">
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-architectural text-brand-black mb-4 border-b border-brand-border pb-2">
                  Engineering Desk
                </h4>
                <div className="space-y-3 text-xs font-poppins">
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="flex items-center gap-2.5 text-brand-black hover:text-brand-red font-medium"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    <span>{companyData.phone}</span>
                  </a>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-2.5 text-brand-black hover:text-brand-red font-medium"
                  >
                    <Mail className="w-4 h-4 text-brand-red" />
                    <span>{companyData.email}</span>
                  </a>
                </div>
              </div>

              {/* All Services Navigation Links */}
              <div className="p-6 bg-brand-ivory border border-brand-border">
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-architectural text-brand-black mb-4 border-b border-brand-border pb-2">
                  All Disciplines
                </h4>
                <ul className="space-y-2 text-xs font-montserrat font-semibold">
                  {servicesData.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className={`block py-1.5 transition-colors ${
                          s.slug === service.slug
                            ? 'text-brand-red font-bold pl-2 border-l-2 border-brand-red'
                            : 'text-brand-body hover:text-brand-black'
                        }`}
                      >
                        {s.number} &mdash; {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Services Carousel/Grid */}
      <section className="py-20 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="EXPLORE FURTHER"
            title="COMPLEMENTARY DISCIPLINES"
            subtitle="Integrated engineering services delivered concurrently"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedServices.map((rel, idx) => (
              <ServiceCard key={rel.id} service={rel} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
