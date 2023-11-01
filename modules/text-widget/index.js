module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string'
      },
      showDescription: {
        label: 'Show Desc',
        type: 'boolean',
        def: true
      },
      description: {
        label: 'Description',
        type: 'string',
        requiredIf: {
          showDescription: true
        }
      },
      object: {
        label: 'Object',
        type: 'object',
        fields: {
          add: {
            requireToto: {
              label: 'Require Toto',
              type: 'boolean'
            },
            toto: {
              label: 'Toto',
              type: 'string',
              requiredIf: {
                requireToto: true
              }
            },
            visible: {
              label: 'Visible',
              type: 'string',
              required: true,
              if: {
                showVisible: true
              }
            },
            showVisible: {
              label: 'Show Visible',
              type: 'boolean'
            }
          }
        }
      }
    }
  }
};
