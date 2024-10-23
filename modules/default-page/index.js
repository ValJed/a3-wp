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
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            random: {}
          }
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
