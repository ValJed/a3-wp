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
          widgets: defaultArea
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
