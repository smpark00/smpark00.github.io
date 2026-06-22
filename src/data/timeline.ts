export interface TimelineEntry {
  title: string;
  institution: string;
  institutionUrl?: string;
  location?: string;
  year: string;
  initials: string; // fallback avatar when no logo file is present
  logo?: string; // e.g. "/logos/gridatech.png" — optional, falls back to initials
  bullets?: string[]; // may contain inline <em>
}

export interface TimelineSection {
  emoji: string;
  title: string;
  entries: TimelineEntry[];
}

export const timeline: TimelineSection[] = [
  {
    emoji: "💼",
    title: "Experience",
    entries: [
      {
        title: "Research Engineer",
        institution: "Gridatech Inc.",
        institutionUrl: "https://www.grida.tech/",
        location: "Busan, South Korea",
        year: "Sep 2025 — Present",
        initials: "G",
        logo: "/logos/gridatech.png",
        bullets: [
          "Fine-tuned a Gemma 4 31B model into a nursing-domain clinical LLM (<em>Shuri</em>), building the training corpus from scratch by OCR-digitizing nursing textbooks into paired text/image datasets.",
          "Built <em>ShuShu</em>, a hybrid OCR pipeline for health-checkup forms: benchmarked DeepSeek-OCR, PaddleOCR, and Docling per table layout, routed each form to the best-performing engine, and generated personalized health reports.",
          "Developed <em>Shulingo</em>, an end-to-end real-time speech-to-speech translation service using a RAG-based agent to recognize and translate nursing terminology and abbreviations that general models miss.",
        ],
      },
      {
        title: "Data Analyst Intern",
        institution: "PathoBrainSeq",
        institutionUrl: "https://www.pathobrainseq.com/",
        location: "Palo Alto, USA",
        year: "Feb 2025 — Sep 2025",
        initials: "P",
        logo: "/logos/pathobrainseq.png",
        bullets: [
          "Processed single-cell RNA/DNA sequencing data from Alzheimer's Disease patients in R — applied Harmony integration to correct cross-donor batch effects and produced UMAP/t-SNE visualizations and statistical summaries.",
          "Delivered analysis-ready outputs (heatmaps, statistical tables, summary spreadsheets) feeding downstream peripheral immune-signature analysis.",
          "First-authored a poster at ADPD 2026 introducing the NeuroMap platform.",
        ],
      },
    ],
  },
  {
    emoji: "🔬",
    title: "Research",
    entries: [
      {
        title: "Undergraduate Research Intern",
        institution: "SELAB, Kyonggi University",
        institutionUrl: "https://sites.google.com/view/safetysw",
        location: "Suwon, South Korea",
        year: "Oct 2024 — Feb 2025",
        initials: "S",
        logo: "/logos/kyonggi.svg",
        bullets: [
          "Built a RAG-based LLM system for a corporate R&D project, vectorizing GitHub development-process data to mitigate knowledge loss caused by high employee turnover.",
          "Authored two first-author papers from this work; one received the Best Paper Award at KCSE 2025 (open competition, all researcher categories).",
        ],
      },
      {
        title: "Visiting Scholar, IITP Global Education Program",
        institution: "Purdue University",
        institutionUrl: "https://www.purdue.edu/",
        location: "West Lafayette, USA",
        year: "Mar 2024 — Jun 2024",
        initials: "P",
        logo: "/logos/purdue.svg",
        bullets: [
          "Developed a framework to classify privacy-infringement levels in drone-captured images using Privacy Image Quality Assessment (PIQA) algorithms.",
          "Contributed as the second author to the resulting manuscript on privacy assessment for drone imagery.",
        ],
      },
    ],
  },
  {
    emoji: "🎓",
    title: "Education",
    entries: [
      {
        title: "B.S. in Computer Engineering",
        institution: "Kyonggi University",
        institutionUrl: "https://www.kyonggi.ac.kr/",
        location: "Suwon, South Korea",
        year: "Mar 2019 — Feb 2026",
        initials: "K",
        logo: "/logos/kyonggi.svg",
        bullets: ["GPA 3.9 / 4.5", "Department of Computer Engineering"],
      },
    ],
  },
];
