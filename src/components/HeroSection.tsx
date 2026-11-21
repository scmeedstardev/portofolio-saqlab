import { useEffect, useState } from 'react';
import { ASSETS, COPY, LINKS, ORBIT_SPECIALTIES, type Language } from '../data/portfolioData';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function HeroSection({ lang, onChangeLang }: HeroSectionProps) {
  const [isSamid, setIsSamid] = useState(false);
  const [wordmarkFading, setWordmarkFading] = useState(false);
  const [portraitError, setPortraitError] = useState(false);
  const [jakartaTime, setJakartaTime] = useState('12:00:00 PM WIB');

  useEffect(() => {
    const updateJakartaTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setJakartaTime(`${formatted} WIB`);
      } catch {
        setJakartaTime('12:00:00 PM WIB');
      }
    };
    updateJakartaTime();
    const timer = window.setInterval(updateJakartaTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const handleToggleName = () => {
    setWordmarkFading(true);
    window.setTimeout(() => {
      setIsSamid((prev) => !prev);
      setWordmarkFading(false);
    }, 140);
  };

  return (
    <section id="home" className="hero relative w-full pt-6 pb-20 md:pb-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Giant Interactive Wordmark */}
      <button
        type="button"
        onClick={handleToggleName}
        title="Click to toggle DIMAS / SAMID"
        className="relative w-full flex items-center justify-center select-none pointer-events-auto cursor-pointer group py-2 bg-transparent border-0"
      >
        <span
          className={`font-display text-[18vw] leading-[0.8] tracking-[-0.05em] font-[900] text-primary transition-all duration-300 ease-out group-hover:tracking-[-0.02em] inline-block ${
            wordmarkFading ? 'scale-[0.96] opacity-30' : 'scale-100 opacity-90'
          }`}
        >
          {isSamid ? 'SAMID' : 'DIMAS'}
        </span>
        <span className="absolute -top-1 right-4 sm:right-8 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono text-[10px] font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" aria-hidden="true" />
          <span>{COPY.hero.reverseHint[lang]}</span>
        </span>
      </button>

      {/* Center Stage: Cutout Portrait + Orbiting Cards */}
      <div className="relative w-full max-w-4xl mx-auto -mt-8 sm:-mt-16 md:-mt-24 mb-8 min-h-[440px] sm:min-h-[580px] md:min-h-[640px] flex items-end justify-center">
        {/* Curved Connecting Hairlines SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none stroke-outline-variant/60"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
          aria-hidden="true"
        >
          <path d="M 160 160 C 260 220, 320 280, 400 320" strokeDasharray="3 3" strokeWidth="1.2" />
          <path d="M 180 340 C 280 350, 320 340, 400 360" strokeDasharray="3 3" strokeWidth="1.2" />
          <path d="M 640 170 C 540 220, 480 270, 400 320" strokeDasharray="3 3" strokeWidth="1.2" />
          <path d="M 620 360 C 520 370, 480 360, 400 380" strokeDasharray="3 3" strokeWidth="1.2" />
        </svg>

        {/* Center Portrait Cutout */}
        <div className="relative z-10 w-72 sm:w-96 md:w-[440px] -mt-5 md:-mt-10 mx-auto flex flex-col items-center">
          <div className="relative w-full overflow-hidden">
            {!portraitError ? (
              <img
                src={ASSETS.portraitUrl}
                alt="Dimas Sakti Satarsyah cutout portrait"
                referrerPolicy="no-referrer"
                onError={() => setPortraitError(true)}
                className="w-full h-auto object-contain filter grayscale contrast-110 drop-shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-[3/4] rounded-t-2xl bg-gradient-to-b from-surface-container-high to-surface flex flex-col items-center justify-center p-8 text-center border border-outline-variant/30">
                <span className="font-display text-5xl font-black text-primary tracking-tight">SAMID</span>
                <span className="font-mono text-xs text-on-surface-variant mt-2">DIMAS SAKTI SATARSYAH</span>
              </div>
            )}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage: 'linear-gradient(rgba(17,17,17,0.12) 1px, transparent 1px)',
                backgroundSize: '100% 4px',
              }}
            />
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
          </div>
        </div>

        {/* 4 Orbiting Glass Specialty Cards */}
        {ORBIT_SPECIALTIES.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.positionClass} z-20 w-40 sm:w-56 p-3 sm:p-4 rounded-lg bg-surface-container-lowest/85 backdrop-blur-md shadow-md border border-outline-variant/20 transition-transform duration-200 hover:-translate-y-1`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[13px] shrink-0 ${card.badgeBgClass}`}>
                {card.emoji}
              </span>
              <span className="font-display text-[13px] sm:text-[14px] leading-tight font-bold text-primary">
                {card.title}
              </span>
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] leading-snug text-on-surface-variant">
              {card.subtitle[lang]}
            </p>
          </div>
        ))}
      </div>

      {/* Editorial & Metadata Layer */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
        {/* Left Column: Bio & CTAs */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary text-on-primary font-mono text-[11px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
                <span>{COPY.hero.statusTag}</span>
              </span>
              <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest">
                · {COPY.hero.programTag}
              </span>
            </div>

            {/* Language Switcher EN | ID */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center p-1 rounded-lg bg-surface-container-low border border-outline-variant/30"
            >
              <button
                type="button"
                onClick={() => onChangeLang('id')}
                className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lang === 'id' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <h1 className="font-display text-[26px] sm:text-[32px] leading-[1.18] font-bold tracking-tight text-primary max-w-xl">
            {COPY.hero.headline[lang]}
          </h1>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>{COPY.hero.exploreProjects[lang]}</span>
              <span>→</span>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-on-surface font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-surface-variant transition-all whitespace-nowrap"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          <p className="font-mono text-[13px] text-on-surface-variant pt-2">
            {COPY.hero.subMeta[lang]}
          </p>
        </div>

        {/* Right Column: Subtext & Live Jakarta Clock */}
        <div className="md:col-span-5 flex flex-col justify-between gap-6 md:text-right md:items-end">
          <div>
            <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
              {COPY.hero.profileEyebrow[lang]}
            </span>
            <h2 className="font-display text-[22px] leading-tight font-extrabold text-primary mb-2">
              {COPY.hero.profileTitle}
            </h2>
            <p className="font-editorial text-[16px] leading-relaxed text-on-surface-variant max-w-sm md:ml-auto">
              {COPY.hero.profileDesc[lang]}
            </p>
          </div>

          {/* Live Jakarta Time Widget */}
          <div className="p-3.5 rounded-lg bg-surface-container-low shadow-sm border border-outline-variant/25 flex items-center gap-3.5 self-start md:self-end">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <div className="text-left font-mono">
              <div className="text-[13px] font-bold text-primary tabular-nums">{jakartaTime}</div>
              <div className="text-[10px] text-on-surface-variant tracking-wider uppercase">{COPY.hero.clockSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
