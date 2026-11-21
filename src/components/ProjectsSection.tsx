import { useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import {
  ALL_SIMULATOR_SKILLS,
  COPY,
  LINKS,
  SIMULATOR_PRESETS,
  type Language,
  type SimulatorPreset,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
}

const JOSJOB_STACK = ['Elixir', 'JavaScript', 'PostgreSQL', 'Flutter'];

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(SIMULATOR_PRESETS[0].id);
  const [activeSkills, setActiveSkills] = useState<string[]>(SIMULATOR_PRESETS[0].skills);
  const [isScanning, setIsScanning] = useState(false);
  const [matchScore, setMatchScore] = useState(94);
  const [consoleLines, setConsoleLines] = useState<
    { text: string; tone?: 'muted' | 'lime' | 'vermilion' | 'default' }[]
  >([
    { text: '// Ready for sample analysis', tone: 'muted' },
    { text: '$ josjob --parse resume_dimas.pdf', tone: 'default' },
    { text: 'Parsed 28 competency tokens...', tone: 'lime' },
    { text: 'Found: [Elixir, PostgreSQL, Flutter, Architecture]', tone: 'default' },
    { text: 'Status: Idle. Select skills or click below to scan.', tone: 'vermilion' },
  ]);

  const timersRef = useRef<number[]>([]);
  const consoleRef = useRef<HTMLDivElement>(null);

  const activePreset: SimulatorPreset =
    SIMULATOR_PRESETS.find((p) => p.id === selectedPresetId) || SIMULATOR_PRESETS[0];

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [consoleLines]);

  const handleSelectPreset = (preset: SimulatorPreset) => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    setIsScanning(false);
    setSelectedPresetId(preset.id);
    setActiveSkills(preset.skills);
    setMatchScore(preset.baseScore);
    setConsoleLines([
      { text: `// Loaded profile preset: ${preset.label}`, tone: 'muted' },
      { text: `$ josjob --parse ${preset.filename}`, tone: 'default' },
      { text: `Active tokens: [${preset.skills.join(', ')}]`, tone: 'lime' },
      { text: 'Status: Ready to simulate probabilistic vector match.', tone: 'vermilion' },
    ]);
  };

  const handleToggleSkill = (skill: string) => {
    if (isScanning) return;
    setActiveSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.length > 1 ? prev.filter((s) => s !== skill) : prev;
      }
      return [...prev, skill];
    });
  };

  const computeDynamicMatch = (skills: string[], preset: SimulatorPreset) => {
    const coreBonus = skills.filter((s) => ['Elixir', 'PostgreSQL', 'Flutter', 'Architecture'].includes(s)).length * 2;
    const extraBonus = Math.min(skills.length, 6) * 2;
    const raw = Math.min(98, Math.max(74, preset.baseScore - 10 + coreBonus + extraBonus));
    return raw;
  };

  const handleRunScan = () => {
    if (isScanning) return;
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    setIsScanning(true);

    const targetScore = computeDynamicMatch(activeSkills, activePreset);
    const tokenCount = 16 + activeSkills.length * 4;

    setConsoleLines([
      { text: '// Initializing AST competency parser...', tone: 'lime' },
      { text: `$ josjob --parse ${activePreset.filename} --strict`, tone: 'default' },
    ]);

    const t1 = window.setTimeout(() => {
      setConsoleLines((prev) => [
        ...prev,
        { text: `Extracted ${tokenCount} tokens -> [${activeSkills.join(', ')}]`, tone: 'default' },
      ]);
    }, 220);

    const t2 = window.setTimeout(() => {
      setConsoleLines((prev) => [
        ...prev,
        {
          text: `Computing cosine similarity vs ${activePreset.targetDomain.en} spec...`,
          tone: 'muted',
        },
      ]);
    }, 480);

    const t3 = window.setTimeout(() => {
      setMatchScore(targetScore);
      setConsoleLines((prev) => [
        ...prev,
        {
          text: `Analysis complete. ${targetScore}.4% role alignment verified.`,
          tone: 'vermilion',
        },
      ]);
      setIsScanning(false);
    }, 760);

    timersRef.current = [t1, t2, t3];
  };

  const getDynamicDomain = () => {
    if (activeSkills.includes('LLM RAG') || activeSkills.includes('Python')) {
      return lang === 'id' ? 'AI Engineering & Full-Stack' : 'AI Engineering & Full-Stack';
    }
    return activePreset.targetDomain[lang];
  };

  const getToneClass = (tone?: string) => {
    switch (tone) {
      case 'muted':
        return 'text-on-primary-container';
      case 'lime':
        return 'text-tertiary-fixed-dim';
      case 'vermilion':
        return 'text-secondary-fixed';
      default:
        return 'text-surface';
    }
  };

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-widest">
              {COPY.projects.kicker}
            </span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[32px] font-bold text-primary tracking-tight">
            {COPY.projects.titlePrefix}
            <span className="font-editorial text-[36px] sm:text-[48px] italic font-normal lowercase">
              {COPY.projects.titleItalic}
            </span>
          </h2>
        </div>

        <p className="font-mono text-[13px] text-on-surface-variant max-w-md">
          {COPY.projects.subtitle[lang]}
        </p>
      </div>

      {/* Featured JosJob Showcase Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/25 overflow-hidden">
        {/* Browser Frame Bar */}
        <div className="bg-surface-container-low px-6 py-3.5 border-b border-outline-variant/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-outline-variant" />
            <span className="w-3 h-3 rounded-full bg-outline-variant" />
            <span className="w-3 h-3 rounded-full bg-outline-variant" />
            <span className="font-mono text-[11px] text-on-surface-variant ml-2 sm:ml-3 truncate">
              projects / zygmacore / josjob
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest font-mono text-[10px] font-bold text-secondary uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              <span>LIVE DEPLOYMENT</span>
            </span>
            <span className="font-mono text-[11px] text-on-surface-variant hidden sm:inline">
              dev.mzkrl.my.id
            </span>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left Project Details */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-secondary-fixed text-secondary font-mono text-[10px] uppercase font-bold tracking-wider">
                  {COPY.projects.badgePrimary}
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container font-mono text-[10px] text-on-surface uppercase font-bold tracking-wider">
                  {COPY.projects.badgeSecondary}
                </span>
              </div>

              <h3 className="font-display text-[36px] sm:text-[42px] leading-tight font-extrabold text-primary tracking-tight">
                JosJob
              </h3>

              <p className="font-editorial text-[19px] text-on-surface-variant leading-relaxed">
                {COPY.projects.description[lang]}
              </p>

              <div className="space-y-2.5 pt-2">
                {COPY.projects.highlights[lang].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold text-sm mt-0.5" aria-hidden="true">
                      ✦
                    </span>
                    <span className="font-editorial text-[16px] text-on-surface">
                      <strong className="font-bold text-primary">{item.title}</strong> {item.body}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-2">
                  {COPY.projects.stackLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {JOSJOB_STACK.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-surface-container font-mono text-xs font-semibold text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={LINKS.josjobLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>{COPY.projects.liveDemo[lang]}</span>
                <span>↗</span>
              </a>
              <a
                href={LINKS.josjobRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-surface-variant transition-all whitespace-nowrap"
              >
                <span>{COPY.projects.sourceCode[lang]}</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Interactive AI Match Simulator */}
          <div className="lg:col-span-5 bg-surface-container-low p-5 sm:p-6 rounded-lg border border-outline-variant/25 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {/* Simulator Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-primary">
                  {COPY.projects.simulator.title}
                </span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed font-mono text-[10px] text-primary font-bold">
                  {COPY.projects.simulator.modelBadge}
                </span>
              </div>

              {/* Candidate Preset Switcher */}
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1.5">
                  {COPY.projects.simulator.presetLabel[lang]}
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {SIMULATOR_PRESETS.map((preset) => {
                    const active = preset.id === selectedPresetId;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className={`px-2 py-1.5 rounded font-mono text-[10px] font-bold transition-all cursor-pointer truncate ${
                          active
                            ? 'bg-primary text-on-primary shadow-sm'
                            : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary border border-outline-variant/25'
                        }`}
                        title={preset.label}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skill Token Selector */}
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1.5">
                  {COPY.projects.simulator.skillsLabel[lang]}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_SIMULATOR_SKILLS.map((skill) => {
                    const selected = activeSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleToggleSkill(skill)}
                        className={`px-2 py-1 rounded font-mono text-[10px] font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-tertiary-fixed text-primary border border-on-tertiary-fixed-variant/30'
                            : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/25 hover:border-primary/40'
                        }`}
                      >
                        {selected ? `✓ ${skill}` : `+ ${skill}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Obsidian Console Output */}
              <div
                ref={consoleRef}
                className="bg-primary text-surface p-4 rounded font-mono text-[12px] space-y-1.5 h-40 overflow-y-auto"
              >
                {consoleLines.map((line, idx) => (
                  <div key={`${idx}-${line.text}`} className={getToneClass(line.tone)}>
                    {line.text}
                  </div>
                ))}
              </div>

              {/* Match Progress Bar */}
              <div className="p-3.5 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/20">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs text-on-surface-variant">
                    {COPY.projects.simulator.matchLabel[lang]}
                  </span>
                  <span className="font-display text-sm font-bold text-secondary tabular-nums">
                    {matchScore}% MATCH
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden mb-3">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${matchScore}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant gap-2">
                  <span className="truncate">Domain: {getDynamicDomain()}</span>
                  <span className="font-bold text-primary shrink-0">
                    {activePreset.compatibility[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Run Scan Button */}
            <button
              type="button"
              onClick={handleRunScan}
              disabled={isScanning}
              className="w-full py-2.5 rounded bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              <span>
                {isScanning
                  ? COPY.projects.simulator.scanningBtn[lang]
                  : COPY.projects.simulator.runBtn[lang]}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
