
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Topic'
  },
  filters: {
    add: {
      test: {
        label: 'apostrophe:type',
        choices: [
          {
            label: 'Val 1',
            value: 'val1'
          },
          {
            label: 'Val 2',
            value: 'val2'
          }
        ],
        def: null
      }
    },
    remove: [ 'visibility' ]
  },
  fields: {
    add: {
      description: {
        label: 'Description',
        type: 'string'
      },
      _page: {
        label: 'Page',
        type: 'relationship',
        withType: '@apostrophecms/any-page-type',
        fields: {
          add: {
            title: {
              label: 'Title',
              type: 'string',
              required: true,
              if: {
                showTitle: true
              }
            },
            showTitle: {
              label: 'Show title',
              type: 'boolean',
              def: false
            }
          }
        }
      }
    },
    group: {
      basics: {
        fields: [ 'description', '_page' ]
      }
    }
  },
  methods(self) {
    return {
      getChapters(req, data) {
        return [
          {
            label: 'Chapter 1',
            value: 1
          },
          {
            label: 'Chapter 2',
            value: 2
          }
        ];
      }
    };
  }
};
