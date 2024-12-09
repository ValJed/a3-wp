const eventTrackingFields = require('./events-data-schema.js');

module.exports = (
  linkStyle = true
) => {
  const linkSchema = {
    linkLabel: {
      label: 'Link label',
      type: 'string',
      required: false
    },
    linkType: {
      label: 'Link type',
      type: 'select',
      def: 'page',
      choices: [
        {
          label: 'Modal',
          value: 'modal'
        },
        {
          label: 'Page',
          value: 'page'
        },
        {
          label: 'File',
          value: 'file'
        },
        {
          label: 'Custom',
          value: 'custom'
        },
        {
          label: 'Fund',
          value: 'fund'
        },
        {
          label: 'Insight',
          value: 'insight'
        }
      ]
    }
  };

  if (linkStyle) {
    linkSchema.linkStyle = {
      label: 'Link style',
      type: 'select',
      def: 'fg-btn primary outlined',
      choices: [
        {
          label: 'No style',
          value: ''
        },
        {
          label: 'Button Primary',
          value: 'fg-btn primary'
        },
        {
          label: 'Button Primary Outlined',
          value: 'fg-btn primary outlined'
        },
        {
          label: 'Button Charcoal',
          value: 'fg-btn charcoal'
        },
        {
          label: 'Button Charcoal Outlined',
          value: 'fg-btn charcoal outlined'
        },
        {
          label: 'Button White',
          value: 'fg-btn white'
        },
        {
          label: 'Button White Outlined',
          value: 'fg-btn white outlined'
        },
        {
          label: 'Link',
          value: 'fg-link'
        }
      ]
    };
  }

  linkSchema._page = {
    label: 'Link page',
    type: 'relationship',
    withType: '@apostrophecms/page',
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'page'
    }
  };

  linkSchema._file = {
    label: 'Link file',
    type: 'relationship',
    withType: '@apostrophecms/file',
    withRelationships: [ 'attachment._url' ],
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
        attachment: 1,
        type: 1
      }
    },
    if: {
      linkType: 'file'
    }
  };

  linkSchema._fundType = {
    label: 'Fund type',
    type: 'relationship',
    withType: '@apostrophecms/page',
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'fund'
    }
  };

  linkSchema._insight = {
    label: 'Insight',
    type: 'relationship',
    withType: '@apostrophecms/page',
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'insight'
    }
  };

  linkSchema.linkUrl = {
    label: 'Custom URL',
    type: 'url',
    required: true,
    if: {
      linkType: 'custom'
    }
  };

  linkSchema.ariaLabel = {
    label: 'Aria label',
    type: 'string',
    help: 'This is used for screen readers and SEO'
  };

  linkSchema.title = {
    label: 'Title',
    help: 'The title appears as a tooltip when the user hovers over the link',
    type: 'string'
  };

  linkSchema.target = {
    label: 'Will the link open a new browser tab?',
    type: 'boolean',
    def: false
  };

  linkSchema._modal = {
    label: 'Modal',
    type: 'relationship',
    withType: '@apostrophecms/page',
    required: true,
    max: 1,
    if: {
      linkType: 'modal'
    }
  };

  linkSchema.isEventTracking = eventTrackingFields.isEventTracking;
  linkSchema.eventsTrackingData = eventTrackingFields.eventsTrackingData;

  return linkSchema;
};
