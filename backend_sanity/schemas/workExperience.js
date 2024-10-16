import { defineType } from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text', // Use 'text' type for longer content like descriptions
    },
  ],
})
