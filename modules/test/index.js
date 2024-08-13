module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Test'
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      },
      area: {
        label: 'Area',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      _rel: {
        label: 'Rel',
        type: 'relationship',
        withType: 'article'
      },
      array: {
        label: 'Array',
        type: 'array',
        fields: {
          add: {
            _arrayRel: {
              label: 'Array Rel',
              type: 'relationship',
              withType: 'article'
            }
          }
        }
      },
      object: {
        label: 'Object',
        type: 'object',
        fields: {
          add: {
            _objectRel: {
              label: 'Object Rel',
              type: 'relationship',
              withType: 'topic'
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'area', '_rel', 'array', 'object' ]
      }
    }
  }
};
