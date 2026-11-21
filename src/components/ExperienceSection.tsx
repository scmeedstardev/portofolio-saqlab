import { COPY, EXPERIENCE_ITEMS, type Language } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-widest">
              {COPY.experience.kicker}
            </span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[32px] font-bold text-primary tracking-tight">
            {COPY.experience.titlePrefix}
            <span className="font-editorial text-[36px] sm:text-[48px] italic font-normal lowercase">
              {COPY.experience.titleItalic}
            </span>
          </h2>
        </div>

        <p className="font-mono text-[13px] text-on-surface-variant max-w-md">
          {COPY.experience.subtitle[lang]}
        </p>
      </div>

      {/* Swiss Editorial Timeline Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/25 overflow-hidden">
        {/* Table Column Header */}
        <div className="hidden md:grid grid-cols-12 px-6 py-3 bg-surface-container-low border-b border-outline-variant/25 font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <div className="col-span-2">{COPY.experience.tableHeader.period[lang]}</div>
          <div className="col-span-4">{COPY.experience.tableHeader.role[lang]}</div>
          <div className="col-span-4">{COPY.experience.tableHeader.summary[lang]}</div>
          <div className="col-span-2 text-right">{COPY.experience.tableHeader.category[lang]}</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-outline-variant/20">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-start transition-colors ${
                item.striped
                  ? 'bg-surface-container-low/30 hover:bg-surface-container-low/70'
                  : 'hover:bg-surface-container-low/50'
              }`}
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xs font-bold text-primary tabular-nums">{item.period}</span>
                <span className="block font-mono text-[11px] text-on-surface-variant">{item.status[lang]}</span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-[18px] font-bold text-primary">{item.role}</h3>
                <p
                  className={`font-mono text-xs mt-0.5 ${
                    item.badgeStyle === 'secondary' ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  {item.organization}
                </p>
              </div>

              <div className="md:col-span-4 font-editorial text-[16px] leading-relaxed text-on-surface-variant">
                {item.description[lang]}
              </div>

              <div className="md:col-span-2 md:text-right">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full font-mono text-[10px] uppercase font-bold ${
                    item.badgeStyle === 'secondary'
                      ? 'bg-secondary-fixed text-secondary'
                      : 'bg-tertiary-fixed text-primary'
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
