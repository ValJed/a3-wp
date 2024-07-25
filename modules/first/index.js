module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'First',
    slugPrefix: 'first-'
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      },
      description: {
        label: 'Description',
        type: 'string',
        required: true
      },
      isFirst: {
        label: 'Is First',
        type: 'boolean',
        def: true
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'description', 'isFirst' ]
      }
    }
  }
};
