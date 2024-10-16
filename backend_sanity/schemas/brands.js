import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // Enables image hotspot feature
      },
      validation: Rule => Rule.required().error('Brand image is required.')
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50).warning('Brand name should be between 2 and 50 characters.')
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imgUrl'
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        media
      }
    }
  }
})
