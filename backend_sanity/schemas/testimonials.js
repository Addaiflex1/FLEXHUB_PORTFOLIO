import { defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
      name: 'imgurl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // Enable image hotspot for better cropping
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'text', // Use 'text' type for longer feedback content
    },
  ],
})
