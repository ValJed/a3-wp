module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/layout': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': { },
            '@apostrophecms/video': {},
            '@apostrophecms/form': {}
          }
        }
      },
      main2: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/layout': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {
              minSize: [ 200, 200 ]
            },
            '@apostrophecms/video': {},
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
          'main',
          'main2'
        ]
      }
    }
  }
};
