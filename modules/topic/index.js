
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
      }
    },
    group: {
      basics: {
        fields: [ 'description' ]
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
