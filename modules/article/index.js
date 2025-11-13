const defaultArea = require('../../lib/area.js');

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    slugPrefix: 'article-'
  },
  filters: {
    add: {
      /* foo: { */
      /*   label: 'Foo', */
      /*   choices: 'getChoices()' */
      /* }, */
      _topics: {
        label: 'Topics'
      }
    }
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
        required: false,
        fields: {
          add: {
            test1: {
              type: 'string',
              label: 'Test 1'
            },
            test2: {
              type: 'string',
              label: 'Test 2'
            }
          }
        }
      },
      _articles: {
        label: 'Articles',
        type: 'relationship',
        withType: 'article',
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
          widgets: defaultArea
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
      },
      select: {
        label: 'Select',
        type: 'select',
        choices: 'getChoices()'
      }
    },
    group: {
      basics: {
        fields: [
          'color',
          '_pages',
          '_articles',
          '_first',
          'description',
          '_topics',
          'main',
          'image',
          'select'
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
  },
  methods(self) {
    return {
      getChoices(req, first, ctx) {
        return [
          {
            label: 'Choice 1',
            value: 'choice1'
          },
          {
            label: 'Choice 2',
            value: 'choice2'
          },
          {
            label: 'Choice 3',
            value: 'choice3'
          }
        ];
      }
    };
  }
};
