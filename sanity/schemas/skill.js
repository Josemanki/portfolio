export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the icon in format "SiGithub" without quotes. ',
    },
    {
      name: 'bgColor',
      title: 'Badge Background Color',
      type: 'string',
      description: 'Background color as found on https://simpleicons.org/',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
    },
  ],
};
