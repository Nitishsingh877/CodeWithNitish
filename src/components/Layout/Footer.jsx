import { personalInfo } from '../../data/portfolioData';

const links = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Footer = () => {
  const firstName = personalInfo.name.split(' ')[0].toUpperCase();
  const roles = personalInfo.title.split('|').map((p) => p.trim());

  return (
    <footer className="relative bg-[#050505] text-white pt-16 pb-10 px-6 md:px-12 border-t border-white/10 select-none overflow-hidden z-10">
      {/* Massive low-opacity closing statement */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none select-none overflow-hidden text-center"
      >
        <h2
          className="font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 11.25rem)', opacity: 0.03 }}
        >
          Thank You <br /> For Visiting
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col space-y-12 pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
              {firstName}
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            </div>
            <div className="flex flex-wrap gap-x-3 text-xs font-mono text-white/50 tracking-widest uppercase">
              {roles.map((role, idx) => (
                <span key={role}>
                  {role}
                  {idx < roles.length - 1 && <span className="text-white/20"> &bull;</span>}
                </span>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-red-500 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors uppercase tracking-wider">
              GitHub //
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors uppercase tracking-wider">
              LinkedIn //
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-red-500 transition-colors uppercase tracking-wider">
              Email //
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: {personalInfo.location}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <div>
            <p>Designed &amp; Developed By</p>
            <p className="text-white text-sm font-bold tracking-wide">{personalInfo.name}</p>
            <p className="text-white/30 normal-case tracking-normal mt-1">React &bull; Spring Boot &bull; GSAP</p>
          </div>
          <div className="text-right">
            <p className="text-red-500/80 font-bold leading-tight">
              Build.
              <br />
              Automate.
              <br />
              Scale.
            </p>
            <p className="mt-3">&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

