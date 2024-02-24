export const contactSchema = {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'organization',
      type: 'string',
      title: 'organization',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'number',
      title: 'Phone',
    },
    {
      name: 'message',
      type: 'string',
      title: 'Message',
    },
  ],
}
