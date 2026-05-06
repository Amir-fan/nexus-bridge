export default {
  name: 'aboutPage',
  title: 'Seite: Über uns',
  type: 'document',
  fields: [
    { name: 'heroLabel', title: 'Hero Label', type: 'string' },
    { name: 'heroTitle', title: 'Hero Titel', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Untertitel', type: 'text' },
    { name: 'whoLabel', title: 'Wer wir sind Label', type: 'string' },
    { name: 'whoTitle', title: 'Wer wir sind Titel', type: 'string' },
    { name: 'whoText', title: 'Wer wir sind Text', type: 'text' },
    { name: 'whoImage', title: 'Wer wir sind Bild', type: 'image' },
    {
      name: 'quotes',
      title: 'Zitate',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'text' },
            { name: 'author', title: 'Autor', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'milestones',
      title: 'Meilensteine (Timeline)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Jahr', type: 'string' },
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Beschreibung', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'prevention',
      title: 'Präventionsmedizin Sektion',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
        { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
        { name: 'statNumber', title: 'Statistik Zahl (z.B. -30%)', type: 'string' },
        { name: 'statLabel', title: 'Statistik Text', type: 'string' },
        { name: 'points', title: 'Vorteile (Liste)', type: 'array', of: [{ type: 'string' }] },
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
    { name: 'valuesLabel', title: 'Werte Label', type: 'string' },
    { name: 'valuesTitle', title: 'Werte Titel', type: 'string' },
    { name: 'historyLabel', title: 'Geschichte Label', type: 'string' },
    { name: 'historyTitle', title: 'Geschichte Titel', type: 'string' },
    {
      name: 'values',
      title: 'Unsere Werte',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'body', title: 'Text', type: 'text' },
            { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' },
          ],
        },
      ],
    },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text' },
  ],
}
