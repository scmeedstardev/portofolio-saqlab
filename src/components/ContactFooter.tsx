import { COPY, LINKS, type Language } from '../data/portfolioData';

interface ContactFooterProps {
  lang: Language;
  onOpenContact: () => void;
}

export function ContactFooter({ lang, onOpenContact }: ContactFooterProps) {
  return (
    <footer
      id="contact"
      className="w-full bg-primary text-on-primary rounded-t-[32px] pt-16 pb-12 px-6 sm:px-12 mt-12 relative overflow-hidden"
    >
      {/* Fine dot pattern overlay on obsidian */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[420px]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-widest">
              {COPY.footer.kicker}
            </span>
          </div>

          <h2 className="font-display text-[40px] sm:text-[64px] md:text-[82px] leading-[0.95] font-extrabold tracking-tight max-w-4xl text-on-primary">
            {COPY.footer.headlinePrefix}
            <span className="font-editorial text-[48px] sm:text-[74px] md:text-[94px] italic text-secondary font-normal">
              {COPY.footer.headlineItalic}
            </span>
          </h2>

          <p className="font-editorial text-[19px] text-inverse-primary max-w-2xl mt-6 leading-relaxed">
            {COPY.footer.description[lang]}
          </p>

          {/* Verified Contact Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-8">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface text-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-tertiary-fixed transition-all active:scale-95 shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>{COPY.footer.actions.contactPerson}</span>
              <span className="text-xs">↗</span>
            </button>

            <a
              href={LINKS.personalGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-surface-variant hover:text-primary transition-all whitespace-nowrap"
            >
              <span>{COPY.footer.actions.github}</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-surface-variant hover:text-primary transition-all whitespace-nowrap"
            >
              <span>{COPY.footer.actions.linkedin}</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Single Clean Bottom Credits Strip */}
        <div className="pt-14 mt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-on-primary-container">
          <div className="flex items-center gap-3">
            <span className="font-bold text-on-primary">DIMAS SAKTI SATARSYAH</span>
            <span>// SAMID</span>
          </div>
          <p className="text-center">{COPY.footer.copyright[lang]}</p>
          <div>Jakarta Timur, ID · GMT+7</div>
        </div>
      </div>
    </footer>
  );
}
