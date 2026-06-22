export interface PubLink {
  label: string;
  url: string;
}

export interface Publication {
  key: string;
  title: string;
  authors: string; // "Seungmin Park" is bolded by the component
  venue: string;
  year: number;
  abbr: string; // venue badge
  selected?: boolean;
  award?: string; // e.g. "🏆 Best Paper Award"
  note?: string; // e.g. authorship / status note
  links?: PubLink[];
}

export const SELF_AUTHOR = "Seungmin Park";

export const publications: Publication[] = [
  {
    key: "park2026neuromap",
    title:
      "Single-Cell Transcriptomic Dissection of Peripheral Immunity Reveals Stage-Specific Signatures in Alzheimer's Disease: The NeuroMap Platform",
    authors:
      "Seungmin Park, Angela Galdamez, Dohyup Kim, Yongjin Yoo, PathoBrainSeq R&D Team, Goonho Park",
    venue: "International Conference on Alzheimer's and Parkinson's Diseases (ADPD)",
    year: 2026,
    abbr: "ADPD",
    selected: true,
    note: "Poster presentation introducing the NeuroMap platform.",
  },
  {
    key: "park2025rag",
    title:
      "RAG-Based LLMs for Performance Evaluation and Knowledge Transfer in Software Projects",
    authors: "Seungmin Park, Ryeonggu Kwon, Gihwon Kwon, Changyul Lee",
    venue: "Korea Conference on Software Engineering (KCSE)",
    year: 2025,
    abbr: "KCSE",
    selected: true,
    award: "🏆 Best Paper Award — Open Competition (all researcher categories)",
  },
  {
    key: "park2025esg",
    title:
      "A Study of Dynamic K-Selection and Autoencoder-Based ESG Improvement Activity Recommendation System",
    authors:
      "Seungmin Park, Minji Kang, Yuchan Kim, Haeyeon Kim, Seokyoung Choi, Seonguk Kim, Hanyong Lee",
    venue: "Korean Institute of Information Technology (KIIT) Spring Conference",
    year: 2025,
    abbr: "KIIT",
    award: "🥇 Gold Award — Undergraduate Research Paper Competition",
  },
  {
    key: "park2024chatbot",
    title: "LLM-Based Chatbot for Software Project Performance Analysis",
    authors: "Seungmin Park, Suhee Jo, Ryeonggu Kwon, Gihwon Kwon, Changyul Lee",
    venue: "Korean Institute of Information Technology (KIIT) Autumn Conference",
    year: 2024,
    abbr: "KIIT",
  },
  {
    key: "jo2024piqa",
    title:
      "Evaluating Privacy Infringement Level in Drone-Captured Images Using Privacy Image Quality Assessment (PIQA) Algorithms",
    authors:
      "Joonyoung Jo, Seungmin Park, Heesung Kim, Jena Lee, Hyeokju Lee, Catherine Morales, Changjun Kim, Eric T. Matson",
    venue: "Unpublished manuscript",
    year: 2024,
    abbr: "Preprint",
    note: "Second author; completed as a Visiting Scholar at Purdue University.",
  },
];

export const selectedPublications = publications.filter((p) => p.selected);
