const defaultArea = require('../../lib/area.js');
console.log('defaultArea', defaultArea);

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
      main: {
        label: 'Main',
        type: 'area',
        options: {
          widgets: defaultArea
        }
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
