export interface NewsItem {
  date: string; // ISO date
  display: string; // human-friendly date
  html: string;
}

// Reverse-chronological. Sorted at render time too, but kept ordered here.
export const news: NewsItem[] = [
  {
    date: "2026-02-20",
    display: "Feb 2026",
    html: "🎓 Graduated with a <strong>B.S. in Computer Engineering</strong> from Kyonggi University (GPA 3.9/4.5).",
  },
  {
    date: "2025-09-01",
    display: "Sep 2025",
    html: '🏢 Joined <strong><a href="https://www.grida.tech/">Gridatech Inc.</a></strong> as a <strong>Research Engineer</strong>, building clinical and nursing-domain LLMs (Shuri, ShuShu, Shulingo).',
  },
  {
    date: "2025-02-03",
    display: "Feb 2025",
    html: '🔬 Started as a <strong>Data Analyst Intern</strong> at <a href="https://www.pathobrainseq.com/">PathoBrainSeq</a>, analyzing single-cell sequencing data for Alzheimer\'s research.',
  },
  {
    date: "2025-01-15",
    display: "Jan 2025",
    html: "🏆 Won the <strong>Best Paper Award</strong> at <strong>KCSE 2025</strong> (open competition, all researcher categories) for RAG-based LLMs for knowledge transfer in software projects.",
  },
  {
    date: "2025-01-07",
    display: "Jan 2025",
    html: "🚀 Led a student team at <strong>CES 2025</strong> and a Silicon Valley field study — visits and networking with <strong>Google</strong>, <strong>Stanford University</strong>, and <strong>UKF</strong>.",
  },
  {
    date: "2024-10-01",
    display: "Oct 2024",
    html: '🧪 Joined the <a href="https://sites.google.com/view/safetysw">Software Engineering Lab (SELAB)</a> at Kyonggi University as an <strong>Undergraduate Research Intern</strong>, building RAG-based LLM systems for knowledge transfer in software projects.',
  },
  {
    date: "2024-03-01",
    display: "Mar 2024",
    html: "🌎 Began a <strong>Visiting Scholar</strong> appointment at <strong>Purdue University</strong> (IITP Global Education Program), researching privacy assessment for drone-captured imagery (PIQA).",
  },
];
