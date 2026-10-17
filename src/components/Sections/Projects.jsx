import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { projects, aiAutomation } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaSitemap } from 'react-icons/fa';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const statusTag = (project) => {
  if (project.liveUrl) return 'LIVE';
  if (project.category === 'AI/GenAI') return 'AI-POWERED';
  if (project.internal) return 'INTERNAL';
  return 'FULL STACK';
};

// Real case study built from the existing aiAutomation data (no public repo, so no external links).
const automationCaseStudy = {
  id: 'ai-automation-suite',
  title: 'AI Automation Suite',
  shortDescription: aiAutomation.summary,
  technologies: aiAutomation.agents.flatMap((a) => a.tools || [a.name]),
  category: 'AI/GenAI',
  internal: true,
  imageUrl: null,
  impact: aiAutomation.agents,
};

const displayProjects = [...projects, automationCaseStudy];

const ImpactList = ({ project }) => {
  if (project.internal) {
    return (
      <ul className="space-y-2.5">
        {project.impact.map((agent) => (
          <li key={agent.name} className="text-sm text-white/75">
            <span className="font-bold text-white">{agent.name}</span>
            {agent.tools && <span className="text-white/50"> — {agent.tools.join(', ')}</span>}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="space-y-2.5">
      {(project.features || []).slice(0, 5).map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
          <span className="text-red-500 font-bold">&#8250;</span>
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
};

const ExpandedCard = ({ project, episodeLabel, onInteract }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative rounded-[28px] overflow-hidden border border-red-600/30 bg-gradient-to-br from-[#1a0a0c] via-[#141414] to-[#0a0a0a] shadow-[0_35px_80px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-56 lg:h-auto overflow-hidden">
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full min-h-[220px] flex items-center justify-center bg-gradient-to-br from-red-950/60 to-black">
              <FaSitemap className="text-red-600/40" size={72} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent lg:bg-gradient-to-r" />
          <span className="absolute top-5 left-5 text-[11px] font-mono font-bold tracking-widest uppercase text-red-500 bg-black/70 px-3 py-1 rounded border border-red-600/30">
            {episodeLabel}
          </span>
          <span className="absolute top-5 right-5 flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest uppercase text-white bg-black/70 px-3 py-1 rounded border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_#E50914]" aria-hidden="true" />
            {statusTag(project)}
          </span>
        </div>

        <div className="p-8 md:p-10 flex flex-col gap-5">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">{project.category}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1">{project.title}</h3>
          </div>

          <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">{project.shortDescription}</p>

          {/* Primary stack - bigger, higher-contrast pills so the top skills instantly pop */}
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-sm md:text-base font-bold uppercase tracking-wide text-white bg-red-600/10 border border-red-600/40 px-4 py-1.5 rounded-lg shadow-[0_0_15px_rgba(229,9,20,0.2)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-3">Impact</h4>
            <ImpactList project={project} />
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 10).map((tech) => (
                <span key={tech} className="text-xs font-mono text-white/80 bg-white/5 px-3 py-1 rounded border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 border border-white/15 text-xs font-bold uppercase tracking-widest text-white hover:border-red-600/60 hover:text-red-400 transition-colors"
              >
                <FaGithub /> Github
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-red-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-500 shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.architectureDiagram && (
              <button
                type="button"
                onClick={() => {
                  setShowArchitecture((v) => !v);
                  onInteract?.();
                }}
                data-cursor="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 border border-white/15 text-xs font-bold uppercase tracking-widest text-white hover:border-red-600/60 hover:text-red-400 transition-colors"
              >
                <FaSitemap /> {showArchitecture ? 'Hide Architecture' : 'View Architecture'}
              </button>
            )}
            {!project.internal && (
              <RouterLink
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors ml-auto"
              >
                Case Study <FaArrowRight size={12} />
              </RouterLink>
            )}
          </div>

          <AnimatePresence>
            {showArchitecture && project.architectureDiagram && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <pre className="mt-2 p-4 rounded-xl bg-black/60 border border-red-600/20 text-[10px] leading-tight text-red-300/90 font-mono overflow-x-auto whitespace-pre">
                  {project.architectureDiagram}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [phase, setPhase] = useState('shuffle'); // 'shuffle' | 'expanded'
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) {
      setPhase('expanded');
      return undefined;
    }
    const timer = setTimeout(() => setPhase('expanded'), 2200);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  // Auto-advance episodes every 5s once expanded; stops for good as soon as the user interacts.
  useEffect(() => {
    if (phase !== 'expanded' || reducedMotion || userPaused) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % displayProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phase, reducedMotion, userPaused]);

  const activeProject = displayProjects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#0b0b0b] text-white py-24 px-6 md:px-12 overflow-hidden select-none bg-grain"
    >
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          ORIGINALS
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10">
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">EPISODE 03</span>
            <span className="text-white/40">|</span>
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            CASE STUDIES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              IN PRODUCTION.
            </span>
          </h2>
        </div>

        {phase === 'shuffle' ? (
          <div className="relative h-[420px] flex items-center justify-center">
            {displayProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="absolute w-[280px] h-[340px] rounded-3xl bg-[#141414] border border-red-600/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                initial={{ rotate: (idx - 1) * 8, x: (idx - 1) * 24, opacity: 0 }}
                animate={{
                  rotate: [(idx - 1) * 8, (idx % 2 === 0 ? -1 : 1) * 10, 0],
                  x: [(idx - 1) * 24, (idx % 2 === 0 ? -1 : 1) * 40, 0],
                  opacity: 1,
                }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: idx * 0.1 }}
                style={{ zIndex: displayProjects.length - idx }}
              />
            ))}
            <span className="absolute bottom-0 text-xs font-mono uppercase tracking-widest text-white/40">
              PROJECT_ARCHIVE // shuffling...
            </span>
          </div>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <ExpandedCard
                key={activeProject.id}
                project={activeProject}
                episodeLabel={`S01 • E0${activeIndex + 1}`}
                onInteract={() => setUserPaused(true)}
              />
            </AnimatePresence>

            {/* Episode selector - Netflix-style, active episode clearly called out */}
            <div className="flex flex-col gap-2 max-w-xl">
              {displayProjects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setUserPaused(true);
                    }}
                    aria-pressed={isActive}
                    aria-label={`Show ${project.title}`}
                    className={`text-left px-4 py-2.5 rounded-lg border text-sm font-mono uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-red-600/15 border-red-600/40 shadow-[0_0_20px_rgba(255,0,0,0.2)] scale-[1.02]'
                        : 'text-white/45 border-transparent hover:text-white/80 hover:border-white/10'
                    }`}
                  >
                    {isActive ? `[ S01-E0${idx + 1}  ${project.title} ]` : `S01-E0${idx + 1}  ${project.title}`}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;



