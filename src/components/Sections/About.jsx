import { motion } from 'framer-motion';
import {
  experience,
  impactStatement,
  engineeringImpact,
  education,
  aiAutomation,
  beyondCoding,
} from '../../data/portfolioData';

const cardTransition = (delay) => ({
  initial: { y: 60, opacity: 0, scale: 0.97 },
  whileInView: { y: 0, opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const timeline = [experience.current, experience.internship];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#050505] text-white py-28 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">EPISODE 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            MY JOURNEY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              ORIGIN &amp; EXPERIENCE.
            </span>
          </h2>
        </div>

        {/* 01 — Who I Am */}
        <motion.div {...cardTransition(0)} className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">01 / Who I Am</h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">01</div>
              <div className="space-y-5 relative z-10 text-sm md:text-base text-white/80 font-light leading-relaxed">
                <p>
                  I build scalable backend systems, enterprise microservices, and AI-powered automation solutions.
                </p>
                <p>
                  Currently working as a {experience.current.title} at {experience.current.company}, contributing to{' '}
                  <span className="text-white font-semibold">150+ production microservices</span> supporting a global
                  telecommunications platform.
                </p>
                <p>
                  Beyond delivery work, I design AI agents and developer productivity tools that automate root-cause
                  analysis, code reviews, test generation, and knowledge discovery. My solutions are actively used by{' '}
                  <span className="text-white font-semibold">30+ engineers</span>.
                </p>
                <p>
                  I enjoy solving complex engineering challenges across distributed systems, cloud-native architectures,
                  DevOps pipelines, and Agentic AI applications.
                </p>
              </div>
            </div>

            {/* Pull-quote */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-gradient-to-br from-red-950/40 via-[#141414]/90 to-[#141414]/90 backdrop-blur-2xl border border-red-600/30 rounded-[2.5rem] shadow-2xl flex items-center relative overflow-hidden">
              <p className="relative z-10 text-lg md:text-xl font-semibold text-white leading-relaxed">
                &ldquo;{impactStatement}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* 02 — Engineering Impact */}
        <motion.div {...cardTransition(0.1)} className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">02 / Engineering Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {engineeringImpact.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl text-center hover:border-red-600/60 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-white/50 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 03 — AI Automation Lab */}
        <motion.div {...cardTransition(0.15)} className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">03 / AI Automation Lab</h3>
          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-3xl">{aiAutomation.summary}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiAutomation.agents.map((agent) => (
              <div
                key={agent.name}
                className="p-7 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-red-600/60 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">{agent.name}</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-4">{agent.description}</p>
                {agent.tools && (
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 04 — Career Journey */}
        <motion.div {...cardTransition(0.2)} className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">04 / Career Journey</h3>
          <div className="space-y-6">
            {timeline.map((role) => (
              <div
                key={role.title + role.duration}
                className="p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] hover:border-red-600/60 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    {role.title} &mdash; {role.company}
                  </h4>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-500">{role.duration}</span>
                </div>
                <p className="text-xs font-mono text-white/40 mb-4">{role.location}</p>
                <ul className="space-y-2.5 text-sm text-white/70 font-light leading-relaxed">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 05 — Beyond Coding + Education */}
        <motion.div {...cardTransition(0.25)} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] hover:border-red-600/60 transition-colors duration-300">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-4">05 / Beyond Coding</h3>
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">{beyondCoding}</p>
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] hover:border-red-600/60 transition-colors duration-300">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-4">Education</h3>
            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="text-base font-bold text-white">{edu.degree}</p>
                <p className="text-sm text-white/60 mt-1">{edu.institution}</p>
                <div className="flex items-center gap-3 mt-3 text-xs font-mono text-white/50">
                  <span>{edu.duration}</span>
                  <span className="text-white/20">&bull;</span>
                  <span className="text-red-500">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


