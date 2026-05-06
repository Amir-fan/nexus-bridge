export default {
  name: 'candidatePage',
  title: 'Seite: Fachkräfte (Karriere)',
  type: 'document',
  fields: [
    { name: 'heroLabel', title: 'Hero Label', type: 'string' },
    { name: 'heroTitle', title: 'Hero Titel', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Untertitel', type: 'text' },
    { name: 'heroImage', title: 'Hero Bild', type: 'image' },
    { name: 'benefitsLabel', title: 'Vorteile Label', type: 'string' },
    { name: 'benefitsTitle', title: 'Vorteile Titel', type: 'string' },
    {
      name: 'benefits',
      title: 'Vorteile',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Beschreibung', type: 'text' },
            { name: 'iconName', title: 'Icon Name', type: 'string' },
          ],
        },
      ],
    },
    { name: 'jobsLabel', title: 'Jobs Label', type: 'string' },
    { name: 'jobsTitle', title: 'Jobs Titel', type: 'string' },
    {
      name: 'jobTypes',
      title: 'Jobmöglichkeiten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'subtitle', title: 'Untertitel', type: 'string' },
            { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    { name: 'gulfLabel', title: 'Golf-Region Label', type: 'string' },
    {
      name: 'gulfTitle',
      title: 'Golf-Region Titel',
      type: 'string',
    },
    {
      name: 'gulfDescription',
      title: 'Golf-Region Beschreibung',
      type: 'text',
    },
    {
      name: 'gulfImage',
      title: 'Golf-Region Bild',
      type: 'image',
    },
    {
      name: 'gulfHighlights',
      title: 'Golf-Region Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'iconName', title: 'Icon Name', type: 'string' },
          ]
        }
      ]
    },
    {
      name: 'cta',
      title: 'CTA Streifen',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
      ]
    },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text' },
  ],
}
