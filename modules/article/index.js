module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    slugPrefix: 'article-'
  },
  fields: {
    add: {
      array: {
        label: 'Array',
        type: 'array',
        fields: {
          add: {
            themeColor: {
              type: 'color',
              label: 'Theme color'
            },
            toto: {
              label: 'toto',
              type: 'string'
            },
            arrayObject: {
              label: 'arr obj',
              type: 'object',
              fields: {
                add: {
                  arrayObjectString: {
                    label: 'arr obj str',
                    type: 'string',
                    required: true,
                    if: {
                      showStr: true
                    }
                  },
                  showStr: {
                    label: 'Show Str',
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      },
      _pages: {
        label: 'Page',
        type: 'relationship',
        withType: '@apostrophecms/page',
        required: false
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
            '@apostrophecms/rich-text': {
              insert: [ 'table', 'importTable', 'image', 'horizontalRule' ]
            },
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
