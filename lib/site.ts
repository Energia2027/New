// Placeholder brand settings. Replace these once the client approves a name, logo and contact details.
export const site = {
  name: "Energy Advisory Company",
  shortName: "Energy Advisory",
  tagline: "Independent energy advisory for East Africa.",
  description:
    "Independent energy advisory for organisations working across Kenya and East Africa — market insight, project development support and trusted regional relationships.",
  region: "Kenya · East Africa",
  email: "info@[company-domain]",
  phone: "[+254 phone number]",
  address: "[Office address], Nairobi, Kenya",
  hours: "[Office hours, e.g. Mon–Fri]",
  registration: "[Company registration no.]",
  // cPanel webmail lives at https://<domain>/webmail once a domain exists.
  webmailUrl: null as string | null,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/updates", label: "Updates" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
