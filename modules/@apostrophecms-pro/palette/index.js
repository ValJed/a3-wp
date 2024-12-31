module.exports = {
  fields: {
    add: {
      titleColor: {
        type: 'color',
        label: 'Title Color',
        help: 'Choose a color for the title',
        selector: ':root h3',
        property: 'color'
      },
      textColor: {
        type: 'color',
        label: 'Text Color',
        help: 'Choose a color for the text',
        selector: ':root p',
        property: 'color'
      },
      colorVariable: {
        type: 'color',
        label: 'Background Color',
        help: 'Used in text background color',
        selector: 'body',
        property: 'background-color'
      },
      textDecoration: {
        type: 'select',
        label: 'Text Decoration',
        selector: 'p',
        property: 'text-decoration',
        choices: [
          {
            label: 'None',
            value: 'none'
          },
          {
            label: 'Underline',
            value: 'underline'
          }
        ]
      },
      fontSize: {
        label: 'Font Size',
        type: 'range',
        min: 1,
        max: 40,
        step: 1,
        def: 30,
        unit: 'px',
        property: 'font-size',
        selector: '.palette-playground'
      },
      fontFamily: {
        label: 'Font Family',
        type: 'select',
        selector: '.palette-playground',
        property: 'font-family',
        help: 'Fonts defined in global',
        choices: 'getFontFamilyChoices'
      },
      borderStyle: {
        type: 'select',
        label: 'Border Style',
        selector: '.palette-playground',
        property: 'border-style',
        choices: [
          {
            label: 'None',
            value: 'none'
          },
          {
            label: 'Solid',
            value: 'solid'
          },
          {
            label: 'Dotted',
            value: 'dotted'
          }
        ]
      },
      borderWidth: {
        label: 'Border Width',
        type: 'range',
        min: 1,
        max: 5,
        step: 1,
        unit: 'px',
        property: 'border-width',
        selector: '.palette-playground'
      },
      borderColor: {
        type: 'color',
        label: 'Border Color',
        selector: '.palette-playground',
        property: 'border-color'
      },
      borderRadius: {
        label: 'Border Radius',
        type: 'range',
        min: 0,
        max: 50,
        step: 0.5,
        unit: '%',
        property: 'border-radius',
        selector: '.palette-playground'
      },
      marginTop: {
        label: 'Margin Top',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'margin-top',
        selector: '.palette-playground'
      },
      marginRight: {
        label: 'Margin Right',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'margin-right',
        selector: '.palette-playground'
      },
      marginBottom: {
        label: 'Margin Bottom',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'margin-bottom',
        selector: '.palette-playground'
      },
      marginLeft: {
        label: 'Margin Left',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'margin-left',
        selector: '.palette-playground'
      },
      paddingTop: {
        label: 'Padding Top',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'padding-top',
        selector: '.palette-playground'
      },
      paddingRight: {
        label: 'Padding Right',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'padding-right',
        selector: '.palette-playground'
      },
      paddingBottom: {
        label: 'Padding Bottom',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'padding-bottom',
        selector: '.palette-playground'
      },
      paddingLeft: {
        label: 'Padding Left',
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
        unit: 'px',
        property: 'padding-left',
        selector: '.palette-playground'
      },
      shadow: {
        label: 'Shadow',
        type: 'color',
        selector: '.palette-playground',
        property: 'box-shadow',
        valueTemplate: '0 0 7px 2px %VALUE%'
      },
      rotation: {
        label: 'Rotation',
        type: 'range',
        min: 0,
        max: 360,
        step: 1,
        unit: 'deg',
        selector: '.palette-playground',
        property: 'transform',
        valueTemplate: 'rotate(%VALUE%)'
      },
      blur: {
        label: 'Blur',
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
        unit: 'px',
        selector: '.palette-playground',
        property: 'filter',
        valueTemplate: 'blur(%VALUE%)'
      },
      float: {
        type: 'select',
        label: 'Float',
        help: 'Applied on screens with width less than 801px',
        selector: '.palette-playground',
        property: 'float',
        choices: [
          {
            label: 'None',
            value: 'none'
          },
          {
            label: 'Left',
            value: 'left'
          },
          {
            label: 'Right',
            value: 'right'
          }
        ],
        mediaQuery: 'screen and (max-width: 800px)'
      },
      opacity: {
        type: 'select',
        label: 'Opacity',
        help: 'Applied on screens with width more than 800px',
        selector: '.palette-playground',
        property: 'opacity',
        choices: [
          {
            label: '50%',
            value: '0.5'
          }
        ],
        mediaQuery: 'screen and (min-width: 801px)'
      }
    },
    group: {
      colors: {
        label: 'Colors',
        fields: [ 'titleColor', 'textColor', 'colorVariable' ]
      },
      typography: {
        label: 'Typography',
        fields: [ 'textDecoration', 'fontSize', 'fontFamily' ]
      },
      miscellaneous: {
        label: 'Miscellaneous',
        group: {
          border: {
            label: 'Border',
            fields: [ 'borderStyle', 'borderWidth', 'borderColor', 'borderRadius' ]
          },
          margin: {
            label: 'Margin',
            fields: [ 'marginTop', 'marginRight', 'marginBottom', 'marginLeft' ]
          },
          padding: {
            label: 'Padding',
            fields: [ 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft' ]
          }
        },
        fields: [ 'shadow', 'rotation', 'blur' ]
      },
      mediaQueries: {
        label: 'Media Queries',
        fields: [ 'float', 'opacity' ]
      }
    }
  }
};
