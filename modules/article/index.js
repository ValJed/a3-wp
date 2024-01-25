module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
    /* localized: false */

    // Additionally add a `pluralLabel` option if needed.
  },
  init(self) {
    self.addTestFieldType();
  },
  fields: {
    add: {
      array: {
        label: 'Array',
        type: 'array',
        fields: {
          add: {
            toto: {
              label: 'toto',
              type: 'string',
              if: {
                showToto: true
              }
            },
            showToto: {
              label: 'Require Toto',
              type: 'boolean',
              def: false
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
        fields: {
          add: {
            test: {
              label: 'Test',
              type: 'string'
            }
          }
        },
        requiredIf: {
          showInfo: 2
        }
      }
    },
    group: {
      basics: {
        fields: [
          'description',
          'main',
          'image',
          'test',
          '_followed',
          '_topics'
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
      showInfo() {
        return true;
      },

      addTestFieldType() {
        self.apos.schema.addFieldType({
          name: 'test',
          extend: 'string',
          vueComponent: 'AposInputTest'
        });
      }
    };
  }
};
