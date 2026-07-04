import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Core Sections for Homepage
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import Certificates from './components/Certificates';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';

// Dedicated Standalone Pages
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

// Scroll reset helper
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Internships />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
