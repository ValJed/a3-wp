
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
      article: {
        name: '_article',
        type: 'relationship',
        label: 'Article',
        withType: 'article'
        /* builders: { */
        /*   project: { */
        /*     label: 1, */
        /*     title: 1, */
        /*     slug: 1, */
        /*     _first: 1 */
        /*   } */
        /* } */
      }
    },
    group: {
      basics: {
        fields: [ 'description', '_article' ]
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
