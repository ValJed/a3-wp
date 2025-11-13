const defaultArea = require('../../lib/area.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      },
      main: {
        type: 'area',
        options: {
          widgets: defaultArea
        }
      }
    }
  }
};
