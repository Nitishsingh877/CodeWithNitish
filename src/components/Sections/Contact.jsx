import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { contactAPI } from '../../services/api';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', error: '' });
    try {
      await contactAPI.submit(formData);
      setStatus({ state: 'success', error: '' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', error: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">EPISODE 05</span>
            <span className="text-white/40">|</span>
            <span>FINAL FRAME</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            READY TO BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              THE NEXT SYSTEM.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-white/70 font-light leading-relaxed max-w-md">
              I&apos;m a Java Full Stack Developer specializing in microservices, cloud-native systems, and AI automation.
              <br />
              <br />
              Whether it&apos;s enterprise software, backend architecture, developer productivity tools, or Agentic AI
              solutions, I&apos;m always excited to discuss new ideas and opportunities.
            </p>

            {/* Availability status */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-white/80">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88', boxShadow: '0 0 10px #00ff88' }} />
                Available For
              </div>
              <div className="flex flex-wrap gap-2">
                {['Enterprise Development', 'AI Automation', 'Consulting', 'Collaboration'].map((item) => (
                  <span key={item} className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-white/80 hover:text-red-500 transition-colors group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141414] border border-white/10 group-hover:border-red-600/60">
                  <FaEnvelope className="text-red-500" />
                </span>
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-red-500 transition-colors group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141414] border border-white/10 group-hover:border-red-600/60">
                  <FaLinkedin className="text-red-500" />
                </span>
                LinkedIn Profile
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-red-500 transition-colors group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141414] border border-white/10 group-hover:border-red-600/60">
                  <FaGithub className="text-red-500" />
                </span>
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#141414]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-base uppercase tracking-wide focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-base uppercase tracking-wide focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 text-white"
              />
              <textarea
                name="message"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-base focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 text-white resize-none"
              />

              <button
                type="submit"
                disabled={status.state === 'submitting'}
                className="mt-2 px-8 py-3.5 rounded bg-red-600 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
              >
                {status.state === 'submitting' ? 'Sending...' : 'Send Message'}
                <FaPaperPlane />
              </button>

              {status.state === 'success' && (
                <p className="text-sm text-green-400 font-mono">Message sent successfully. I&apos;ll get back to you soon!</p>
              )}
              {status.state === 'error' && <p className="text-sm text-red-400 font-mono">{status.error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

