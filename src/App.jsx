import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Expertise from './pages/Expertise';
import QualityHse from './pages/QualityHse';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
          {/* <Route path="/expertise" element={<Expertise />} /> */}
          {/* <Route path="/quality-hse" element={<QualityHse />} /> */}
          {/* <Route path="/certificates" element={<Certificates />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
