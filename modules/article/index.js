module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    slugPrefix: 'article-'
  },
  fields: {
    add: {
      /* _images: { */
      /*   label: 'Images', */
      /*   type: 'relationship', */
      /*   withType: '@apostrophecms/image', */
      /*   max: 3 */
      /* }, */
      color: {
        label: 'Color',
        type: 'color'
      },
      array: {
        label: 'Array',
        type: 'array',
        inline: true,
        fields: {
          add: {
            themeColor: {
              type: 'color',
              label: 'Theme color'
            },
            toto: {
              label: 'toto',
              type: 'string'
            }
          }
        }
      },

      description: {
        label: 'Description',
        type: 'string',
        required: true
      },

      main: {
        label: 'Main',
        type: 'area',
        options: {
          widgets: {
            'two-column': {},
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
        withType: 'topic',
        required: false
      }
    },
    group: {
      basics: {
        fields: [
          'color',
          '_pages',
          '_first',
          'description',
          '_topics',
          'main',
          'image'
        ]
      },
      arr: {
        label: 'Array',
        fields: [
          'array',
          'arrayInline'
        ]
      },
      object: {
        label: 'Object',
        fields: [ 'object' ]
      }
    }
  }
};
