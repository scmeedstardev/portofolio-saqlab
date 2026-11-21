import { useState } from 'react';
import { Brain } from 'lucide-react';
import { COPY, SKILL_CARDS, SOFT_SKILLS, type Language, type SkillCategory } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: Language;
}

type FilterOption = 'all' | SkillCategory;

export function SkillsSection({ lang }: SkillsSectionProps) {
  const [filter, setFilter] = useState<FilterOption>('all');

  const filterButtons: { key: FilterOption; label: string }[] = [
    { key: 'all', label: COPY.skills.filters.all[lang] },
    { key: 'languages', label: COPY.skills.filters.languages[lang] },
    { key: 'frameworks', label: COPY.skills.filters.frameworks[lang] },
    { key: 'domains', label: COPY.skills.filters.domains[lang] },
  ];

  const visibleCards =
    filter === 'all' ? SKILL_CARDS : SKILL_CARDS.filter((card) => card.category === filter);

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-widest">
              {COPY.skills.kicker}
            </span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[32px] font-bold text-primary tracking-tight">
            {COPY.skills.titlePrefix}
            <span className="font-editorial text-[36px] sm:text-[48px] italic font-normal lowercase">
              {COPY.skills.titleItalic}
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5 bg-surface-container-low p-1.5 rounded-lg border border-outline-variant/25">
          {filterButtons.map((btn) => {
            const isActive = filter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                onClick={() => setFilter(btn.key)}
                className={`px-3 py-1.5 rounded font-mono text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/25 flex flex-col justify-between gap-6 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary font-bold">
                  {card.kicker}
                </span>
                <span className="font-mono text-xs text-on-surface-variant tabular-nums">
                  {card.index}
                </span>
              </div>
              <h3 className="font-display text-[22px] font-bold text-primary mb-2">
                {card.title[lang]}
              </h3>
              <p className="font-editorial text-[16px] leading-relaxed text-on-surface-variant">
                {card.description[lang]}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {card.items.map((item) => (
                <span
                  key={item.label}
                  className={`px-2.5 py-1 rounded font-mono text-xs ${
                    item.highlighted
                      ? 'bg-tertiary-fixed text-primary font-bold'
                      : 'bg-surface-container text-primary font-semibold'
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Inset Bar */}
      <div className="mt-6 p-6 rounded-lg bg-surface-container-low shadow-inner border border-outline-variant/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-secondary shrink-0" />
          <div>
            <h4 className="font-display text-sm font-bold text-primary">{COPY.skills.softTitle}</h4>
            <p className="font-mono text-[11px] text-on-surface-variant">
              {COPY.skills.softSubtitle[lang]}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {SOFT_SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant/20 font-mono text-xs text-primary font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
