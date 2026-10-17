import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { techStack, engineeringImpact } from '../../data/portfolioData';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const byName = (...names) =>
  names
    .map((name) => techStack.find((t) => t.name === name))
    .filter(Boolean)
    .map((t) => t.name);

// XL/Large tiers highlight the strongest, most-used skills; everything else defaults to medium.
const TIER_XL = new Set(['Java', 'Spring Boot 3', 'Microservices', 'RAG', 'React.js', 'AWS',"Angular"]);
const TIER_LARGE = new Set([
  'Docker', 'RabbitMQ', 'Jenkins CI/CD', 'Model Context Protocol (MCP)', 'Copilot Agents',
  'Vector Databases', 'Google Gemini 2.0 Flash', 'RESTful APIs',
]);
const TIER_SMALL = new Set([
  'Postman & SoapUI', 'Jasmine & Karma', 'Swagger', 'IntelliJ IDEA', 'Atlassian Jira', 'Agile/Scrum', 'Maven', 'JUnit',
]);

const getTier = (name) => (TIER_XL.has(name) ? 'xl' : TIER_LARGE.has(name) ? 'large' : TIER_SMALL.has(name) ? 'small' : 'medium');

const tierClasses = {
  xl: 'text-xl md:text-3xl px-6 py-3 font-black border-red-600/50 shadow-[0_0_25px_rgba(229,9,20,0.3)] hover:shadow-[0_0_35px_rgba(229,9,20,0.5)]',
  large: 'text-base md:text-xl px-5 py-2.5 font-bold border-red-600/25',
  medium: 'text-sm md:text-base px-4 py-2 font-semibold border-white/15',
  small: 'text-xs md:text-sm px-3 py-1.5 font-medium border-white/10 text-white/70',
};

const skillGroups = [
  {
    title: 'Core Expertise',
    description: 'The technologies behind every production system I ship.',
    items: byName('Java', 'Spring Boot 3', 'Microservices', 'RAG Architecture', 'React.js', 'AWS',"Angular"),
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerized deployments and CI/CD pipelines.',
    items: byName('Docker', 'Jenkins CI/CD', 'GitHub Actions', 'AWS', 'Google Cloud Run', 'Kubernetes','SVN'),
  },
  {
    title: 'Distributed Systems',
    description: 'Event-driven, fault-tolerant service-to-service communication.',
    items: byName('Kafka', 'RabbitMQ', 'Redis', 'Resilience4j', 'API Gateway', 'Feign Client'),
  },
  {
    title: 'AI & Automation',
    description: 'My biggest differentiator — agentic tooling used daily by 30+ engineers.',
    items: byName(
      'RAG Architecture', 'Model Context Protocol (MCP)', 'Microsoft 365 Copilot',
      'Google Gemini 2.0 Flash', 'Prompt Engineering', 'Vector Databases'
    ),
  },
  {
    title: 'Observability & Production Support',
    description: 'What keeps 150+ microservices stable in production.',
    items: byName('Elasticsearch', 'Kibana & Logstash', 'AOP', 'Exception Handling', 'Root Cause Analysis'),
  },
  {
    title: 'Frontend',
    description: 'Interfaces for the tools above.',
    items: byName('React.js', 'Angular', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3'),
  },
];

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const SkillCloud = ({ group }) => {
  const [order, setOrder] = useState(group.items);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    const interval = setInterval(() => setOrder((prev) => shuffle(prev)), 5000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div>
      <h3 className="text-lg md:text-xl font-black text-white mb-1.5">{group.title}</h3>
      <p className="text-xs md:text-sm text-white/50 font-light mb-5">{group.description}</p>
      <div className="flex flex-wrap gap-3">
        {order.map((name) => {
          const tier = getTier(name);
          return (
            <motion.span
              key={name}
              layout
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className={`inline-flex items-center rounded-full bg-[#141414] border text-white font-mono uppercase tracking-wide hover:border-red-500 hover:text-red-400 transition-colors duration-300 ${tierClasses[tier]}`}
            >
              {name}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

const statLabels = ['Production Microservices', 'AI Agents Built', 'Engineers Using Them', 'Deployment Success Rate'];

const Skills = () => {
  const stats = engineeringImpact.filter((s) => statLabels.includes(s.label));

  return (
    <section id="skills" className="relative w-full bg-[#0b0b0b] text-white py-24 px-6 md:px-12 overflow-hidden select-none bg-grain">
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
        <h1 className="text-[22vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">SKILLS</h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-red-600/40 bg-black/80 backdrop-blur-xl text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-red-500 font-bold">EPISODE 02</span>
              <span className="text-white/40">|</span>
              <span>CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]">
                TOOLKIT.
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Technologies I use to build enterprise microservices, AI agents, and cloud-native applications.
          </p>
        </div>

        {/* Impact context above the skill cloud */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 bg-[#141414]/90 border border-white/10 rounded-2xl text-center">
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-white/50 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12">
          {skillGroups.map((group) => (
            <SkillCloud key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



