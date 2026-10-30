// Firm details used across the site. Edit here and every page updates.

import peter from './assets/team/peter-romero.jpg';
import david from './assets/team/david-barnhorn.jpg';
import matthew from './assets/team/matthew-farnworth.jpg';
import angelica from './assets/team/angelica-villalba.jpg';
import slRomero from './assets/badges/super-lawyers-romero.png';
import slBarnhorn from './assets/badges/rising-stars-barnhorn.png';
import avvoChoice from './assets/badges/avvo-clients-choice-2018.png';
import avvoSuperb from './assets/badges/avvo-superb.png';

export const awards = [
  { img: slRomero, alt: 'Super Lawyers: Peter A. Romero', href: 'https://profiles.superlawyers.com/new-york/hauppauge/lawyer/peter-a-romero/63c95851-e260-4099-9f7d-b86aa1431513.html' },
  { img: slBarnhorn, alt: 'Super Lawyers Rising Stars: David D. Barnhorn', href: 'https://profiles.superlawyers.com/new-york/hauppauge/lawyer/david-d-barnhorn/0134a012-b63a-44a7-a005-930a926b8aef.html' },
  { img: avvoSuperb, alt: 'Avvo Rating: Superb, Top Attorney Employment', href: 'https://www.avvo.com/attorneys/11788-ny-peter-romero-994125.html?utm_campaign=avvo_rating&utm_content=1217583&utm_medium=avvo_badge&utm_source=avvo' },
  { img: avvoChoice, alt: 'Avvo Clients’ Choice 2018, Employment', href: 'https://www.avvo.com/attorneys/11788-ny-peter-romero-994125.html?utm_campaign=avvo_review_badge&utm_content=994125&utm_medium=avvo_badge&utm_source=avvo' },
];

export const firm = {
  name: 'Romero Law Group, PLLC',
  shortName: 'Romero Law Group',
  tagline: 'Labor & Employment Law',
  phone: '(631) 257-5588',
  phoneHref: 'tel:+16312575588',
  regions: 'New York City · Long Island · Northern New Jersey',
  offices: [
    { name: 'Long Island Office', lines: ['490 Wheeler Rd, Ste 277', 'Hauppauge, NY 11788'] },
    { name: 'Manhattan Office', lines: ['108 West 39th Street, Suite 602', 'New York, NY 10018'] },
  ],
  consultNote: 'Free consultations by phone, Zoom or Microsoft Teams. By appointment only.',
  // Access key from https://web3forms.com: enter the email that should receive
  // consultation requests and paste the key here. It is safe to be public.
  formKey: '',
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/LaborLawyerNY/' },
    { name: 'X (Twitter)', href: 'https://twitter.com/labor_ny' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/law-office-of-peter-a-romero/' },
    { name: 'Instagram', href: 'https://www.instagram.com/labor_lawyer_ny/' },
  ],
};

export const nav = [
  { label: 'Team', href: '/team/' },
  { label: 'Practice Areas', children: [] as { label: string; href: string }[] }, // filled from `practiceAreas` below
  { label: 'Areas We Serve', children: [] as { label: string; href: string }[] }, // filled from `locations` below
  {
    label: 'Cases',
    children: [
      { label: 'Representative Cases', href: '/cases/' },
      { label: 'Current Lawsuits', href: '/current-lawsuits/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
];

// Areas the firm serves, shown in the sidebar on content pages and on the
// homepage. Entries without an href have no landing page and show as plain
// text; only linked ones appear in the "Areas We Serve" menu. `es` holds the
// Spanish title and area for the sidebar on Spanish pages.
export const locations: { name: string; title: string; area: string; href?: string; es: { title: string; area: string } }[] = [
  { name: 'Long Island', title: 'Long Island Employment Lawyer', area: 'Nassau & Suffolk Counties', href: '/areas-we-serve/long-island-employment-law-attorney/', es: { title: 'Abogado laboral en Long Island', area: 'Condados de Nassau y Suffolk' } },
  { name: 'New York City', title: 'New York City Employment Lawyer', area: 'Manhattan, Brooklyn, Queens & the Bronx', href: '/areas-we-serve/new-york-employment-law-attorney/', es: { title: 'Abogado laboral en la ciudad de Nueva York', area: 'Manhattan, Brooklyn, Queens y el Bronx' } },
  { name: 'Westchester & Hudson Valley', title: 'Westchester Employment Lawyer', area: 'Westchester, Rockland & Orange Counties', es: { title: 'Abogado laboral en Westchester', area: 'Condados de Westchester, Rockland y Orange' } },
  { name: 'New Jersey', title: 'New Jersey Employment Lawyer', area: 'Northern New Jersey', href: '/areas-we-serve/new-jersey/', es: { title: 'Abogado laboral en Nueva Jersey', area: 'Norte de Nueva Jersey' } },
];
// Location pages live under /areas-we-serve/<slug>/.
export const locationsOverview = '/areas-we-serve/';
nav.find((n) => n.label === 'Areas We Serve')!.children = [
  { label: 'All areas we serve', href: locationsOverview },
  ...locations.filter((l) => l.href).map((l) => ({ label: l.title, href: l.href! })),
];

// Spanish pages live under /es/; /es/ itself is the Spanish practice-area overview.
export const spanishHome = '/es/';

// English page → its Spanish translation. Both sides get hreflang links to
// each other; add a pair here when a new Spanish page is published.
export const translations: Record<string, string> = {
  '/practice-areas/': '/es/',
  '/practice-areas/sexual-harassment/': '/es/acoso-sexual/',
  '/practice-areas/employment-discrimination/': '/es/discriminacion-laboral/',
  '/practice-areas/pregnancy-discrimination/': '/es/discriminacion-por-embarazo/',
  '/practice-areas/overtime-and-unpaid-wages/': '/es/horas-adicionales-y-sueldos-no-pagados/',
  '/practice-areas/retaliation/': '/es/represalias/',
};

// Practice-area pages live under /practice-areas/<slug>/.
export const practiceOverview = '/practice-areas/';
export const practiceHref = (slug: string) => `${practiceOverview}${slug}/`;

// Order here is the order on the homepage grid. Employer defense is listed
// last because the firm's focus is employees.
export const practiceAreas = [
  { slug: 'overtime-and-unpaid-wages', icon: 'clock', title: 'Overtime & Unpaid Wages', titleEs: 'Horas adicionales y sueldos no pagados', blurb: 'Missing overtime, off-the-clock work, misclassification and late pay. New York lets you recover up to six years of unpaid wages.' },
  { slug: 'sexual-harassment', icon: 'alert-message', title: 'Sexual Harassment', titleEs: 'Acoso sexual', blurb: 'Unwanted advances, comments, contact or a hostile environment based on sex. You do not have to put up with it to keep your job.' },
  { slug: 'employment-discrimination', icon: 'users', title: 'Employment Discrimination', titleEs: 'Discriminación laboral', blurb: 'Age, race, disability, religion, national origin and more. Unfair firing, demotion, pay or treatment because of who you are.' },
  { slug: 'disability-discrimination', icon: 'accessibility', title: 'Disability Discrimination', titleEs: 'Discriminación por discapacidad', blurb: 'Refused accommodations, harassment or unfair treatment because of a disability, under the ADA and New York law.' },
  { slug: 'retaliation', icon: 'reverse', title: 'Retaliation', titleEs: 'Represalias', blurb: 'Punished for complaining, reporting discrimination or taking part in an investigation? Retaliation is its own violation of the law.' },
  { slug: 'restaurant-and-tipped-workers', icon: 'utensils', title: 'Restaurant & Tipped Workers', titleEs: 'Trabajadores de restaurantes y con propinas', blurb: 'Minimum wage, tip theft, illegal tip pools, spread-of-hours pay and overtime for kitchen, floor and delivery staff.' },
  { slug: 'pregnancy-discrimination', icon: 'stroller', title: 'Pregnancy Discrimination', titleEs: 'Discriminación por embarazo', blurb: 'Employers cannot fire, demote or refuse to accommodate you because of pregnancy, childbirth or related conditions.' },
  { slug: 'gender-discrimination', icon: 'equal', title: 'Gender Discrimination', titleEs: 'Discriminación de género', blurb: 'Unequal pay, passed-over promotions and limited advancement because of gender.' },
  { slug: 'womens-rights', icon: 'venus', title: "Women's Rights", titleEs: 'Derechos de la mujer', blurb: 'Equal pay disputes, unfair hiring and promotion practices, harassment and pregnancy discrimination.' },
  { slug: 'whistleblower', icon: 'megaphone', title: 'Whistleblower', titleEs: 'Denuncia de situaciones ilegales', blurb: 'Protection for employees who report fraud, corruption, safety violations or other wrongdoing by their employer.' },
  { slug: 'family-and-medical-leave', icon: 'heart-pulse', title: 'Family & Medical Leave', titleEs: 'Licencia familiar y médica', blurb: 'Up to 12 weeks of job-protected leave for your own or a family member’s serious health condition.' },
  { slug: 'civil-rights', icon: 'scale', title: 'Civil Rights', titleEs: 'Derechos civiles', blurb: 'Federal, state and New York City laws that protect workers from discrimination based on protected characteristics.' },
  { slug: 'employment-and-severance-agreements', icon: 'document', title: 'Employment & Severance Agreements', titleEs: 'Acuerdos laborales y de indemnización', blurb: 'Review and negotiation of employment contracts, non-competes and severance packages before you sign.' },
  { slug: 'employer-defense', icon: 'briefcase', title: 'Employer Counsel', titleEs: 'Defensa del empleador', blurb: 'Guidance for employers on handbooks, policies, dispute resolution and litigation avoidance.' },
];

// Peter Romero's Avvo profile, where every client review on the site can be checked.
export const avvoProfile = 'https://www.avvo.com/attorneys/11788-ny-peter-romero-994125.html';

export const testimonials = [
  {
    quote: 'I was very stressed out but I immediately felt at ease because of Peter’s knowledge of the law. He listened carefully to my concerns and clearly explained my options and how best to proceed.',
    name: 'Avvo review',
    detail: 'Employment discrimination client',
  },
  {
    quote: 'He sent a letter to my company and they still said no. I then filed a lawsuit and we managed to settle the case. I have the highest respect for Mr. Romero.',
    name: 'Ken',
    detail: 'Overtime pay client · Avvo, 2016',
  },
  {
    quote: 'Peter has represented me in several cases. He is a fighter and he’s easily accessible! If I ever had a question, his replies were sent within the hour.',
    name: 'Avvo review',
    detail: 'Repeat client · 2020',
  },
  {
    quote: 'Not only is he experienced and knowledgeable, but he is also approachable and easy to talk to. I have recommended Peter to others who all thank me for the introduction.',
    name: 'Gwendolyn',
    detail: 'Avvo, 2018',
  },
];

export const team = [
  {
    name: 'Peter A. Romero',
    role: 'Founding Attorney',
    initials: 'PR',
    photo: peter,
    badges: [awards[0], awards[2], awards[3]],
    bio: [
      'Peter A. Romero has practiced exclusively in the area of employment law for over 20 years. He regularly represents both employers and employees in workplace litigation, including trial and appellate practice, administrative proceedings before the Department of Labor, the U.S. Equal Employment Opportunity Commission, and the New York State Division of Human Rights. He is highly experienced in complex litigation, including collective and class action lawsuits.',
    ],
    details: [
      { label: 'Education', items: ['St. John’s University School of Law'] },
      { label: 'Admitted', items: ['U.S. Court of Appeals, Second Circuit', 'U.S. Court of Appeals, Third Circuit', 'U.S. District Court, Southern District of New York', 'U.S. District Court, Eastern District of New York'] },
      { label: 'Associations', items: ['National Employment Lawyers Association, New York Chapter', 'The Federal Bar Association', 'Nassau County Bar Association', 'Suffolk County Bar Association'] },
      { label: 'Recognition', items: ['Best Lawyers in America®, selected repeatedly by peers', 'Super Lawyers®, Employment Litigation, 2019–2025'] },
    ],
  },
  {
    name: 'David D. Barnhorn',
    role: 'Attorney',
    initials: 'DB',
    photo: david,
    badges: [awards[1]],
    bio: [
      'David D. Barnhorn practices exclusively in the area of employment law, including matters involving employment discrimination and wage and hour violations. He represents both employers and employees in all areas of employment litigation, including trials, administrative proceedings before the U.S. Equal Employment Opportunity Commission and New York State Division of Human Rights, and complex collective and class action lawsuits.',
      'His prior experience includes two boutique labor and employment law firms where he focused primarily on representing plaintiffs, and internships at employment law firms in New York and New Jersey and at the U.S. Equal Employment Opportunity Commission.',
    ],
    details: [
      { label: 'Education', items: ['Hofstra University Maurice A. Deane School of Law, J.D., cum laude; Notes and Comments Editor, Hofstra Labor & Employment Law Journal', 'University of Cincinnati, B.A., magna cum laude, Journalism'] },
      { label: 'Admitted', items: ['State of New York', 'U.S. District Court, Southern District of New York', 'U.S. District Court, Eastern District of New York', 'State of New Jersey', 'U.S. District Court, District of New Jersey'] },
      { label: 'Recognition', items: ['Super Lawyers Rising Stars, Employment & Labor, 2016–2025'] },
      { label: 'Publication', items: ['Co-author, “Speak the Truth and Tell No Lies: An Update for the Employee Polygraph Protection Act,” Hofstra Labor & Employment Law Journal, Vol. 29.1'] },
    ],
  },
  {
    name: 'Matthew J. Farnworth',
    role: 'Attorney',
    initials: 'MF',
    photo: matthew,
    bio: [
      'Matthew J. Farnworth has dedicated his practice exclusively to representing employees in labor and employment matters, including wage and hour violations, employment discrimination and unlawful retaliation. He regularly represents employees before the U.S. Equal Employment Opportunity Commission and the New York State Division of Human Rights, and in cases from inception to trial in state and federal courts in New York and New Jersey.',
      'He has helped dozens of employees recover unpaid wages in collective action lawsuits and has secured significant damage awards for his clients.',
    ],
    details: [
      { label: 'Education', items: ['Pace University School of Law, J.D., 2016', 'State University of New York at New Paltz, B.A., 2012'] },
      { label: 'Admitted', items: ['State of New York', 'U.S. District Court, Southern District of New York', 'U.S. District Court, Eastern District of New York', 'State of New Jersey', 'U.S. District Court, District of New Jersey'] },
    ],
  },
  {
    name: 'Angelica Villalba',
    role: 'Paralegal · Habla español',
    initials: 'AV',
    photo: angelica,
    bio: [
      'Angelica Villalba is fluent in English and Spanish. She earned her B.A. in Sociology at the State University of New York at Cortland and is ABA Certified in Paralegal Studies from Hofstra University. Angelica assists the firm’s attorneys and clients with preparing and managing materials for legal matters.',
    ],
    details: [],
  },
];

nav.find((n) => n.label === 'Practice Areas')!.children = [
  { label: 'All practice areas', href: practiceOverview },
  ...practiceAreas.map((p) => ({ label: p.title, href: practiceHref(p.slug) })),
];
