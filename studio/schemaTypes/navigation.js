export default {
  name: 'navigation',
  title: 'Navigation & Menüs',
  type: 'document',
  fields: [
    {
      name: 'mainNav',
      title: 'Hauptnavigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Anzeigetext', type: 'string' },
            { name: 'to', title: 'Pfad (z.B. /ueber-uns)', type: 'string' },
          ]
        }
      ]
    },
    { name: 'navCta', title: 'Navbar Button Text', type: 'string' },
    { name: 'footerCta', title: 'Footer Legal Button Text (Kontakt)', type: 'string' },
    {
      name: 'legalNav',
      title: 'Rechtliche Links (Footer)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Anzeigetext', type: 'string' },
            { name: 'to', title: 'Pfad', type: 'string' },
          ]
        }
      ]
    }
  ]
}
