// studio/schemaTypes/industry.js
export default {
  name: 'industry',
  title: 'Market Verticals',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Industry Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Industry Description',
      type: 'text',
    },
    {
      name: 'clients',
      title: 'Key Clients',
      type: 'array',
      of: [{ type: 'string' }],
    }
  ]
}