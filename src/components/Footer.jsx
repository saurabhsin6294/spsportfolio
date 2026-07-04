import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#d4d4d4] pt-20 pb-12 px-6 md:px-12 w-full border-t border-white/5 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[40vh]">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 w-full pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-black tracking-tight uppercase">
              {personalInfo.firstName}<span className="text-[#ff2a2a]">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              Full Stack Web Developer crafting high-performance, secure, and production-grade applications.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold font-mono uppercase text-white/70 tracking-wider">Available for Opportunities</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2.5 text-sm font-semibold">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">Home</a>
              <a href="#about" className="text-white/60 hover:text-white transition-colors duration-200">About Me</a>
              <a href="#skills" className="text-white/60 hover:text-white transition-colors duration-200">My Skills</a>
              <a href="#projects" className="text-white/60 hover:text-white transition-colors duration-200">Featured Projects</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-200">Get In Touch</a>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Social Handles</h4>
            <div className="flex flex-col gap-2.5 text-sm font-semibold">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white flex items-center gap-2 transition-colors duration-200"
              >
                GitHub
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white flex items-center gap-2 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white flex items-center gap-2 transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Contact Details</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a 
                href={`mailto:${personalInfo.emails.primary}`} 
                className="text-white/80 hover:text-[#ff2a2a] font-bold transition-colors duration-200 break-all"
              >
                {personalInfo.emails.primary}
              </a>
              <p className="text-white/60 leading-relaxed">
                {personalInfo.phone} <br />
                Gorakhpur, UP, India
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 text-xs font-mono tracking-wider font-semibold text-white/40">
          <div>
            {footerContent.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors uppercase">Back to top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
