import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const AboutPage = () => {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Mastered", value: "8+" },
    { label: "Hours of Coding", value: "2,000+" },
    { label: "Academic CGPA (BCA)", value: "70%" }
  ];

  const values = [
    {
      title: "Clean Code Architect",
      desc: "Writing maintainable, self-documenting, and standardized PHP and JavaScript code following industry production-grade patterns.",
      icon: "💻"
    },
    {
      title: "Performance Optimization",
      desc: "Optimizing database queries in Laravel/MySQL and refining React component rendering for maximum web performance.",
      icon: "⚡"
    },
    {
      title: "Security & Testing Standards",
      desc: "Implementing secure authentication systems, authorization layers, and thorough QA validations to prevent vulnerabilities.",
      icon: "🛡️"
    },
    {
      title: "Scalability First",
      desc: "Designing databases and backend architectures that handle concurrency and scale effortlessly under load.",
      icon: "🚀"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Graduation (BCA)",
      institution: "SRMCEM, Lucknow",
      desc: "Acquired deep theoretical foundations in Data Structures, Object-Oriented Programming (OOPs), and Relational Databases (RDBMS)."
    },
    {
      year: "2024",
      title: "Full Stack Development Focus",
      institution: "Self-driven & Industry projects",
      desc: "Began building real-world enterprise applications like the CRM Platform, Billing System, and Exam Portals, mastering Laravel and React."
    },
    {
      year: "2021 - 2022",
      title: "Intermediate (PCM)",
      institution: "Kendriya Vidyalaya GKP",
      desc: "Focused on core analytical subjects: Physics, Chemistry, and Mathematics (PCM), building strong logic and problem-solving skills."
    },
    {
      year: "2019 - 2020",
      title: "High School Certification",
      institution: "Kendriya Vidyalaya GKP",
      desc: "Completed secondary education with a stellar score of 90.4%, initializing interest in computational logic and technology."
    }
  ];

  const hobbies = [
    { name: "Coding Challenges", desc: "Solving algorithmic problems and learning new tech." },
    { name: "UI/UX Experimentation", desc: "Crafting micro-interactions and smooth layouts." },
    { name: "Tech Blogs", desc: "Keeping up with system design and server architectures." }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-red-800/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8"
          >
            ABOUT <span className="text-[#ff2a2a]">ME.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Biography */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-medium"
            >
              <p>
                Hello! I am <strong className="text-white">Saurabh Pratap Singh</strong>, a highly focused and passionate Full Stack Developer. I specialize in designing and engineering high-performance web applications using modern stacks like **Laravel (PHP)** and **React.js**.
              </p>
              <p>
                My professional philosophy revolves around writing clean, modular, and performant code. I enjoy taking complex problems and solving them through architectural clarity and user-centric frontend experiences.
              </p>
              <p>
                With a solid background in Computer Applications (BCA) and hands-on experience in building systems like custom **CRMs, Visitor Management Systems (VMS), and E-Commerce platforms**, I bring both backend engineering rigor and frontend aesthetic detail to projects.
              </p>
            </motion.div>

            {/* Avatar / Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative group w-64 h-64">
                <div className="absolute inset-0 bg-[#ff2a2a] rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20" />
                <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-3xl relative z-10 overflow-hidden shadow-2xl flex justify-center items-center">
                  <img 
                    src="/src/assets/about/saurabh-avatar.png" 
                    alt="Saurabh Pratap Singh" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-red-500/30 transition-colors duration-300"
            >
              <h4 className="text-[#ff2a2a] text-4xl md:text-5xl font-black mb-2">{stat.value}</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Work Philosophy / Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Core Work Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/20 transition-all duration-300 flex gap-5 items-start group hover:bg-white/[0.07]"
              >
                <div className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/20 transition-colors duration-300">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Journey Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Educational Timeline</h2>
          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#ff2a2a] rounded-full border-4 border-black shadow-[0_0_10px_#ff2a2a]" />
                
                <span className="text-[#ff2a2a] text-xs font-bold font-mono uppercase tracking-widest">{item.year}</span>
                <h3 className="text-white text-xl font-bold mt-1 mb-0.5">{item.title}</h3>
                <p className="text-white/40 text-xs font-semibold mb-3 uppercase tracking-wider">{item.institution}</p>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies / Interests */}
        <div>
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hob, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/20 transition-all duration-300"
              >
                <h4 className="text-[#ff2a2a] text-lg font-bold mb-2">{hob.name}</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{hob.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;
