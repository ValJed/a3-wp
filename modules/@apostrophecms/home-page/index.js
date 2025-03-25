module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          /* expanded: true, */
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                'anchor',
                '|',
                'image',
                'bulletList',
                'table',
                'importTable',
                'color'
              ],
              insert: [
                'image',
                'table',
                'horizontalRule',
                'importTable'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                },
                {
                  tag: 'b',
                  label: 'B'
                },
                {
                  tag: 'strong',
                  label: 'Strong'
                }
              ]
            },
            '@apostrophecms/image': {
              minSize: [ 3000, 600 ]
            },
            '@apostrophecms/video': {},
            '@apostrophecms-pro/data-set': {},
            'two-column': {},
            random: {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
