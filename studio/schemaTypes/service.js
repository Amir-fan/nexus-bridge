export default {
  name: 'service',
  title: 'Leistungen / Bereiche',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'description', title: 'Beschreibung', type: 'text' },
    { name: 'link', title: 'Verlinkung (z.B. /fachkraefte-finden)', type: 'string' },
    { name: 'iconName', title: 'Icon Name (Lucide Icon)', type: 'string', description: 'z.B. Stethoscope, Users, Building2' },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
