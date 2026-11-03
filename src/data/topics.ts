// Blog topics. Each post names one in its frontmatter (`topic:`); each topic has
// its own indexable page at /blog/topic/<slug>/ and a tab on the blog.
export const topics = [
  { slug: 'wages', title: 'Wages & Overtime', icon: 'clock', intro: 'Unpaid overtime, minimum wage, tips, pay frequency and the laws that decide what New York and New Jersey employers owe their workers.' },
  { slug: 'discrimination', title: 'Discrimination', icon: 'users', intro: 'Race, religion, disability, gender identity, age and other protected traits: what the law prohibits and how workers have fought back.' },
  { slug: 'harassment', title: 'Sexual Harassment', icon: 'alert-message', intro: 'What counts as sexual harassment at work, what to do when it happens to you, and how the law is changing.' },
  { slug: 'retaliation', title: 'Retaliation', icon: 'reverse', intro: 'When employers punish workers for speaking up, reporting wrongdoing or asserting their rights.' },
  { slug: 'leave', title: 'Leave & Accommodations', icon: 'heart-pulse', intro: 'Family and medical leave, pregnancy and prenatal leave, and paid sick leave rules in New York.' },
  { slug: 'rights', title: 'Workplace Rights', icon: 'scale', intro: 'Noncompetes, training-repayment agreements, privacy and safety at work, and news from our firm.' },
] as const;

export type TopicSlug = (typeof topics)[number]['slug'];
export const topicBySlug = Object.fromEntries(topics.map((t) => [t.slug, t])) as Record<TopicSlug, (typeof topics)[number]>;
