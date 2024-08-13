module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    slugPrefix: 'article-'
    /* localized: false */

    // Additionally add a `pluralLabel` option if needed.
  },
  init(self) {
    self.addTestFieldType();
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
        fields: {
          add: {
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
        required: false,
        withType: 'topic'
        /* builders: { */
        /*   project: { */
        /*     title: 1, */
        /*     descritpion: 1 */
        /*   } */
        /* } */
      }
    },
    group: {
      basics: {
        fields: [
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
      },

      async getSystemContext(req, { docId }) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return 'external';
      }
    };
  }
};

function getRequiredFields() {
  return {
    requiredExternalFail: {
      label: 'required external fail',
      type: 'string',
      help: 'should not be required since external condition failed',
      requiredIf: {
        'getSystemContext()': 'internal'
      }
    },

    requiredExternalSuccess: {
      label: 'required external success',
      type: 'string',
      help: 'should be required since external condition succeeded',
      def: 'test',
      requiredIf: {
        'getSystemContext()': 'external'
      }
    },

    requireFields: {
      label: 'require fields',
      type: 'boolean'
    },

    requiredExternalOr: {
      label: 'required external or',
      type: 'string',
      help: 'should be required if require fields is true since we use a $or operator between external condition (failure) and the boolean field',
      requiredIf: {
        $or: [
          { requireFields: true },
          { 'getSystemContext()': 'internal' }
        ]
      }
    },
    requiredExternalAnd: {
      label: 'required external and',
      type: 'string',
      help: 'should be required if require fields is true since we use a and operator between external condition (success) and the boolean field',
      requiredIf: {
        requireFields: true,
        'getSystemContext()': 'external'
      }
    }
  };
}
