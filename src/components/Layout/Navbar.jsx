import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';

const links = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const firstName = personalInfo.name.split(' ')[0].toUpperCase();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <RouterLink
          to="/"
          className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]"
        >
          {firstName}
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
        </RouterLink>

        <nav className="hidden md:flex items-center gap-9 text-sm font-semibold uppercase tracking-[2px] text-white/80 font-mono">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#ff3b3b] transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex px-6 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
        >
          Contact Me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 flex flex-col px-6 py-6 gap-5 text-sm font-mono uppercase tracking-widest text-white/80">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 rounded bg-red-600 text-white font-bold text-xs uppercase tracking-widest text-center"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

