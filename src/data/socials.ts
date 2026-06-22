export interface Social {
  name: string;
  url: string;
  icon: string; // inline SVG path data is resolved in the Socials component
}

export const socials: Social[] = [
  { name: "Email", url: "mailto:tonydragon27@gmail.com", icon: "email" },
  { name: "GitHub", url: "https://github.com/smpark00", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/seungmin-park-7405652a9",
    icon: "linkedin",
  },
  // Add once available:
  // { name: "Google Scholar", url: "", icon: "scholar" },
  // { name: "ORCID", url: "", icon: "orcid" },
];
