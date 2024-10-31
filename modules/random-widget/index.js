
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
        withRelationships: [ '_articles._topics' ],
        builders: {
          project: {
            title: 1,
            description: 1
          }
        }
      },
      align: {
        type: 'alignment',
        label: '[New] Content Alignment',
        help: 'By default, the content is centered',
        tabs: [
          {
            label: 'Desktop',
            value: 'desktop',
            options: {
              only: 'vertical'
            }
          }
        ],
        default: {
          desktop: {
            vertical: 'center'
          }
        }
      }
    }
  },

  init(self) {
    self.options.editorTools = {
      ...self.options.editorTools,
      color: {
        component: 'IATiptapColor',
        label: 'Color'
      }
    };

    self.addAlignmentFieldType();
  },
  methods(self) {
    return {
      addAlignmentFieldType() {
        self.apos.schema.addFieldType({
          name: 'alignment',
          convert: self.convertInput,
          vueComponent: 'InputAlignement'
        });
      },
      async convertInput(req, field, data, object) {
        if ((data[field.name] == null) || (data[field.name] === '')) {
          if (field.required) {
            throw self.apos.error('notfound');
          }
        }
        object[field.name] = data[field.name];
      }
    };
  }
};
