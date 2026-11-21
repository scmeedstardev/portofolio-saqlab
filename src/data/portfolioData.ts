export type Language = 'id' | 'en';

export type SkillCategory = 'languages' | 'frameworks' | 'domains';

export interface OrbitSpecialty {
  id: string;
  emoji: string;
  title: string;
  subtitle: Record<Language, string>;
  positionClass: string;
  badgeBgClass: string;
}

export interface SkillCardData {
  id: string;
  index: string;
  category: SkillCategory;
  kicker: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: { label: string; highlighted?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  status: Record<Language, string>;
  role: string;
  organization: string;
  description: Record<Language, string>;
  badge: string;
  badgeStyle: 'secondary' | 'tertiary';
  striped?: boolean;
}

export interface SimulatorPreset {
  id: string;
  label: string;
  filename: string;
  skills: string[];
  targetDomain: Record<Language, string>;
  compatibility: Record<Language, string>;
  baseScore: number;
}

export const ASSETS = {
  logoUrl:
    'https://lh3.googleusercontent.com/aida/ALJJyrCK2udGy_9sgN1-DcfYOL6HcKCqoi1qxBOpBbWZZw7MIb0h3qFIqrRjFyDwVasG2BxHSQ_md7l-5TkeFA87eue6V85S3Khx7gdGk3_dCqktBQT7qFHXbuX_Gh0zIrLvEnQb1CnTzJQL3Vm6pcpyi8ujzzk_RSnbbQeG4CebYmpJ27lrrzJc2_y4WZT0h7bnp3glXwdRH9s-fywbbyg6hhS2xGAk_WGDdK4rc4CIotb2',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqBJ7VboRz15EtOMScB8AdF8nhWdGdwBZQWoev3nTSSgzLVdAbqsc-GQgFWeiJ7IqLrZRmTn-7ZYVPlf309kn3wts6ezLejBK5P_Ooar3Eo9X7GgmnXPzHPEmx7XDP5emyG_lY0Fko6_v9fh2oUsNnFLNwuk-mqBd9zKQMedOfR1OOnEJT5KFOUHIOavvwaoJ_tls4PFFby-KcKhRdyGQ6YXV1cBdxUEeKJqGrzg0psYoljGFVOGrH',
};

export const LINKS = {
  github: 'https://github.com/ZygmaCore',
  personalGithub: 'https://github.com/scmeedstardev',
  linkedin: 'https://www.linkedin.com/in/dimas-sakti-satar',
  josjobRepo: 'https://github.com/ZygmaCore/JosJob',
  josjobLive: 'https://dev.mzkrl.my.id',
  whatsapp: 'https://wa.me/6285111438998',
  phoneRaw: '085111438998',
  phoneFormatted: '0851-1143-8998',
  email: 'dimassatar2007@gmail.com',
};

export const ORBIT_SPECIALTIES: OrbitSpecialty[] = [
  {
    id: 'swe',
    emoji: '⚡',
    title: 'Software Eng',
    subtitle: {
      id: 'Algoritma & desain arsitektur bersih',
      en: 'Algorithms & clean architecture design',
    },
    positionClass: 'top-8 sm:top-14 left-2 sm:left-6',
    badgeBgClass: 'bg-tertiary-fixed text-primary',
  },
  {
    id: 'fullstack',
    emoji: '🧩',
    title: 'Full-Stack Dev',
    subtitle: {
      id: 'Solusi web & mobile end-to-end',
      en: 'End-to-end web & mobile solutions',
    },
    positionClass: 'top-44 sm:top-56 left-0 sm:left-4',
    badgeBgClass: 'bg-secondary-fixed text-secondary',
  },
  {
    id: 'devops',
    emoji: '⚙️',
    title: 'DevOps',
    subtitle: {
      id: 'CI/CD, server Linux & otomasi pipeline',
      en: 'CI/CD, Linux servers & automated pipelines',
    },
    positionClass: 'top-10 sm:top-16 right-2 sm:right-6',
    badgeBgClass: 'bg-surface-container-high text-primary',
  },
  {
    id: 'arch',
    emoji: '🗺️',
    title: 'Software Architecture',
    subtitle: {
      id: 'Sistem LLM cerdas & logika analitik',
      en: 'Intelligent LLM systems & analytics logic',
    },
    positionClass: 'top-48 sm:top-60 right-0 sm:right-4',
    badgeBgClass: 'bg-surface-variant text-on-surface',
  },
];

export const TERMINAL_LOGS: Record<Language, string[]> = {
  id: [
    'Status: Mengeksplorasi Elixir, pipeline AI & sistem backend yang skalabel.',
    'Sedang membangun: JosJob — pencocokan karier berbasis AI untuk fresh graduates.',
    "Fun fact: 'Samid' adalah kebalikan dari kata 'Dimas'.",
    'Stack radar: Flutter + PostgreSQL + concurrency engine Elixir.',
    'Lokasi: Jakarta Timur, Indonesia. Terbuka untuk kolaborasi.',
  ],
  en: [
    'Status: Exploring Elixir, AI pipelines & scalable backend systems.',
    'Currently building: JosJob — AI career matcher for fresh graduates.',
    "Fun fact: 'Samid' is just 'Dimas' spelled backwards.",
    'Stack radar: Flutter + PostgreSQL + Elixir concurrency engine.',
    'Location: Jakarta Timur, Indonesia. Open for collaboration.',
  ],
};

export const SKILL_CARDS: SkillCardData[] = [
  {
    id: 'languages',
    index: '01',
    category: 'languages',
    kicker: 'CORE LANGUAGES',
    title: { id: 'Languages', en: 'Languages' },
    description: {
      id: 'Dari logika sistem prosedural hingga paradigma web konkuren dan reaktif.',
      en: 'From procedural system logic to concurrent and reactive web paradigms.',
    },
    items: [
      { label: 'C++' },
      { label: 'Java' },
      { label: 'Python' },
      { label: 'JavaScript' },
    ],
  },
  {
    id: 'frameworks',
    index: '02',
    category: 'frameworks',
    kicker: 'STACK & STORAGE',
    title: { id: 'Frameworks & DB', en: 'Frameworks & DB' },
    description: {
      id: 'Aplikasi klien multi-platform yang terhubung dengan integritas data relasional.',
      en: 'Multi-platform client apps coupled with relational data integrity.',
    },
    items: [
      { label: 'Flutter' },
      { label: 'PostgreSQL' },
      { label: 'RESTful APIs' },
      { label: 'JSON Relational' },
    ],
  },
  {
    id: 'devops',
    index: '03',
    category: 'frameworks',
    kicker: 'INFRASTRUCTURE',
    title: { id: 'DevOps & Tools', en: 'DevOps & Tools' },
    description: {
      id: 'Kontrol versi, pengiriman berkelanjutan otomatis, dan operasi server Linux.',
      en: 'Version control, automated continuous delivery, and Linux server operations.',
    },
    items: [
      { label: 'Git & GitHub' },
      { label: 'Linux Terminal' },
      { label: 'CI/CD Workflows' },
      { label: 'Bash Scripting' },
    ],
  },
  {
    id: 'domains',
    index: '04',
    category: 'domains',
    kicker: 'ENGINEERING FOCUS',
    title: { id: 'Specializations', en: 'Specializations' },
    description: {
      id: 'Metodologi rekayasa sistematis yang dipadukan dengan alur kerja AI modern.',
      en: 'Systematic engineering methodology combined with modern AI workflows.',
    },
    items: [
      { label: 'Software Architecture' },
      { label: 'Full-Stack Dev' },
      { label: 'DevOps Eng' },
      { label: 'AI & Data Pipeline', highlighted: true },
    ],
  },
];

export const SOFT_SKILLS = [
  'Communication',
  'Problem Solving',
  'Teamwork',
  'Critical Thinking',
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'csfest',
    period: '2026',
    status: { id: 'Aktif', en: 'Active' },
    role: 'Staff Divisi Kreatif',
    organization: 'CSFEST 2026 — Politeknik Negeri Jakarta',
    description: {
      id: 'Merumuskan konsep visual, identitas artistik, dan aset digital interaktif untuk festival teknologi tahunan di tingkat universitas. Mengkoordinasikan integrasi branding visual dengan platform promosi digital.',
      en: 'Formulated visual concepts, artistic identity, and interactive digital assets for the annual university technology festival. Coordinated visual branding integration across digital promotion platforms.',
    },
    badge: 'CAMPUS ORG',
    badgeStyle: 'secondary',
  },
  {
    id: 'pnj',
    period: '2026 – 2030',
    status: { id: 'Mahasiswa S1', en: 'Undergraduate' },
    role: 'Informatics Engineering Student',
    organization: 'Politeknik Negeri Jakarta (PNJ)',
    description: {
      id: 'Menempuh kurikulum mendalam teknik informatika terapan, mendalami rekayasa sistem berskala besar, optimasi algoritma, arsitektur basis data, serta riset implementasi AI dan otomasi cloud.',
      en: 'Pursuing an applied informatics engineering curriculum focused on large-scale system engineering, algorithm optimization, database architecture, and practical AI & cloud automation research.',
    },
    badge: 'ACADEMIC',
    badgeStyle: 'tertiary',
    striped: true,
  },
];

export const ALL_SIMULATOR_SKILLS = [
  'Elixir',
  'PostgreSQL',
  'Flutter',
  'JavaScript',
  'Python',
  'CI/CD',
  'Architecture',
  'LLM RAG',
];

export const SIMULATOR_PRESETS: SimulatorPreset[] = [
  {
    id: 'dimas',
    label: 'Dimas (Full-Stack)',
    filename: 'resume_dimas.pdf',
    skills: ['Elixir', 'PostgreSQL', 'Flutter', 'Architecture'],
    targetDomain: {
      id: 'Backend & Full-Stack',
      en: 'Backend & Full-Stack',
    },
    compatibility: {
      id: 'Kompatibilitas Tinggi',
      en: 'Senior Compatibility',
    },
    baseScore: 94,
  },
  {
    id: 'backend',
    label: 'Backend Systems',
    filename: 'cv_elixir_systems.pdf',
    skills: ['Elixir', 'PostgreSQL', 'CI/CD', 'Architecture'],
    targetDomain: {
      id: 'Distributed Systems & API',
      en: 'Distributed Systems & API',
    },
    compatibility: {
      id: 'Kecocokan Inti',
      en: 'Core Architecture Fit',
    },
    baseScore: 96,
  },
  {
    id: 'mobile',
    label: 'AI & Mobile',
    filename: 'portfolio_flutter_ai.pdf',
    skills: ['Flutter', 'Python', 'JavaScript', 'LLM RAG'],
    targetDomain: {
      id: 'Mobile Client & AI',
      en: 'Mobile Client & AI',
    },
    compatibility: {
      id: 'Kesiapan Produk',
      en: 'Product-Ready Match',
    },
    baseScore: 91,
  },
];

export const COPY = {
  nav: {
    about: { id: 'Tentang', en: 'About' },
    skills: { id: 'Keahlian', en: 'Skills' },
    experience: { id: 'Pengalaman', en: 'Experience' },
    projects: { id: 'Proyek', en: 'Projects' },
    sayHello: { id: 'Say hello', en: 'Say hello' },
  },
  hero: {
    reverseHint: { id: 'Klik untuk balik nama', en: 'Click to reverse name' },
    statusTag: 'student_STATUS: ACTIVE',
    programTag: "PNJ INFORMATICS '26",
    headline: {
      id: 'Saya siap membangun produk & sistem skalabel, serta menyelesaikan berbagai tantangan teknologi',
      en: 'Ready to build scalable products & systems, and solve diverse engineering challenges',
    },
    exploreProjects: { id: 'Lihat Proyek', en: 'Explore Projects' },
    subMeta: {
      id: "Politeknik Negeri Jakarta '26 · Fokus Full-Stack & AI · Jakarta Timur, ID",
      en: "Politeknik Negeri Jakarta '26 · Full-Stack & AI Focus · Jakarta Timur, ID",
    },
    profileEyebrow: { id: 'PROFIL REKAYASA', en: 'ENGINEERING PROFILE' },
    profileTitle: 'SOFTWARE & FULL-STACK',
    profileDesc: {
      id: 'Mahasiswa Teknik Informatika di Politeknik Negeri Jakarta yang membangun solusi digital end-to-end, dari arsitektur backend tangguh hingga antarmuka mobile reaktif.',
      en: 'Informatics undergrad at Politeknik Negeri Jakarta crafting end-to-end digital solutions from robust backend architectures to reactive mobile interfaces.',
    },
    clockSub: 'JAKARTA TIMUR, ID · GMT+7',
  },
  about: {
    kicker: '[ 01 / ABOUT ME ]',
    headingPrefix: {
      id: 'Halo, saya Dimas — orang-orang memanggil saya ',
      en: "Hi, I'm Dimas — people call me ",
    },
    p1: {
      id: 'Mahasiswa S1 Terapan Teknik Informatika di Politeknik Negeri Jakarta (2026–2030) yang memiliki ketertarikan mendalam pada Software Engineering, arsitektur sistem, serta pemecahan masalah berbasis data dan algoritma.',
      en: 'Applied Informatics Engineering undergraduate at Politeknik Negeri Jakarta (2026–2030) with a deep focus on Software Engineering, system architecture, and data-driven algorithmic problem solving.',
    },
    p2: {
      id: 'Saya antusias membangun solusi digital secara end-to-end—mulai dari Full-Stack Development dan otomasi DevOps Engineering hingga integrasi kecerdasan buatan (AI) untuk menciptakan produk yang berdampak nyata.',
      en: 'I build end-to-end digital solutions—spanning Full-Stack Development, automated DevOps Engineering pipelines, and applied AI integration to ship products with real-world impact.',
    },
    identity: {
      locationLabel: { id: 'Lokasi Basis', en: 'Base Location' },
      focusLabel: { id: 'Fokus Utama', en: 'Primary Focus' },
      availabilityLabel: { id: 'Ketersediaan', en: 'Availability' },
      availabilityValue: { id: 'Terbuka untuk Kolaborasi', en: 'Open to Collabs' },
    },
    terminal: {
      host: 'samid@pnj-dev:~$',
      badge: 'LOG_STREAM',
      reversible: '100% REVERSIBLE · DIMAS ⇄ SAMID',
      nextBtn: { id: 'Log berikutnya ↻', en: 'Next log ↻' },
    },
    education: {
      badge: 'EDUCATION',
      period: '2026 – 2030',
      degree: 'S1 Teknik Informatika',
      school: 'Politeknik Negeri Jakarta (PNJ)',
      desc: {
        id: 'Fokus pada rekayasa perangkat lunak, sistem komputasi terdistribusi, struktur data algoritma, serta riset penerapan machine learning praktis.',
        en: 'Focused on software engineering, distributed computing systems, data structures & algorithms, and practical machine learning research.',
      },
      courses: [
        'Data Structures',
        'Software Architecture',
        'Database Systems',
        'AI & ML',
      ],
    },
  },
  skills: {
    kicker: '[ 02 / CAPABILITIES ]',
    titlePrefix: 'TECHNICAL ',
    titleItalic: 'Toolkit.',
    filters: {
      all: { id: 'Semua', en: 'All' },
      languages: { id: 'Bahasa', en: 'Languages' },
      frameworks: { id: 'Framework & DB', en: 'Frameworks & DB' },
      domains: { id: 'Domain', en: 'Domains' },
    },
    softTitle: 'AGENCY & COLLABORATION',
    softSubtitle: {
      id: 'Kompetensi non-teknis utama yang mendorong eksekusi proyek',
      en: 'Core non-technical competencies driving project execution',
    },
  },
  experience: {
    kicker: '[ 03 / EXPERIENCE ]',
    titlePrefix: 'EXPERIENCE & ',
    titleItalic: 'Involvement.',
    subtitle: {
      id: 'Rekam jejak akademik, kepemimpinan, dan eksekusi kreatif institusional.',
      en: 'Academic trajectory, leadership, and institutional creative execution.',
    },
    tableHeader: {
      period: { id: 'Periode', en: 'Period' },
      role: { id: 'Peran & Institusi', en: 'Role & Institution' },
      summary: { id: 'Ringkasan Kontribusi', en: 'Contribution Summary' },
      category: { id: 'Kategori', en: 'Category' },
    },
  },
  projects: {
    kicker: '[ 04 / SELECTED WORK ]',
    titlePrefix: 'FEATURED ',
    titleItalic: 'Project.',
    subtitle: {
      id: 'Platform siap produksi yang dibangun dengan arsitektur terstruktur dan orientasi pemecahan masalah.',
      en: 'Production-grade platforms built with rigorous architecture and user-focused problem solving.',
    },
    badgePrimary: 'AI CAREER PLATFORM',
    badgeSecondary: 'FULL-STACK & MOBILE',
    description: {
      id: 'Platform cerdas pendamping karier berbasis AI yang dirancang untuk menjembatani lulusan baru (fresh graduates) dengan industri. Menganalisis kurikulum vitae secara semantik, memetakan kompetensi riil, dan merekomendasikan lowongan pekerjaan dengan akurasi tinggi.',
      en: 'An intelligent AI-powered career companion engineered to bridge fresh graduates with industry roles. Semantically parses resumes, maps verified competencies, and recommends high-fit job openings with probabilistic scoring.',
    },
    highlights: {
      id: [
        {
          title: 'Automated CV Intelligence:',
          body: 'Ekstraksi token kompetensi otomatis dengan validasi data probabilistik.',
        },
        {
          title: 'Competency & Skill Mapping:',
          body: 'Klasifikasi kesenjangan skill pengguna terhadap standar industri terkini.',
        },
        {
          title: 'Smart Role & Company Matching:',
          body: 'Algoritma rekomendasi multi-parameter untuk keselarasan karir optimal.',
        },
      ],
      en: [
        {
          title: 'Automated CV Intelligence:',
          body: 'Automated competency token extraction with probabilistic data validation.',
        },
        {
          title: 'Competency & Skill Mapping:',
          body: 'Skill-gap classification bench-marked against current industry standards.',
        },
        {
          title: 'Smart Role & Company Matching:',
          body: 'Multi-parameter recommendation engine for optimal career alignment.',
        },
      ],
    },
    stackLabel: 'ENGINEERING STACK',
    liveDemo: { id: 'Live Demo', en: 'Live Demo' },
    sourceCode: { id: 'Source Code (GitHub)', en: 'Source Code (GitHub)' },
    simulator: {
      title: 'AI MATCH SIMULATOR',
      modelBadge: 'MODEL v2.4',
      presetLabel: { id: 'Pilih Profil Kandidat', en: 'Candidate Preset' },
      skillsLabel: { id: 'Token Kompetensi Aktif', en: 'Active Skill Tokens' },
      matchLabel: { id: 'Rekomendasi Kecocokan Peran', en: 'Recommended Role Match' },
      runBtn: { id: 'Jalankan Simulasi Scan CV', en: 'Run Sample CV Scan' },
      scanningBtn: { id: 'Memindai Token CV...', en: 'Scanning CV Tokens...' },
    },
  },
  footer: {
    kicker: '[ 05 / INITIATE CONTACT ]',
    headlinePrefix: "LET'S BUILD SOMETHING ",
    headlineItalic: 'meaningful.',
    description: {
      id: 'Tertarik berkolaborasi dalam proyek software engineering, full-stack application, pengembangan AI, atau peluang rekrutmen teknologi? Jalur komunikasi saya selalu terbuka.',
      en: 'Interested in collaborating on software engineering, full-stack applications, AI systems, or tech recruitment opportunities? My communication channels are always open.',
    },
    actions: {
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
      contactPerson: 'CONTACT PERSON',
    },
    copyright: {
      id: '© 2026 Dimas Sakti Satarsyah. Dibangun dengan presisi Swiss & eksekusi high-agency.',
      en: '© 2026 Dimas Sakti Satarsyah. Built with Swiss precision & high agency craft.',
    },
  },
  modal: {
    kicker: '[ DIRECT INQUIRY ]',
    title: { id: 'Kirim Pesan ke Samid', en: 'Send a Message to Samid' },
    subtitle: {
      id: 'Diskusikan proyek, kolaborasi riset, atau peluang magang/rekayasa perangkat lunak.',
      en: 'Discuss engineering projects, AI collaborations, or internship and software roles.',
    },
    nameLabel: { id: 'Nama Lengkap', en: 'Your Name' },
    namePlaceholder: { id: 'cth. Budi Santoso', en: 'e.g. Alex Rivera' },
    emailLabel: { id: 'Alamat Email', en: 'Email Address' },
    emailPlaceholder: 'you@company.com',
    topicLabel: { id: 'Topik Kolaborasi', en: 'Inquiry Topic' },
    topics: {
      id: ['Proyek Full-Stack / Mobile', 'Pengembangan AI & Data', 'Rekrutmen / Magang', 'Kolaborasi Kampus / Umum'],
      en: ['Full-Stack / Mobile Project', 'AI & Data Engineering', 'Tech Recruitment / Internship', 'Campus / General Inquiry'],
    },
    messageLabel: { id: 'Detail Pesan', en: 'Message Details' },
    messagePlaceholder: {
      id: 'Ceritakan kebutuhan atau ide proyek Anda...',
      en: 'Tell me about your project scope, role, or idea...',
    },
    submitBtn: { id: 'Kirim Pesan', en: 'Send Inquiry' },
    directAlt: { id: 'Atau hubungi langsung via:', en: 'Or reach out directly via:' },
    sentTitle: { id: 'Pesan Terkirim!', en: 'Inquiry Dispatched!' },
    sentDesc: {
      id: 'Terima kasih telah menghubungi. Anda juga dapat langsung melanjutkan percakapan lewat WhatsApp atau email.',
      en: 'Thank you for reaching out. You can also continue the conversation immediately via WhatsApp or email.',
    },
    sendAnother: { id: 'Kirim Pesan Lain', en: 'Send Another Message' },
  },
};
