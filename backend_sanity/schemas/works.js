import { defineType } from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url', // Use 'url' type for links
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'url', // Use 'url' type for links
    },
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for better image cropping
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }], // Simplified tag structure
    },
  ],
})
