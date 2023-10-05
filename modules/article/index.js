module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      description: {
        label: 'Description',
        type: 'string'
      },
      main: {
        label: 'Main',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      },
      image: {
        type: 'attachment',
        group: 'images'
      },
      _topics: {
        label: 'Topics',
        type: 'relationship',
        withType: 'topic'
      }
    },
    group: {
      basics: {
        fields: [
          'description',
          'main',
          'image',
          '_topics'
        ]
      }
    }
  }
};
