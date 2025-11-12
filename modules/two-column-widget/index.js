const defaultArea = require('../../lib/area.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two Column'
  },
  fields: {
    add: {
      one: {
        type: 'area',
        contextual: true,
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            random: {},
            'two-column': {}
          }
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          widgets: defaultArea
        }
      }
    }
  }
};
