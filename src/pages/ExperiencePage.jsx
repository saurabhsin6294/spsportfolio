import React from 'react';
import { motion } from 'framer-motion';
import { internshipsList } from '../data/portfolioData';

const ExperiencePage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-red-800/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Page Title */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4"
          >
            EXPERIENCE<span className="text-[#ff2a2a]">.</span>
          </motion.h1>
          <p className="text-white/60 text-base md:text-lg font-medium max-w-2xl">
            A comprehensive overview of my professional timeline, responsibilities, projects delivered, and technology integration.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-16">
          {internshipsList.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-red-500/20 transition-all duration-300 shadow-2xl relative group overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8 pb-8 border-b border-white/10">
                <div>
                  <span className="text-[#ff2a2a] text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                    {job.duration}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {job.role}
                  </h2>
                  <h3 className="text-white/80 text-lg font-bold uppercase tracking-wide">
                    {job.organization}
                  </h3>
                </div>
                
                <span className="self-start px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#ff2a2a]/20 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                  {job.role.includes("QA") ? "Quality Assurance" : "Software Engineering"}
                </span>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1 & 2: Key Achievements */}
                <div className="md:col-span-2 space-y-6">
                  <h4 className="text-white text-sm font-black uppercase tracking-wider">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-4">
                    {job.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex gap-3 text-white/80 text-sm md:text-base font-medium leading-relaxed">
                        <span className="text-[#ff2a2a] font-black text-lg select-none">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Technologies Used */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-wider mb-4">Core Stack & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-3.5 py-1.5 text-xs font-mono font-bold text-white bg-white/5 rounded-full border border-white/10 hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/50 hover:text-red-300 transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">Focus Areas</h4>
                    <p className="text-white/50 text-xs font-medium leading-relaxed">
                      {job.role.includes("Lead") 
                        ? "Engineering management, clean code review standards, release validation pipeline setups." 
                        : "Feature implementation, database query optimization, UI component testing and integrations."}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default ExperiencePage;
