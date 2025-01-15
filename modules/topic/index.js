
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
      range: {
        label: 'Range',
        type: 'range',
        min: 1,
        max: 40
      },
      color: {
        label: 'Color',
        type: 'color'
      },
      description: {
        label: 'Description',
        type: 'string'
      }
      /* _page: { */
      /*   label: 'Page', */
      /*   type: 'relationship', */
      /*   withType: '@apostrophecms/any-page-type', */
      /*   fields: { */
      /*     add: { */
      /*       title: { */
      /*         label: 'Title', */
      /*         type: 'string', */
      /*         required: true, */
      /*         if: { */
      /*           showTitle: true */
      /*         } */
      /*       }, */
      /*       showTitle: { */
      /*         label: 'Show title', */
      /*         type: 'boolean', */
      /*         def: false */
      /*       } */
      /*     } */
      /*   } */
      /* } */
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'description', 'color' /* '_page' */ ]
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
