const styles = require('./lib/styles.js');

module.exports = {
  options: {
    defaultOptions: {
      toolbar: [
        'styles',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        '|',
        'table',
        '|',
        'link',
        '|',
        'alignLeft',
        'alignCenter',
        'alignRight',
        'alignJustify',
        '|',
        'bulletList',
        'orderedList',
        'blockquote',
        '|',
        'undo',
        'redo'
      ],
      styles: styles,
      colors: [
        {
          code: '#000',
          label: 'Default'
        },
        {
          code: '#fff',
          label: 'White'
        },
        {
          code: 'var(--primary-color, "#000")',
          label: 'Primary'
        },
        {
          code: 'var(--accent-color, "#fff")',
          label: 'Secondary'
        },
        {
          code: 'var(--third-color, "#4d4d4d")',
          label: 'Third'
        }
      ]
    }
  },

  init(self) {
    self.options.editorTools = {
      ...self.options.editorTools,
      color: {
        component: 'IATiptapColor',
        label: 'Color',
        icon: 'image-icon'
      }
    };
  },

  icons: {
    'palette-icon': 'Palette'
  },

  extendMethods(self) {
    return {
      toolbarToAllowedTags(_super, options) {
        const allowedTags = _super(options);
        allowedTags.push('span');
        return allowedTags;
      },

      toolbarToAllowedAttributes(_super, options) {
        const allowedAttributes = _super(options);

        const a = {
          ...allowedAttributes,
          span: (allowedAttributes.span || []).concat([ 'style' ]),
          color: (allowedAttributes.span || []).concat([ 'style' ])
        };
        return a;
      },

      toolbarToAllowedStyles(_super, options) {
        const allowedStyles = _super(options);

        allowedStyles['*'] = {
          ...allowedStyles['*'],
          color: [ /(.*)/ ]
        };

        return allowedStyles;
      }
    };
  }
};
