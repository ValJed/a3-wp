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
              minSize: [ 1000, 1000 ]
            },
            '@apostrophecms/video': {},
            '@apostrophecms-pro/data-set': {},
            'two-column': {},
            random: {},
            '@apostrophecms/form': {}
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
            '@apostrophecms/form': {}
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
