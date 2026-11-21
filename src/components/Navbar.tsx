import { useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { ASSETS, COPY, type Language } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onOpenContact: () => void;
}

export function Navbar({ lang, onOpenContact }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: COPY.nav.about[lang] },
    { href: '#skills', label: COPY.nav.skills[lang] },
    { href: '#experience', label: COPY.nav.experience[lang] },
    { href: '#projects', label: COPY.nav.projects[lang] },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex flex-col items-center px-4 pointer-events-none">
      <div className="pointer-events-auto h-14 w-full max-w-5xl rounded-[999px] bg-surface/85 backdrop-blur-[14px] shadow-[0_8px_32px_-4px_rgba(14,14,14,0.08),0_0_0_1px_rgba(17,17,17,0.12)] flex items-center justify-between pl-4 sm:pl-6 pr-2.5 gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          {!logoError ? (
            <img
              src={ASSETS.logoUrl}
              alt="SAMID Brand Logo"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-8 w-auto object-contain"
            />
          ) : (
            <div className="h-8 w-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-display font-black text-xs">
              S
            </div>
          )}
          <a
            href="#home"
            className="font-display text-[20px] sm:text-[22px] leading-none tracking-tighter font-[900] text-primary hover:text-secondary transition-colors whitespace-nowrap shrink-0"
          >
            SAMID®
          </a>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary-container" aria-hidden="true" />
        </div>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary font-bold transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[999px] bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{COPY.nav.sayHello[lang]}</span>
            <span className="text-[12px] leading-none">↗</span>
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            aria-label={lang === 'id' ? 'Buka formulir kontak' : 'Open contact dialog'}
            className="hidden sm:flex w-8 h-8 rounded-full bg-primary text-on-primary items-center justify-center shrink-0 hover:bg-secondary transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center shrink-0 hover:bg-surface-variant transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 w-full max-w-5xl rounded-2xl bg-surface/95 backdrop-blur-md shadow-xl border border-outline-variant/40 p-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest text-primary font-bold hover:bg-surface-container-low transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
