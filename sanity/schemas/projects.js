export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: 'github',
      title: 'Github URL',
      type: 'string',
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: 'live',
      title: 'Live URL',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: 'long_description',
      title: 'Long Description',
      type: 'markdown',
      validation: (Rule) =>
        Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
