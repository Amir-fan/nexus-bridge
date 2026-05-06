export default {
  name: 'processStep',
  title: 'Prozess Schritte',
  type: 'document',
  fields: [
    { name: 'number', title: 'Nummer (z.B. 01)', type: 'string' },
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'description', title: 'Beschreibung', type: 'text' },
    { name: 'iconName', title: 'Icon Name', type: 'string' },
  ],
}
