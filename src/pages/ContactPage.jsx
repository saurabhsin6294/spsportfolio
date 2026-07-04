import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const faqs = [
    {
      q: "What is your typical response time?",
      a: "I generally respond to all professional emails and form submissions within 24 to 48 hours."
    },
    {
      q: "Are you open to remote work or relocation?",
      a: "Yes, I am fully open to remote full-time positions. For relocation, I am open to major tech hubs in India (like Noida, Bangalore, Pune) depending on the opportunity details."
    },
    {
      q: "What is your primary technology stack?",
      a: "My core expertise lies in PHP (Laravel framework) and JavaScript (React.js framework) along with MySQL databases and modern layout systems like Tailwind CSS."
    },
    {
      q: "Are you available for freelance projects?",
      a: "Yes, I take on select freelance contract projects depending on my current availability. Feel free to details your project in the contact form!"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Form validation
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

    const permissionCheckbox = form.querySelector('#permission');
    if (permissionCheckbox && !permissionCheckbox.checked) {
      setErrorMsg("Please check the permission box to contact you.");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Call serverless function
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
        setErrorMsg(data.error || "Failed to send message. Please try again.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again later.");
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4500);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4"
          >
            CONTACT <span className="text-[#ff2a2a]">ME.</span>
          </motion.h1>
          <p className="text-white/60 text-base md:text-lg font-medium max-w-2xl">
            Have an opportunity, a project request, or just want to say hi? Fill out the form or reach out through direct links.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Left Column: Form (Span 3) */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Send a Message</h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-white/50 uppercase tracking-widest">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Saurabh"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-base focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-white/20 font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-white/50 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Pratap Singh"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-base focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-white/20 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-white/50 uppercase tracking-widest">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="saurabhsin6294@gmail.com"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-base focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-white/20 font-medium"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-white/50 uppercase tracking-widest">Your Message *</label>
                <textarea 
                  id="message" 
                  placeholder="Hello, I'd like to collaborate with you on..." 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-base focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-white/20 font-medium resize-none"
                ></textarea>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded-sm border-white/20 bg-transparent text-[#ff2a2a] focus:ring-[#ff2a2a] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "#ff2a2a" }}
                />
                <label htmlFor="permission" className="text-xs text-white/60 cursor-pointer select-none leading-snug">
                  I give permission to contact me at this email address regarding my message.
                </label>
              </div>

              {/* Inline custom alert box */}
              {status === 'error' && errorMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/40 border border-white/10 text-red-200 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md flex items-center gap-2.5 w-full"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
                  {errorMsg}
                </motion.div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-full border border-white/25 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group ${
                  status === 'sending' 
                    ? 'opacity-50 cursor-not-allowed bg-white/5' 
                    : status === 'success'
                    ? 'bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]'
                    : 'hover:bg-white hover:text-black cursor-pointer'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </span>
                ) : status === 'success' ? (
                  <span>✓ Sent Successfully!</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Cards (Span 2) */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-between">
            {/* Quick Details Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/20 transition-all duration-300 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Direct Channels</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Skip the form and email me directly or send a message on social platforms.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Primary Email</span>
                    <a href={`mailto:${personalInfo.emails.primary}`} className="text-white hover:text-[#ff2a2a] text-base font-bold transition-colors">
                      {personalInfo.emails.primary}
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Call / WhatsApp</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[#ff2a2a] text-base font-bold transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-4 pt-6 border-t border-white/10 mt-6">
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-white/5 hover:bg-[#ff2a2a] border border-white/10 rounded-xl text-xs font-bold transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-white/5 hover:bg-[#ff2a2a] border border-white/10 rounded-xl text-xs font-bold transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/20 transition-all duration-300 shadow-xl relative overflow-hidden group min-h-[180px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight z-10 relative">Location</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 z-10 relative">
                Gorakhpur, Uttar Pradesh, India <br />
                Available worldwide for remote contract arrangements.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono font-bold z-10 relative">
                <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse"></span>
                GMT +5:30 Time Zone
              </div>
            </div>

          </div>
          
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/20 transition-all duration-300"
              >
                <h3 className="text-white text-lg font-bold mb-3 flex gap-2">
                  <span className="text-[#ff2a2a]">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
