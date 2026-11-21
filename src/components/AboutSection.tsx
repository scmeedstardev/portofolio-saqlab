import { useState } from 'react';
import { COPY, TERMINAL_LOGS, type Language } from '../data/portfolioData';

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const [logIndex, setLogIndex] = useState(0);
  const logs = TERMINAL_LOGS[lang];
  const currentMessage = logs[logIndex % logs.length];

  const handleCycleLog = () => {
    setLogIndex((prev) => (prev + 1) % logs.length);
  };

  return (
    <section id="about" className="w-full py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography & Identity Strip */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-widest">
              {COPY.about.kicker}
            </span>
          </div>

          <h2 className="font-display text-[28px] sm:text-[32px] leading-[1.2] font-bold text-primary tracking-tight">
            {COPY.about.headingPrefix[lang]}
            <span className="font-editorial text-[36px] sm:text-[48px] leading-none text-primary italic font-normal lowercase">
              Samid.
            </span>
          </h2>

          <div className="space-y-4 font-editorial text-[19px] text-on-surface-variant leading-relaxed">
            <p>{COPY.about.p1[lang]}</p>
            <p>{COPY.about.p2[lang]}</p>
          </div>

          {/* Identity Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-outline-variant/20">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                {COPY.about.identity.locationLabel[lang]}
              </span>
              <span className="font-mono text-[13px] font-bold text-primary">Jakarta Timur, ID</span>
            </div>

            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-outline-variant/20">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                {COPY.about.identity.focusLabel[lang]}
              </span>
              <span className="font-mono text-[13px] font-bold text-primary">Full-Stack &amp; AI</span>
            </div>

            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-outline-variant/20">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                {COPY.about.identity.availabilityLabel[lang]}
              </span>
              <span className="font-mono text-[13px] font-bold text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" aria-hidden="true" />
                <span>{COPY.about.identity.availabilityValue[lang]}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Retro Terminal Bubble & Education Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Retro Terminal Speech Bubble */}
          <div className="relative bg-surface-container-lowest p-5 rounded-lg shadow-xl border border-outline-variant/25">
            <div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-low -mx-5 -mt-5 px-5 py-2.5 rounded-t-lg border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              </div>
              <span className="font-mono text-[11px] text-on-surface-variant">{COPY.about.terminal.host}</span>
              <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-surface-variant text-primary uppercase">
                {COPY.about.terminal.badge}
              </span>
            </div>

            <div className="py-2">
              <p className="font-mono text-[13px] text-primary min-h-[56px] leading-relaxed">
                {currentMessage}
                <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle" aria-hidden="true" />
              </p>
            </div>

            <div className="pt-3 flex items-center justify-between text-on-surface-variant border-t border-outline-variant/15">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                {COPY.about.terminal.reversible}
              </span>
              <button
                type="button"
                onClick={handleCycleLog}
                className="font-mono text-[10px] font-bold text-secondary uppercase hover:underline cursor-pointer"
              >
                {COPY.about.terminal.nextBtn[lang]}
              </button>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-md border border-outline-variant/25 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                {COPY.about.education.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-primary font-mono text-[11px] font-bold">
                {COPY.about.education.period}
              </span>
            </div>

            <div>
              <h3 className="font-display text-[22px] font-bold text-primary">{COPY.about.education.degree}</h3>
              <p className="font-mono text-[13px] text-on-surface-variant mt-0.5">{COPY.about.education.school}</p>
            </div>

            <p className="font-editorial text-[16px] leading-relaxed text-on-surface-variant">
              {COPY.about.education.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {COPY.about.education.courses.map((course) => (
                <span
                  key={course}
                  className="px-2 py-1 rounded bg-surface-container-low font-mono text-[11px] text-on-surface"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
