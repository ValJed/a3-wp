module.exports = {
  extend: '@apostrophecms/widget-type',
  fields(self) {
    return {
      add: {
        title: {
          label: 'title',
          type: 'string',
          required: true
        },
        cards: {
          type: 'array',
          min: 1,
          max: 3,
          fields: {
            add: {
              title: {
                type: 'string',
                required: true
              },
              icon: {
                type: 'select',
                choices: [
                  {
                    label: 'icon-tire-hammer-mono',
                    value: 'icon-tire-hammer-mono.svg'
                  }
                ],
                required: true
              },
              textarea: {
                label: 'Content',
                type: 'area',
                options: {
                  widgets: {
                    '@apostrophecms/rich-text': {}
                  }
                },
                required: true
              },
              enableAction: {
                type: 'boolean',
                def: true
              },
              isExternal: {
                type: 'boolean',
                help: 'Define if the action is an external (to the website) or internal link',
                def: false,
                if: {
                  enableAction: true
                }
              },
              actionLabel: {
                type: 'string',
                required: true,
                if: {
                  enableAction: true
                }
              },
              _linkPage: {
                type: 'relationship',
                help: 'Used if is external : No',
                withType: '@apostrophecms/page',
                max: 1,
                builders: {
                  project: {
                    title: 1,
                    _url: 1
                  }
                },
                required: true,
                if: {
                  enableAction: true,
                  isExternal: false
                }
              },
              href: {
                type: 'url',
                label: 'Link URL',
                help: 'Used if is external : Yes',
                required: true,
                if: {
                  enableAction: true,
                  isExternal: true
                }
              },
              actionSkin: {
                type: 'radio',
                choices: [
                  {
                    label: 'Default',
                    value: 'default'
                  },
                  {
                    label: 'Primary',
                    value: 'primary'
                  },
                  {
                    label: 'Secondary',
                    value: 'secondary'
                  },
                  {
                    label: 'Tertiary',
                    value: 'tertiary'
                  },
                  {
                    label: 'Link',
                    value: 'link'
                  }
                ],
                def: 'link',
                if: {
                  enableAction: true
                }
              }
            }
          }
        }
      },
      group: {
        basics: {
          label: 'Basics',
          fields: [ 'title', 'cards' ]
        }
      }
    };
  }
};
