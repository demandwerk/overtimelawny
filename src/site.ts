// Firm details used across the site. Edit here and every page updates.

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
  { label: 'Practice Areas', href: '/practice-areas-employment-law-overview/' },
  {
    label: 'Areas We Serve',
    children: [
      { label: 'Nassau & Suffolk Counties', href: '/employment-law-attorneys-in-nassau-and-suffolk-counties-in-new-york/' },
      { label: 'New Jersey & NYC', href: '/new-jersey-nyc-overtime-wage-and-sexual-harassment-lawyers/' },
    ],
  },
  {
    label: 'Cases',
    children: [
      { label: 'Representative Cases', href: '/cases/' },
      { label: 'Current Lawsuits', href: '/current-lawsuits/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
];

export const spanishHome = '/descripcion-general-de-las-areas-de-practica/';

// Order here is the order on the homepage grid. Employer defense is listed
// last because the firm's focus is employees.
export const practiceAreas = [
  { slug: 'overtime-pay-and-unpaid-wages', title: 'Overtime & Unpaid Wages', blurb: 'Missing overtime, off-the-clock work, misclassification and late pay. New York lets you recover up to six years of unpaid wages.' },
  { slug: 'sexual-harassment', title: 'Sexual Harassment', blurb: 'Unwanted advances, comments, contact or a hostile environment based on sex. You do not have to put up with it to keep your job.' },
  { slug: 'employment-discrimination', title: 'Employment Discrimination', blurb: 'Age, race, disability, religion, national origin and more. Unfair firing, demotion, pay or treatment because of who you are.' },
  { slug: 'retaliation-in-the-workplace', title: 'Retaliation', blurb: 'Punished for complaining, reporting discrimination or taking part in an investigation? Retaliation is its own violation of the law.' },
  { slug: 'restaurant-workers-and-tipped-employees', title: 'Restaurant & Tipped Workers', blurb: 'Minimum wage, tip theft, illegal tip pools, spread-of-hours pay and overtime for kitchen, floor and delivery staff.' },
  { slug: 'pregnancy-discrimination', title: 'Pregnancy Discrimination', blurb: 'Employers cannot fire, demote or refuse to accommodate you because of pregnancy, childbirth or related conditions.' },
  { slug: 'gender-discrimination', title: 'Gender Discrimination', blurb: 'Unequal pay, passed-over promotions and limited advancement because of gender.' },
  { slug: 'womens-rights', title: "Women's Rights", blurb: 'Equal pay disputes, unfair hiring and promotion practices, harassment and pregnancy discrimination.' },
  { slug: 'whistleblower', title: 'Whistleblower', blurb: 'Protection for employees who report fraud, corruption, safety violations or other wrongdoing by their employer.' },
  { slug: 'family-medical-leave-act', title: 'Family & Medical Leave', blurb: 'Up to 12 weeks of job-protected leave for your own or a family member’s serious health condition.' },
  { slug: 'civil-rights', title: 'Civil Rights', blurb: 'Federal, state and New York City laws that protect workers from discrimination based on protected characteristics.' },
  { slug: 'employment-agreements', title: 'Employment & Severance Agreements', blurb: 'Review and negotiation of employment contracts, non-competes and severance packages before you sign.' },
  { slug: 'employer-defense', title: 'Employer Counsel', blurb: 'Guidance for employers on handbooks, policies, dispute resolution and litigation avoidance.' },
];

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
    bio: [
      'Angelica Villalba is fluent in English and Spanish. She earned her B.A. in Sociology at the State University of New York at Cortland and is ABA Certified in Paralegal Studies from Hofstra University. Angelica assists the firm’s attorneys and clients with preparing and managing materials for legal matters.',
    ],
    details: [],
  },
];
