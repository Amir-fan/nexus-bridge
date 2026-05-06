export default {
  name: 'hero',
  title: 'Startseite Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hauptüberschrift',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Unterüberschrift',
      type: 'text',
    },
    {
      name: 'primaryCta',
      title: 'Haupt Button Text',
      type: 'string',
    },
    {
      name: 'secondaryCta',
      title: 'Sekundär Button Text',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Bild',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'accentWord',
      title: 'Grünes Wort im Titel',
      type: 'string',
      description: 'Geben Sie ein Wort aus dem Titel ein, das grün hervorgehoben werden soll. z.B. "weltweit"',
    },
    {
      name: 'floatPillTop',
      title: 'Schwebendes Element (Oben Links)',
      type: 'string',
    },
    {
      name: 'floatCard',
      title: 'Schwebendes Element (Unten Links)',
      type: 'string',
    },
    {
      name: 'floatPillRight',
      title: 'Schwebendes Element (Oben Rechts)',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Statistiken (unter Buttons)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Zahl (z.B. 100+)', type: 'string' },
            { name: 'label', title: 'Text (z.B. Vermittlungen)', type: 'string' },
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
}
