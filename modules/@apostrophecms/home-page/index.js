module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          /* expanded: true, */
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {
              aspectRatio: [ 2, 1 ],
              minSize: [ 1000, 500 ]
            },
            '@apostrophecms/video': {},
            '@apostrophecms-pro/data-set': {},
            'two-column': {},
            random: {},
            '@apostrophecms/form': {},
            'img-with-placeholder': {}
          }
        }
      },
      main2: {
        type: 'area',
        options: {
          /* expanded: true, */
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {
              minSize: [ 200, 200 ]
            },
            '@apostrophecms/video': {},
            '@apostrophecms-pro/data-set': {},
            'two-column': {},
            random: {},
            '@apostrophecms/form': {},
            'img-with-placeholder': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
