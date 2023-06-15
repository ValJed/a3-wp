module.exports = {
  extend: '@apostrophecms/piece-type',
  fields(self) {
    return {
      add: {
        description: {
          label: 'Description',
          type: 'string'
        }
      },
      group: {
        basics: {
          /* label: 'Basics', */
          fields: [ 'description' ]
        }
      }
    };
  }
};
