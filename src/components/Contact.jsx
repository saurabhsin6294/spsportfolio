import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return; // Prevent duplicate submissions

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // 1. Client-Side Validation Checks
    if (!firstName.trim()) {
      setErrorMsg("First Name is required.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    if (!email.trim()) {
      setErrorMsg("Email Address is required.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg("Message must be at least 10 characters long.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Permission checkbox validation
    const permissionCheckbox = form.querySelector('#permission');
    if (permissionCheckbox && !permissionCheckbox.checked) {
      setErrorMsg("Please check the box giving permission to contact you.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // 2. Fetch POST call to secure SMTP function
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          user_email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setErrorMsg('');
        formRef.current.reset();
      } else {
        console.error('SMTP Error:', data.error);
        setErrorMsg(data.error || "Failed to send message. Try again.");
        setStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setErrorMsg("Network error. Please try again.");
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
              Reach Me
            </div>
            {/* Instagram Quick Link */}
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white hover:text-red-600 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              DM on Instagram
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                
                <div className="flex flex-col gap-4 w-full">
                  {status === 'error' && errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-black/30 border border-white/20 text-red-200 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md flex items-center gap-2.5 w-full"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
                      {errorMsg}
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <p className="max-w-[250px] leading-relaxed">
                      For urgent inquiries, reach me at <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white transition-colors">{personalInfo.emails.primary}</a>
                    </p>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto ${
                      status === 'sending' 
                        ? 'opacity-50 cursor-not-allowed bg-white/10' 
                        : status === 'success'
                        ? 'bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]'
                        : status === 'error'
                        ? 'bg-red-800 border-red-700 text-white'
                        : 'hover:bg-white hover:text-[#ff2a2a]'
                    }`}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2">
                        Sent Successfully ✓
                      </span>
                    ) : status === 'error' ? (
                      <span className="flex items-center gap-2">
                        Failed — Try Again
                      </span>
                    ) : 'Send Message'}
                    
                    {status === 'idle' && (
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        </div>
      </div>

      {/* Floating Custom Toast Popup */}
      <AnimatePresence>
        {status === 'error' && errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 left-8 md:left-auto md:w-96 z-[99999] bg-black/95 backdrop-blur-md border border-red-500/30 text-white px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(255,42,42,0.25)] flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-lg shrink-0">
              ⚠️
            </div>
            <div>
              <h4 className="font-black text-sm text-red-400 uppercase tracking-wider">Validation Error</h4>
              <p className="text-xs text-white/80 mt-0.5 font-medium">{errorMsg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
