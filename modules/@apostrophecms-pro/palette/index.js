module.exports = {
  fields: {
    add: {
      backgroundColor: {
        type: 'color',
        label: 'Page Background',
        selector: 'body',
        property: 'background-color'
      },
      color: {
        type: 'color',
        label: 'Page Color',
        selector: 'body',
        property: 'color'
      },
      imageWidgetMargins: {
        label: 'Vertical space between image widgets',
        type: 'range',
        selector: [ '.c-image-widget', '.c-slideshow-widget' ],
        property: [ 'margin-bottom', 'margin-top' ],
        min: 0,
        max: 10,
        step: 0.1,
        unit: 'rem',
        mediaQuery: '(max-width: 59.99em)'
      },
      buttonShadow: {
        name: 'buttonShadow',
        label: 'Button Shadow',
        type: 'color',
        selector: '.c-button',
        property: 'box-shadow',
        valueTemplate: '0 0 7px 2px %VALUE%'
      }
    },
    group: {
      colors: {
        label: 'Colors',
        /* fields: [ 'backgroundColor' ], */
        group: {
          color: {
            label: 'Colors',
            fields: [ 'color' ]
          },
          backgroundColor: {
            label: 'Background Colors',
            fields: [ 'backgroundColor' ]
          }
        }
      },
      space: {
        label: 'Spacing',
        fields: [ 'imageWidgetMargins' ]
      },
      buttons: {
        label: 'Buttons',
        fields: [ 'buttonShadow' ]
      }
    }
  }
};
