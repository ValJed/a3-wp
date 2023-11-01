module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      array: {
        label: 'Array',
        type: 'array',
        inline: true,
        fields: {
          add: {
            toto: {
              label: 'toto',
              type: 'string',
              requiredIf: {
                showToto: true
              }
            },
            showToto: {
              label: 'Require Toto',
              type: 'boolean'
            }
          }
        }
      },
      object: {
        label: 'Object',
        type: 'object',
        fields: {
          add: {
            showTutu: {
              label: 'require tutu',
              type: 'boolean',
              def: true
            },
            tutu: {
              label: 'Tutu',
              type: 'string',
              requiredIf: { showTutu: true }
            }
          }
        }
      },
      showDescription: {
        label: 'Show description',
        type: 'boolean',
        def: true
      },
      date: {
        label: 'Date',
        type: 'dateAndTime',
        requiredIf: {
          showDescription: true
        }
      },
      description: {
        label: 'Description',
        type: 'string',
        required: true,
        if: {
          showDescription: true,
          'showInfo()': true
        }
      },
      /* showInfo: { */
      /*   label: 'Info Required', */
      /*   type: 'boolean', */
      /*   def: true */
      /* }, */
      showInfo: {
        label: 'Show Info',
        type: 'select',
        choices: [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          },
          {
            label: '3',
            value: 3
          }
        ]
      },
      info: {
        label: 'Info',
        type: 'string',
        requiredIf: {
          showInfo: 2
        }
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
          'object',
          'showDescription',
          'description',
          'date',
          'showInfo',
          'info',
          'main',
          'image',
          '_topics'
        ]
      },
      arr: {
        label: 'Array',
        fields: [
          'array'
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
      }
    };
  }
};
