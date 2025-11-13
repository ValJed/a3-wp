const defaultArea = require('../../lib/area.js');

module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page',
    publicApiProjection: {
      title: 1,
      description: 1,
      main: 1,
      _url: 1
    }
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: defaultArea
        }
      },
      description: {
        label: 'Description',
        type: 'string'
      },
      _articles: {
        label: 'Articles',
        type: 'relationship',
        withType: 'article',
        withRelationships: [ '_topics' ],
        builders: {
          project: {
            title: 1,
            description: 1
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main',
          '_articles',
          'description'
        ]
      }
    }
  }
};
