import type { FAQ } from './content';

export interface CategoryScenario {
  title: string;
  body: string;
  relatedSlugs: string[];
}

export interface CategoryDetail {
  slug: string;
  introParagraph: string;
  scenarios: CategoryScenario[];
  policyHeading: string;
  policyBody: string;
  faq: FAQ[];
  relatedLinks: { label: string; href: string }[];
}
