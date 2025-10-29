/**
 * SEO Utilities for INOVALE Website
 * Handles meta tags, structured data, and SEO optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'organization';
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
}

/**
 * Update document title and meta tags
 */
export const updateSEOMeta = (config: SEOConfig): void => {
  // Update title
  document.title = config.title;

  // Update description meta tag
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', config.description);

  // Update keywords meta tag
  if (config.keywords && config.keywords.length > 0) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', config.keywords.join(', '));
  }

  // Update OG tags
  updateOGTags(config);
};

/**
 * Update Open Graph tags
 */
const updateOGTags = (config: SEOConfig): void => {
  const ogTitle = config.title;
  const ogDescription = config.description;
  const ogType = config.type || 'website';
  const ogImage = config.image || 'https://inovale.com/favicon.ico';
  const ogUrl = config.url || 'https://inovale.com';

  updateMetaTag('og:title', ogTitle);
  updateMetaTag('og:description', ogDescription);
  updateMetaTag('og:type', ogType);
  updateMetaTag('og:image', ogImage);
  updateMetaTag('og:url', ogUrl);

  // Twitter tags
  updateMetaTag('twitter:title', ogTitle, 'name');
  updateMetaTag('twitter:description', ogDescription, 'name');
  updateMetaTag('twitter:image', ogImage, 'name');
};

/**
 * Update meta tag value
 */
const updateMetaTag = (
  name: string,
  content: string,
  attribute: 'property' | 'name' = 'property'
): void => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Create Schema.org structured data
 */
export const createSchemaMarkup = (
  type: 'Organization' | 'LocalBusiness' | 'BreadcrumbList' | 'Product',
  data: Record<string, any>
): string => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });
};

/**
 * Add breadcrumb schema
 */
export const addBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
): void => {
  const items = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };

  addSchemaScript(schema);
};

/**
 * Add schema script to document
 */
const addSchemaScript = (schema: Record<string, any>): void => {
  let scriptTag = document.querySelector('script[data-schema="breadcrumb"]');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.setAttribute('data-schema', 'breadcrumb');
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(schema);
};

/**
 * SEO keywords by service
 */
export const SEO_KEYWORDS = {
  home: [
    'AI training',
    'IoT solutions',
    'robotics education',
    'AI software development',
    'EdTech',
    'technology training',
    'innovation',
  ],
  edtech: [
    'AI training for students',
    'IoT lab setup',
    'robotics education',
    'Atal Tinkering Lab',
    'EdTech solutions',
    'technology education',
    'hands-on learning',
    'STEM education',
  ],
  aiSoftware: [
    'facial recognition system',
    'AI automation',
    'process automation',
    'business intelligence',
    'deep learning',
    'custom AI solution',
    'neural networks',
    'data analytics',
  ],
  about: [
    'about INOVALE',
    'AI company',
    'technology solutions provider',
    'innovation lab',
    'EdTech provider',
  ],
  projects: [
    'AI projects',
    'case studies',
    'success stories',
    'AI implementation',
    'technology projects',
  ],
  contact: [
    'contact INOVALE',
    'get in touch',
    'AI consultation',
    'project inquiry',
  ],
};

/**
 * Page-specific SEO configs
 */
export const PAGE_SEO_CONFIG: Record<string, SEOConfig> = {
  home: {
    title: 'INOVALE - AI, IoT & Robotics Solutions for Education & Enterprise',
    description:
      'INOVALE provides AI-driven solutions, IoT training, robotics labs, and enterprise software development. Expert EdTech solutions and custom AI implementation.',
    keywords: SEO_KEYWORDS.home,
    type: 'website',
  },
  edtech: {
    title: 'EdTech Solutions - AI, IoT & Robotics Training | INOVALE',
    description:
      'Transform education with INOVALE EdTech solutions. We provide AI training, IoT lab setup, robotics education, and Atal Tinkering Lab development for schools.',
    keywords: SEO_KEYWORDS.edtech,
    type: 'website',
  },
  aiSoftware: {
    title: 'Custom AI Software Development | Facial Recognition & Automation',
    description:
      'Enterprise AI solutions including facial recognition, process automation, deep learning, and business intelligence. Custom AI development for your business.',
    keywords: SEO_KEYWORDS.aiSoftware,
    type: 'website',
  },
  about: {
    title: 'About INOVALE - Innovating for Tomorrow',
    description:
      'Learn about INOVALE mission, vision, and values. We pioneer AI-driven solutions for education and enterprise transformation.',
    keywords: SEO_KEYWORDS.about,
    type: 'website',
  },
  projects: {
    title: 'AI Projects & Case Studies | INOVALE Success Stories',
    description:
      'Explore INOVALE portfolio of AI projects, from facial recognition systems to enterprise automation. See our impact across industries.',
    keywords: SEO_KEYWORDS.projects,
    type: 'website',
  },
  contact: {
    title: 'Contact INOVALE - Get In Touch',
    description:
      'Reach out to INOVALE for AI training, EdTech solutions, or custom software development. We are here to help transform your vision.',
    keywords: SEO_KEYWORDS.contact,
    type: 'website',
  },
};
