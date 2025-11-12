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
            '@apostrophecms/layout': {
              columns: 6,
              defaultSpan: 3,
              minSpan: 1,
              gap: '1rem'
            },
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {
              aspectRatio: [ 2, 1 ],
              minSize: [ 1000, 500 ]
            },
            '@apostrophecms/video': {},
            random: {}
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
