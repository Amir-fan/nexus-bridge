export default {
  name: 'homePage',
  title: 'Seite: Home (Zusatz)',
  type: 'document',
  fields: [
    { name: 'servicesLabel', title: 'Leistungen Label', type: 'string' },
    { name: 'servicesTitle', title: 'Leistungen Titel', type: 'string' },
    { name: 'processLabel', title: 'Prozess Label', type: 'string' },
    { name: 'processTitle', title: 'Prozess Titel', type: 'string' },
    { name: 'teamLabel', title: 'Team Label', type: 'string' },
    { name: 'teamTitle', title: 'Team Titel', type: 'string' },
    {
      name: 'aboutStrip',
      title: 'About Streifen (Nach Hero)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'string' },
        { name: 'text', title: 'Text', type: 'text' },
        { name: 'image', title: 'Bild', type: 'image' },
        {
          name: 'features',
          title: 'Feature Chips',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' },
              ]
            }
          ]
        },
      ]
    },
    {
      name: 'prevention',
      title: 'Präventionsmedizin Sektion',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
        { name: 'image', title: 'Bild', type: 'image' },
        { name: 'statNumber', title: 'Statistik Zahl (z.B. -30%)', type: 'string' },
        { name: 'statLabel', title: 'Statistik Text', type: 'string' },
        { name: 'points', title: 'Aufzählungspunkte', type: 'array', of: [{ type: 'string' }] },
      ]
    },
    {
      name: 'cta',
      title: 'CTA Streifen (Ganz unten)',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
      ]
    },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text' },
  ]
}
