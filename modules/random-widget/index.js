
module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      },
      _relPage: {
        label: 'Rel page',
        type: 'relationship',
        withType: 'default-page',
        withRelationships: true,
        builders: {
          project: {
            title: 1,
            description: 1
          }
        }
      }
    }
  }
};