import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterested: '',
    message: '',
    honeypot: '' // Spam prevention
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus.error) {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.serviceInterested || !formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please complete all required fields marked with an asterisk (*).'
      });
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Bot honeypot check
    if (formData.honeypot) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: '' });

    // Simulate smooth processing and present confirmed inquiry state
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: `Thank you, ${formData.fullName}. Your inquiry for ${formData.serviceInterested} has been recorded.`
      });
    }, 400);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceInterested: '',
      message: '',
      honeypot: ''
    });
    setFormStatus({ loading: false, success: false, error: false, message: '' });
  };

  // Generate mailto link with pre-filled content
  const mailtoLink = submittedData
    ? `mailto:${companyData.email}?subject=${encodeURIComponent(
        `Inquiry: ${submittedData.fullName} - ${submittedData.serviceInterested}`
      )}&body=${encodeURIComponent(
        `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nService: ${submittedData.serviceInterested}\n\nProject Scope:\n${submittedData.message}`
      )}`
    : `mailto:${companyData.email}`;

  // Generate WhatsApp inquiry link
  const whatsappLink = submittedData
    ? `https://wa.me/971528055100?text=${encodeURIComponent(
        `Hello Mamourah Development & Construction,\nMy name is ${submittedData.fullName}.\nService: ${submittedData.serviceInterested}\nPhone: ${submittedData.phone}\nDetails: ${submittedData.message}`
      )}`
    : `https://wa.me/971528055100?text=${encodeURIComponent(
        'Hello Mamourah Development & Construction, I would like to inquire regarding construction and engineering services in the UAE.'
      )}`;

  return (
    <>
      <SEO
        title="Contact Us | Start a Conversation"
        description="Contact Mamourah Development & Construction in Khorfakkan, UAE. Direct phone +971 52 805 5100, email info@mamourah.ae, and corporate inquiry desk."
        canonical="https://www.mamourah.ae/contact"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg"
            alt="Mamourah Corporate Headquarters & Consultation"
            className="w-full h-full object-cover filter brightness-[0.32]"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-montserrat font-bold tracking-architectural uppercase mb-4">
              START A CONVERSATION
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tight leading-[1.1]">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-poppins font-light leading-relaxed">
              Connect directly with our engineering and project management leaders in Khorfakkan to discuss tenders, project developments or civil works across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left 5 cols: Corporate Contact Details & Map Card */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeader
                  badge="DIRECT CHANNELS"
                  title="HEADQUARTERS &amp; INQUIRIES"
                  subtitle="Dedicated engineering desk in Khorfakkan, UAE"
                  className="mb-8"
                />

                <div className="space-y-6 text-sm font-poppins">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-5 bg-brand-ivory border border-brand-border">
                    <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center rounded-xs shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-body">
                        Direct Telephone
                      </div>
                      <a
                        href={`tel:${companyData.phoneRaw}`}
                        className="text-base font-montserrat font-bold text-brand-black hover:text-brand-red transition-colors block mt-1"
                      >
                        {companyData.phone}
                      </a>
                      <div className="text-[11px] text-brand-body mt-0.5">
                        Central Operations &amp; Inquiries
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-5 bg-brand-ivory border border-brand-border">
                    <div className="w-10 h-10 bg-brand-black text-white flex items-center justify-center rounded-xs shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-body">
                        Corporate Email
                      </div>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-base font-montserrat font-bold text-brand-black hover:text-brand-red transition-colors block mt-1"
                      >
                        {companyData.email}
                      </a>
                      <div className="text-[11px] text-brand-body mt-0.5">
                        Tenders, Drawings &amp; Proposals
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-5 bg-brand-ivory border border-brand-border">
                    <div className="w-10 h-10 bg-brand-black text-white flex items-center justify-center rounded-xs shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-body">
                        Registered Office
                      </div>
                      <div className="text-sm font-montserrat font-bold text-brand-black mt-1">
                        {companyData.location}
                      </div>
                      <div className="text-xs text-brand-body mt-0.5 leading-relaxed">
                        {companyData.address}
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-5 bg-brand-ivory border border-brand-border">
                    <div className="w-10 h-10 bg-brand-black text-white flex items-center justify-center rounded-xs shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-brand-body">
                        Working Hours
                      </div>
                      <div className="text-xs font-montserrat font-semibold text-brand-black mt-1">
                        {companyData.workingHours}
                      </div>
                      <div className="text-[11px] text-brand-body mt-0.5">
                        Friday &amp; Saturday: Technical Field Roster Only
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Compliance Box */}
              <div className="p-6 bg-brand-black text-white border-l-4 border-brand-red">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold tracking-architectural uppercase text-neutral-300 mb-2">
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                  <span>COMMERCIAL LICENSURE</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-poppins">
                  Mamourah Development &amp; Construction L.L.C SP is officially registered with the Sharjah Economic Development Department and Kalba/Khorfakkan Municipalities.
                </p>
              </div>

            </div>

            {/* Right 7 cols: Interactive Static Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-surface border border-brand-border p-8 sm:p-10 shadow-card">
                
                {formStatus.success && submittedData ? (
                  /* Confirmed State with Direct Transmission Buttons */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="p-6 bg-emerald-50 border border-emerald-300 text-emerald-950 rounded-xs">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                        <h3 className="text-lg font-montserrat font-bold uppercase">
                          Inquiry Prepared Successfully
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-poppins leading-relaxed">
                        {formStatus.message} You can now transmit it directly to our engineering desk via Email or WhatsApp for instant priority attention.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-6 bg-white border border-brand-border space-y-3 text-xs font-poppins">
                      <div className="font-montserrat font-bold uppercase tracking-wider text-brand-black border-b border-brand-border pb-2">
                        Inquiry Details
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-brand-body">
                        <div><strong className="text-brand-black">Name:</strong> {submittedData.fullName}</div>
                        <div><strong className="text-brand-black">Phone:</strong> {submittedData.phone}</div>
                        <div><strong className="text-brand-black">Email:</strong> {submittedData.email}</div>
                        <div><strong className="text-brand-black">Service:</strong> {submittedData.serviceInterested}</div>
                      </div>
                      <div className="border-t border-brand-border/60 pt-2 text-brand-body">
                        <strong className="text-brand-black block mb-1">Scope:</strong>
                        <p className="italic text-xs bg-brand-ivory p-3 border border-brand-border/60">
                          &ldquo;{submittedData.message}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <a
                        href={mailtoLink}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-brand-deepRed transition-colors shadow-subtle text-center"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email</span>
                      </a>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-subtle text-center"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Open in WhatsApp</span>
                      </a>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 text-xs font-montserrat font-semibold text-brand-body hover:text-brand-red transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Inquiry</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Standard Form State */
                  <>
                    <h2 className="text-2xl font-montserrat font-bold uppercase text-brand-black mb-2">
                      Submit an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-body font-poppins mb-8">
                      Fill out the form below. Our engineering and project estimation team will review your specifications and respond promptly.
                    </p>

                    {formStatus.error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-900 rounded-xs flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                        <div className="text-xs font-poppins leading-relaxed">
                          <strong className="block font-semibold">Notice</strong>
                          {formStatus.message}
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      
                      {/* Spam prevention honeypot */}
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        tabIndex="-1"
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />

                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-2"
                        >
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Eng. Mohammed Al Blooshi"
                          required
                          className="w-full px-4 py-3 bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-poppins text-brand-black outline-none transition-colors"
                        />
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-2"
                          >
                            Email Address <span className="text-brand-red">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. name@company.ae"
                            required
                            className="w-full px-4 py-3 bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-poppins text-brand-black outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-2"
                          >
                            Phone Number <span className="text-brand-red">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +971 50 123 4567"
                            required
                            className="w-full px-4 py-3 bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-poppins text-brand-black outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label
                          htmlFor="serviceInterested"
                          className="block text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-2"
                        >
                          Service of Interest <span className="text-brand-red">*</span>
                        </label>
                        <select
                          id="serviceInterested"
                          name="serviceInterested"
                          value={formData.serviceInterested}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-poppins text-brand-black outline-none transition-colors"
                        >
                          <option value="">Select a discipline...</option>
                          {servicesData.map((svc) => (
                            <option key={svc.slug} value={svc.title}>
                              {svc.number} &mdash; {svc.title}
                            </option>
                          ))}
                          <option value="Tender / RFP Inquiry">Tender / RFP Inquiry</option>
                          <option value="General Engineering Consultation">General Engineering Consultation</option>
                        </select>
                      </div>

                      {/* Message Details */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-montserrat font-bold uppercase tracking-wider text-brand-black mb-2"
                        >
                          Project Description or Inquiry <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please outline the project location, estimated scope, timeline, and any statutory approval requirements..."
                          required
                          className="w-full px-4 py-3 bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-poppins text-brand-black outline-none transition-colors resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <MagneticButton
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full"
                          disabled={formStatus.loading}
                          icon={Send}
                        >
                          {formStatus.loading ? 'Recording...' : 'Submit Inquiry'}
                        </MagneticButton>
                      </div>

                      <p className="text-[11px] text-brand-body text-center font-poppins">
                        Direct communication channel &bull; Mamourah Development &amp; Construction L.L.C SP
                      </p>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Relevant Architectural Image Strip */}
      <section className="relative h-64 sm:h-80 overflow-hidden bg-brand-black">
        <img
          src="/images/hero-3.jpg"
          alt="Mamourah Khorfakkan and Sharjah Engineering Architecture"
          loading="lazy"
          className="w-full h-full object-cover filter brightness-[0.45]"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center max-w-xl text-white">
            <span className="text-xs font-montserrat font-bold tracking-architectural uppercase text-brand-red">
              KHORFAKKAN &bull; SHARJAH &bull; UNITED ARAB EMIRATES
            </span>
            <h3 className="text-xl sm:text-2xl font-montserrat font-bold uppercase mt-2">
              TODAY, WE BUILT THE FUTURE
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
