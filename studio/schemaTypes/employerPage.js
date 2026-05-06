export default {
  name: 'employerPage',
  title: 'Seite: Kliniken (Fachkräfte finden)',
  type: 'document',
  fields: [
    { name: 'heroLabel', title: 'Hero Label', type: 'string' },
    { name: 'heroTitle', title: 'Hero Titel', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Untertitel', type: 'text' },
    { name: 'heroImage', title: 'Hero Bild', type: 'image' },
    { name: 'servicesLabel', title: 'Leistungen Label', type: 'string' },
    { name: 'servicesTitle', title: 'Leistungen Titel', type: 'string' },
    {
      name: 'employerServices',
      title: 'Leistungen für Arbeitgeber',
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
    { name: 'profilesLabel', title: 'Profile Label', type: 'string' },
    { name: 'profilesTitle', title: 'Profile Titel', type: 'string' },
    {
      name: 'profiles',
      title: 'Fachkraft-Profile',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Kategorie', type: 'string' },
            { name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
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
