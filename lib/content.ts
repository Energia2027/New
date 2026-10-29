// Preview content. Everything marked `sample` is illustrative only and must be replaced
// with client-approved material (and moved to Supabase) before launch.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "market-entry",
    title: "Market Entry & Strategy",
    summary:
      "Practical guidance for organisations entering or expanding in the Kenyan and East African energy markets.",
    points: [
      "Market and stakeholder landscape briefings",
      "Regulatory and procurement context",
      "Opportunity screening and go / no-go advice",
    ],
  },
  {
    slug: "project-development",
    title: "Project Development Advisory",
    summary:
      "Support for project sponsors and delivery teams in shaping projects and keeping development on track.",
    points: [
      "Project briefs and readiness reviews",
      "Development planning and milestones",
      "Stakeholder coordination",
    ],
  },
  {
    slug: "procurement",
    title: "Procurement & Tender Advisory",
    summary:
      "Guidance on procurement processes, bid readiness and the documentation projects are expected to provide.",
    points: [
      "Opportunity tracking and bid calendars",
      "Eligibility and compliance checklists",
      "Bid preparation support within an agreed scope",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial & Investment Advisory",
    summary:
      "Help strengthening the commercial case for a project and preparing it for the conversations that follow.",
    points: [
      "Commercial and investment-readiness reviews",
      "Project information packs",
      "Engagement planning with the wider project ecosystem",
    ],
  },
  {
    slug: "risk",
    title: "Risk & Regulatory Advisory",
    summary:
      "A clear view of the regulatory landscape and the risks a project needs to plan for.",
    points: [
      "Regulatory and permitting landscape",
      "Project risk registers",
      "Compliance considerations by market",
    ],
  },
  {
    slug: "intelligence",
    title: "Market Intelligence",
    summary:
      "Curated opportunities, sector updates and market insight for organisations active in the region.",
    points: [
      "Regular opportunity updates",
      "Sector and country briefings",
      "Notices for registered contractors",
    ],
  },
];

export const sectors = [
  { title: "Solar PV", text: "Commercial, industrial and utility-scale solar." },
  { title: "Mini-grids & off-grid", text: "Energy access for communities and remote sites." },
  { title: "Energy storage", text: "Battery systems for reliability and flexibility." },
  { title: "Grid & transmission", text: "Distribution, substations and network upgrades." },
  { title: "Energy efficiency", text: "Lower energy costs for buildings and industry." },
];

export const markets = [
  { country: "Kenya", note: "Head office · Nairobi" },
  { country: "Uganda", note: "Regional coverage" },
  { country: "Tanzania", note: "Regional coverage" },
  { country: "Rwanda", note: "Regional coverage" },
  { country: "Ethiopia", note: "Regional coverage" },
];

export const audiences = [
  { title: "Developers & sponsors", text: "Shaping projects and moving them through development." },
  { title: "Contractors", text: "Finding suitable opportunities and preparing to bid." },
  { title: "Investors", text: "Understanding markets and project pipelines in the region." },
  { title: "Institutions & businesses", text: "Planning energy projects for their own operations." },
];

export const principles = [
  { title: "Independent", text: "Advice shaped by the client's interests and the facts of the project." },
  { title: "Local insight", text: "Grounded in how energy projects are developed in East Africa." },
  { title: "Discreet", text: "Client information and commercial discussions handled in confidence." },
  { title: "Practical", text: "Focused on decisions and next steps, not reports for their own sake." },
];

export type ProjectStatus = "Open" | "Closing soon" | "Closed";

export type Project = {
  slug: string;
  ref: string;
  title: string;
  country: string;
  location: string;
  technology: string;
  capacity: string;
  scope: string;
  description: string;
  requirements: string[];
  deadline: string;
  posted: string;
  status: ProjectStatus;
  visibility: "Public" | "Registered contractors";
  sample: true;
};

export const projects: Project[] = [
  {
    slug: "rooftop-solar-industrial",
    ref: "SAMPLE-001",
    title: "Rooftop solar PV for an industrial facility",
    country: "Kenya",
    location: "Nairobi County",
    technology: "Solar PV",
    capacity: "≈ 1.5 MWp",
    scope: "EPC – design, supply and installation",
    description:
      "An illustrative listing showing how a commercial and industrial solar opportunity would appear to contractors. A real listing would describe the site, the owner's objectives and the procurement process.",
    requirements: [
      "Completed C&I solar projects of similar size",
      "Relevant licences for solar installation work",
      "Ability to provide performance and warranty terms",
    ],
    deadline: "2026-12-04",
    posted: "2026-10-20",
    status: "Open",
    visibility: "Public",
    sample: true,
  },
  {
    slug: "mini-grid-cluster",
    ref: "SAMPLE-002",
    title: "Solar-hybrid mini-grid cluster",
    country: "Uganda",
    location: "Northern Region",
    technology: "Mini-grid",
    capacity: "4 sites · ≈ 300 kWp total",
    scope: "EPC and operations support",
    description:
      "An illustrative listing for a multi-site mini-grid opportunity. Full technical documents would only be shown to registered contractors.",
    requirements: [
      "Mini-grid design and commissioning experience",
      "Battery storage integration capability",
      "Local presence or partner in the country",
    ],
    deadline: "2026-11-14",
    posted: "2026-10-12",
    status: "Closing soon",
    visibility: "Registered contractors",
    sample: true,
  },
  {
    slug: "substation-upgrade",
    ref: "SAMPLE-003",
    title: "Distribution substation upgrade works",
    country: "Tanzania",
    location: "Dodoma Region",
    technology: "Grid & transmission",
    capacity: "33/11 kV",
    scope: "Electrical works – supply and installation",
    description:
      "An illustrative listing for electrical infrastructure works, showing how scope and contractor requirements would be summarised.",
    requirements: [
      "Substation construction references",
      "Qualified electrical engineering team",
      "Health, safety and quality procedures",
    ],
    deadline: "2027-01-22",
    posted: "2026-10-25",
    status: "Open",
    visibility: "Public",
    sample: true,
  },
  {
    slug: "battery-storage-commercial",
    ref: "SAMPLE-004",
    title: "Battery storage for a commercial estate",
    country: "Rwanda",
    location: "Kigali",
    technology: "Battery storage",
    capacity: "≈ 2 MWh",
    scope: "Supply, installation and commissioning",
    description:
      "An illustrative listing for an energy storage opportunity aimed at improving power reliability for commercial tenants.",
    requirements: [
      "Battery energy storage project references",
      "Equipment supply and warranty arrangements",
      "After-sales support capability",
    ],
    deadline: "2026-09-30",
    posted: "2026-08-15",
    status: "Closed",
    visibility: "Public",
    sample: true,
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  sample: true;
};

export const updates: Post[] = [
  {
    slug: "opportunity-board-preview",
    title: "Opportunity board preview now available",
    date: "2026-10-29",
    category: "Announcement",
    excerpt:
      "Contractors will be able to browse energy project opportunities across East Africa and register their interest online.",
    body: [
      "This is a sample update showing how announcements will appear on the website.",
      "Once the platform is live, the team will post new project opportunities, deadline changes and other notices here, and contractors will be able to follow them regularly.",
    ],
    sample: true,
  },
  {
    slug: "deadline-extension-sample",
    title: "Deadline extended: SAMPLE-002 mini-grid cluster",
    date: "2026-10-24",
    category: "Project notice",
    excerpt:
      "An example of a project notice. Real notices would explain what changed and link to the affected opportunity.",
    body: [
      "This is a sample project notice. In the live platform, notices like this keep contractors informed when an opportunity's deadline, scope or documents change.",
      "Each notice can link directly to the project listing it relates to.",
    ],
    sample: true,
  },
  {
    slug: "contractor-registration-sample",
    title: "Contractor registration opening soon",
    date: "2026-10-15",
    category: "Announcement",
    excerpt:
      "Registered contractors will receive access to additional project information and notifications.",
    body: [
      "This is a sample update. Contractor registration is planned for a later stage of the platform.",
      "Registered contractors would be able to see restricted project details and receive alerts when new opportunities are posted.",
    ],
    sample: true,
  },
];

export const insights: Post[] = [
  {
    slug: "preparing-to-bid",
    title: "Five things EPC contractors should prepare before bidding",
    date: "2026-10-22",
    category: "Guide",
    excerpt:
      "Being ready before an opportunity appears is often what separates a complete bid from a rushed one.",
    body: [
      "Keep company registration, tax and licence documents current and easy to share.",
      "Maintain short project reference sheets for completed work, with client contacts where permitted.",
      "Prepare CVs for the key people you would propose for a project.",
      "Have health, safety and quality procedures documented.",
      "Know your financial capacity and how you would secure bid and performance guarantees.",
    ],
    sample: true,
  },
  {
    slug: "finance-ready-project",
    title: "What makes an energy project investment-ready",
    date: "2026-10-08",
    category: "Guide",
    excerpt:
      "Well-organised project information makes every later conversation faster and more productive.",
    body: [
      "A clear project summary: location, technology, size, owner and current stage.",
      "Evidence of site rights, permits applied for or obtained, and the expected energy buyer.",
      "Realistic cost estimates and a delivery schedule from a capable contractor.",
      "A list of known risks and how they will be managed.",
    ],
    sample: true,
  },
  {
    slug: "project-timeline",
    title: "From concept to construction: planning a realistic project timeline",
    date: "2026-09-26",
    category: "Guide",
    excerpt:
      "Most delays are predictable. Planning for them early keeps a project credible with every stakeholder.",
    body: [
      "Allow time for site studies and data collection before committing to a design.",
      "Map the permits and approvals needed and the order in which they are granted.",
      "Build procurement and contracting time into the plan, not just construction.",
      "Agree who owns each milestone and how progress will be reported.",
    ],
    sample: true,
  },
];

export type Download = {
  title: string;
  description: string;
  type: string;
  size: string;
};

export const downloads: Download[] = [
  {
    title: "Company profile",
    description: "Overview of the company, services and approach.",
    type: "PDF",
    size: "—",
  },
  {
    title: "Contractor capability form",
    description: "Template for contractors to share their experience and credentials.",
    type: "DOCX",
    size: "—",
  },
  {
    title: "Project enquiry checklist",
    description: "Information to prepare before submitting a project.",
    type: "PDF",
    size: "—",
  },
];
