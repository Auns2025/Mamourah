import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import MagneticButton from './MagneticButton';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

/**
 * EFFECT 06: Navigation underline sweep (brand-red animated line)
 * EFFECT 08: Sticky navbar transition (transparent on hero, solid light with restrained shadow on scroll)
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Handle scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isTransparent = isHomePage && !isScrolled;

  // Contact option navLinks list se remove kar diya gaya hai
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Quality & HSE', path: '/quality-hse' },
    { name: 'Certificates', path: '/certificates' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 text-white'
          : 'bg-white/95 backdrop-blur-md py-3 text-brand-black shadow-subtle border-b border-brand-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Architectural Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red shrink-0"
            aria-label="Mamourah Development & Construction - Return to Home"
          >
            {/* Architectural Geometric Monogram */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-red flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <span className="font-montserrat font-black text-xl sm:text-2xl text-white tracking-tighter">
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-montserrat font-black text-lg sm:text-xl tracking-[0.18em] transition-colors leading-none ${
                  isTransparent ? 'text-white' : 'text-brand-black'
                }`}
              >
                MAMOURAH
              </span>
              <span
                className={`text-[9px] sm:text-[10px] font-montserrat font-medium tracking-widest uppercase transition-colors mt-1 ${
                  isTransparent ? 'text-white/80' : 'text-brand-body'
                }`}
              >
                Development & Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Alignment Adjusted to lg:flex) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1" aria-label="Main Navigation">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-montserrat font-semibold tracking-wide uppercase transition-colors flex items-center gap-1 group ${
                          isActive
                            ? 'text-brand-red'
                            : isTransparent
                            ? 'text-white/90 hover:text-white'
                            : 'text-brand-black hover:text-brand-red'
                        }`
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {/* EFFECT 06: Underline sweep */}
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-80 bg-white border border-brand-border/80 shadow-elevated p-2 rounded-sm"
                        >
                          <div className="text-[10px] font-montserrat font-bold tracking-architectural uppercase text-brand-body px-3 py-1.5 border-b border-brand-border/40">
                            Core Disciplines
                          </div>
                          <div className="py-1">
                            {servicesData.map((svc) => (
                              <Link
                                key={svc.slug}
                                to={`/services/${svc.slug}`}
                                className="flex items-center justify-between px-3 py-2 text-xs font-montserrat font-medium text-brand-black hover:text-brand-red hover:bg-brand-ivory/60 transition-colors rounded-sm group"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold text-brand-red font-mono">
                                    {svc.number}
                                  </span>
                                  <span>{svc.title}</span>
                                </span>
                                <ArrowRight className="w-3 h-3 text-brand-concrete group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                              </Link>
                            ))}
                          </div>
                          <div className="pt-2 mt-1 border-t border-brand-border/40 px-3 pb-1">
                            <Link
                              to="/services"
                              className="text-[11px] font-montserrat font-bold text-brand-red hover:text-brand-deepRed flex items-center justify-between"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-montserrat font-semibold tracking-wide uppercase transition-colors group ${
                      isActive
                        ? 'text-brand-red'
                        : isTransparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-brand-black hover:text-brand-red'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {/* EFFECT 06: Underline sweep */}
                      <span
                        className={`absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2px] bg-brand-red transition-transform duration-300 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Contact Us Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <MagneticButton
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              Contact Us
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-brand-black hover:bg-brand-ivory'
            }`}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-brand-border text-brand-black shadow-elevated overflow-y-auto max-h-[85vh]"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              {navLinks.map((item) => (
                <div key={item.name} className="border-b border-brand-border/40 pb-2">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-sm font-montserrat font-bold uppercase tracking-wide py-1.5 transition-colors ${
                        isActive ? 'text-brand-red' : 'text-brand-black hover:text-brand-red'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  {/* Submenu for services in mobile view */}
                  {item.hasDropdown && (
                    <div className="pl-3 mt-1.5 space-y-1.5 border-l-2 border-brand-red/40 my-1">
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs font-montserrat text-brand-body hover:text-brand-red py-1"
                        >
                          {svc.number} — {svc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Quick Contact Information */}
              <div className="pt-4 space-y-2 text-xs text-brand-body font-poppins">
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="flex items-center gap-2 text-brand-black hover:text-brand-red font-medium"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>{companyData.phone}</span>
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2 text-brand-black hover:text-brand-red font-medium"
                >
                  <Mail className="w-4 h-4 text-brand-red" />
                  <span>{companyData.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span>{companyData.location}</span>
                </div>
              </div>

              <div className="pt-3">
                <MagneticButton
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon={ArrowRight}
                >
                  Start a Conversation
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}