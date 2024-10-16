import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100).warning('Name should be between 2 and 100 characters.')
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email().error('Please enter a valid email address.')
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(1000).warning('Message should be between 10 and 1000 characters.')
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      date: 'submittedAt'
    },
    prepare(selection) {
      const {title, subtitle, date} = selection
      return {
        title,
        subtitle,
        description: `Submitted on ${new Date(date).toLocaleDateString()}`
      }
    }
  }
})
