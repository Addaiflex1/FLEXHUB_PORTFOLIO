import { defineType } from 'sanity'

export default defineType({
  name: 'abouts',
  title: 'Abouts',
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
      type: 'text', // Use 'text' type for potentially longer descriptions
    },
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // Allow hotspot cropping for better image control
      },
    },
  ],
})
