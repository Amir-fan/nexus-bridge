export default {
  name: 'legalPage',
  title: 'Rechtliche Seiten (Impressum/Datenschutz)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Inhalt', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    {
      name: 'pageType',
      title: 'Seitentyp',
      type: 'string',
      options: {
        list: [
          { title: 'Impressum', value: 'impressum' },
          { title: 'Datenschutz', value: 'datenschutz' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      description: 'Empfohlen: impressum oder datenschutz.',
      validation: (Rule) =>
        Rule.required().custom((slug, context) => {
          const pageType = context?.document?.pageType
          const value = slug?.current
          if (!value || !pageType) return true
          if (value !== pageType) {
            return 'Slug muss dem Seitentyp entsprechen (impressum/datenschutz).'
          }
          return true
        }),
      group: 'content',
    },
    { 
      name: 'content', 
      title: 'Inhalt', 
      type: 'array', 
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().min(1),
      group: 'content',
    },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string', group: 'seo' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text', rows: 3, group: 'seo' },
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
    },
    prepare(selection) {
      const typeLabel = selection.pageType === 'impressum' ? 'Impressum' : selection.pageType === 'datenschutz' ? 'Datenschutz' : 'Rechtstext'
      return {
        title: selection.title || typeLabel,
        subtitle: typeLabel,
      }
    },
  },
}
