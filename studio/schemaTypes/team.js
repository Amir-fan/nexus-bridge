export default {
  name: 'team',
  title: 'Team Mitglieder',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Rolle',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biografie',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Anzeigereihenfolge',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
}
