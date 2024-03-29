export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Homepage job title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Homepage subtitle',
      type: 'text',
      options: {
        maxLength: 200,
      },
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About me text',
      type: 'text',
    },
    {
      name: 'navbar',
      title: 'Navbar links',
      description: 'What options/links should be shown on the Navbar?',
      type: 'array',
      of: [
        {
          title: 'Section',
          type: 'object',
          fields: [
            {
              title: 'Section Name',
              name: 'section',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'string',
            },
            {
              title: 'HTML ID',
              name: 'sectionId',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skill Badges',
      description: 'Ordered list of skill badges',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    },
    {
      name: 'frontend',
      title: 'Frontend Summary',
      description: 'What are the tasks of a Frontend Engineer?',
      type: 'array',
      of: [
        {
          title: 'Task',
          type: 'string',
        },
      ],
    },
    {
      name: 'backend',
      title: 'Backend Summary',
      description: 'What are the tasks of a Backend Engineer?',
      type: 'array',
      of: [
        {
          title: 'Task',
          type: 'string',
        },
      ],
    },
    {
      name: 'footer',
      title: 'Footer links',
      description: 'What options/links should be shown on the Footer?',
      type: 'array',
      of: [
        {
          title: 'Section',
          type: 'object',
          fields: [
            {
              title: 'Section',
              name: 'section',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'string',
            },
            {
              title: 'HTML ID',
              name: 'sectionId',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
