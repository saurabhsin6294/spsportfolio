import React from 'react';
import { motion } from 'framer-motion';
import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10, scale: 1.03 }}
    className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-red-500/30 hover:bg-black/50 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden shadow-2xl min-h-[450px]"
  >
    {/* Red neon side accent line revealed on hover */}
    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-red-600 scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500" />
    
    {/* Subtle backdrop glow */}
    <div className="absolute -inset-10 bg-radial-gradient from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
          {intern.role.includes("QA") ? "QA Engineering" : "Development"}
        </span>
      </div>
      <h3 className="text-white text-2xl font-black mb-1 tracking-tight group-hover:text-red-400 transition-colors duration-300">
        {intern.role}
      </h3>
      <p className="text-red-200 text-sm font-black tracking-wide mb-6 uppercase">
        {intern.organization}
      </p>

      {/* Key Accomplishments */}
      <div className="mb-6">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Key Accomplishments:</h4>
        <ul className="text-white/90 text-sm font-medium space-y-1.5 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i} className="hover:text-white transition-colors duration-200">{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-white/10 relative z-10">
      <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/5 rounded-full border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 hover:text-red-300 transition-all duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Internships = () => {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            My professional career path as a Full Stack Developer and QA Engineer building production-grade products.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={index} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
