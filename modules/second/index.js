module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Second',
    slugPrefix: 'second-'
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
      isSecond: {
        label: 'Is Second',
        type: 'boolean',
        def: true
      },
      _first: {
        type: 'relationship',
        withType: 'first',
        required: false,
        builders: {
          project: {
            title: 1,
            slug: 1
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'description', 'isSecond', '_first' ]
      }
    }
  }
};
