import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50).warning('Name should be between 2 and 50 characters.')
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      validation: Rule => Rule.required().custom(value => /^#([0-9A-F]{3}){1,2}$/i.test(value) || 'Invalid color code').warning('Please enter a valid hex color code.')
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Icon image is required.')
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
      bgColor: 'bgColor'
    },
    prepare(selection) {
      const {title, media, bgColor} = selection
      return {
        title,
        media,
        subtitle: `Background Color: ${bgColor}`
      }
    }
  }
})
