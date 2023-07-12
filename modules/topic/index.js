
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Topic'
    // Additionally add a `pluralLabel` option if needed.
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
      chapters: {
        label: 'Chapters',
        type: 'select',
        choices: 'getChapters'
      }
    },
    group: {}
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
