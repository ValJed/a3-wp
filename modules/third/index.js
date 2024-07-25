module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Third',
    slugPrefix: 'third-'
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
      isThird: {
        label: 'Is Third',
        type: 'boolean',
        def: true
      },
      second: {
        name: '_second',
        type: 'relationship',
        label: 'Second piece type',
        withType: 'second',
        withRelationships: [ '_first' ],
        builders: {
          project: {
            label: 1,
            title: 1,
            slug: 1,
            _first: 1
          }
        },
        min: 1,
        max: 1
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'description', 'isThird', '_second' ]
      }
    }
  }
};
