import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, heroStats } from '../../data/portfolioData';
import profilePic from '../../data/1761382692975.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const contentRef = useRef(null);
  const bgTextRef = useRef(null);

  const titleParts = personalInfo.title.split('|').map((p) => p.trim());
  const role = titleParts[0];
  const specialties = titleParts.slice(1);
  const taglineLines = personalInfo.tagline.split('. ').map((l) => l.replace(/\.$/, '').trim()).filter(Boolean);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!section || !card || !content) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(
      content.querySelectorAll('.hero-anim-item'),
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, stagger: 0.12 }
    ).fromTo(
      card,
      { scale: 0.75, opacity: 0, rotationY: 35, rotationX: -15 },
      { scale: 1, opacity: 1, rotationY: -8, rotationX: 0, duration: 1.4, ease: 'back.out(1.2)' },
      '-=0.9'
    );

    const xTilt = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3.out' });
    const yTilt = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3.out' });
    const glareX = gsap.quickTo(glareRef.current, 'x', { duration: 0.3, ease: 'power2.out' });
    const glareY = gsap.quickTo(glareRef.current, 'y', { duration: 0.3, ease: 'power2.out' });
    const liftCard = gsap.quickTo(card, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const rotateX = -((e.clientY - cardCenterY) / (cardRect.height / 2)) * 14;
      const rotateY = -8 + ((e.clientX - cardCenterX) / (cardRect.width / 2)) * 14;

      xTilt(rotateY);
      yTilt(rotateX);
      glareX(e.clientX - cardRect.left - cardRect.width / 2);
      glareY(e.clientY - cardRect.top - cardRect.height / 2);
    };

    const handleMouseEnter = () => liftCard(-12);
    const handleMouseLeave = () => {
      xTilt(-8);
      yTilt(0);
      liftCard(0);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    // Slow parallax drift on the outlined background typography while scrolling
    const parallax = gsap.to(bgTextRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    });

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-center select-none pt-28 pb-16"
    >
      {/* Base cinematic gradient + vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0" />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%), radial-gradient(circle at center, rgba(229,9,20,0.35), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)' }}
      />

      {/* Layered red ambient glow spots */}
      <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-700/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[360px] h-[220px] bg-red-600/12 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Huge low-opacity background typography */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden gap-4"
      >
        {['BUILD.', 'AUTOMATE.', 'SCALE.'].map((word, idx) => (
          <span
            key={word}
            className="font-black uppercase tracking-tighter leading-none whitespace-nowrap text-white"
            style={{
              fontSize: 'clamp(3rem, 11vw, 10rem)',
              opacity: 0.04,
              WebkitTextStroke: idx === 1 ? '1.5px rgba(229,9,20,0.6)' : '1px rgba(255,255,255,0.4)',
              color: 'transparent',
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Hero Story Block (~60% width) with modern glass styling */}
          <div className="w-full lg:w-[60%] flex flex-col items-start space-y-6 text-left p-6 md:p-10 rounded-3xl bg-black/35 backdrop-blur-md border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* "Currently Building" Badge */}
            <div className="hero-anim-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/40 backdrop-blur-xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-[0_0_20px_rgba(229,9,20,0.25)]">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-red-500 font-bold">CURRENTLY BUILDING</span>
              <span className="text-white/30">|</span>
              <span className="text-white/90">AI Defect Investigation Assistant</span>
            </div>

            {/* Dominant Headline: Building the Future */}
            <div className="hero-anim-item flex flex-col gap-1">
              <h1
                className="font-black tracking-tight text-white leading-[0.98]"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', letterSpacing: '-2px' }}
              >
                {taglineLines[0] || 'BUILDING MICROSERVICES.'}
                <br />
                {taglineLines[1] || 'BUILDING AI AGENTS.'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]">
                  {taglineLines[2] || 'BUILDING THE FUTURE.'}
                </span>
              </h1>
            </div>

            {/* Identity & Subtitle */}
            <div className="hero-anim-item flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                {personalInfo.name.toUpperCase()}
              </h2>
              <p className="text-base md:text-lg text-white/75 font-light leading-relaxed max-w-xl">
                {role} specializing in {specialties.join(', ')} &amp; production systems.
              </p>
            </div>

            {/* Meta tags */}
            <div className="hero-anim-item flex flex-wrap items-center gap-4 text-sm font-mono text-[#d0d0d0]">
              <span>{role}</span>
              <span className="text-white/30">•</span>
              <span>{personalInfo.company}</span>
              <span className="text-white/30">•</span>
              <span>{personalInfo.location}</span>
            </div>

            {/* Clear Button Hierarchy: Dominant Primary -> Crisp Secondary -> Understated Link */}
            <div className="hero-anim-item relative flex flex-wrap items-center gap-5 pt-3">
              {/* Primary button glow */}
              <div className="absolute -inset-4 -z-10 bg-red-600/25 blur-[50px] rounded-full pointer-events-none" />

              <a
                href="#projects"
                data-cursor="button"
                className="px-9 py-[18px] bg-[#e50914] text-white font-bold text-base md:text-lg rounded-[8px] hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:shadow-[0_0_50px_rgba(229,9,20,0.9)] flex items-center gap-2 active:scale-95"
              >
                View Projects
              </a>
              <a
                href={personalInfo.cvUrl}
                download
                data-cursor="button"
                className="px-9 py-[18px] bg-white text-black font-bold text-base md:text-lg rounded-[8px] hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] flex items-center gap-2 active:scale-95"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-red-500 font-mono text-sm uppercase tracking-widest flex items-center gap-2 transition-all duration-300 hover:translate-x-1 ml-2"
              >
                Contact Me &rarr;
              </a>
            </div>

            {/* Production Stats Row */}
            <div className="hero-anim-item flex flex-wrap gap-x-10 gap-y-4 pt-4 border-t border-white/10 w-full">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-white">{stat.value}</span>
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Movie-Poster Style Photo Card (~40% width, ~15-20% larger) */}
          <div className="w-full lg:w-[40%] flex justify-center perspective-[1200px]">
            <div ref={cardRef} className="relative group transform-gpu transition-transform duration-100 ease-out will-change-transform">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-600/80 via-rose-600/50 to-purple-600/25 rounded-3xl blur-3xl opacity-90 group-hover:opacity-100 animate-pulse duration-1000" />
              <div className="relative w-[320px] sm:w-[360px] md:w-[420px] p-3.5 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-red-600/40 shadow-[0_0_90px_rgba(229,9,20,0.55)] overflow-hidden group-hover:border-red-500/70 transition-all duration-500">
                <div
                  ref={glareRef}
                  className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform-gpu z-40"
                />
                <div className="absolute top-6 left-6 z-30 px-3.5 py-1 bg-red-600 text-white font-mono text-[10px] font-bold tracking-widest rounded shadow-xl">
                  JAVA | SPRING | AI
                </div>
                <img
                  src={profilePic}
                  alt={personalInfo.name}
                  className="w-full h-[460px] sm:h-[520px] md:h-[600px] object-cover rounded-xl filter contrast-125 brightness-105 group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-anim-item flex items-center justify-between text-xs font-mono text-white/50 tracking-widest uppercase mt-16">
          <span>ENGINEERED FOR SCALABILITY</span>
          <span>[ {personalInfo.location} ]</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;


