const eventTrackingFields = {
  isEventTracking: {
    label: 'Enable trigger GTM Event',
    type: 'boolean',
    def: false
  },
  eventsTrackingData: {
    type: 'object',
    label: 'Event Data',
    required: true,
    fields: {
      add: {
        event: {
          label: 'Event',
          type: 'string',
          required: true,
          help: 'The name of the event you want to track, e.g., "campaign_button_click".'
        },
        eventCategory: {
          label: 'Event Category',
          type: 'string',
          required: true,
          help: 'A category to group events, e.g., "A campaign Name".'
        },
        eventAction: {
          label: 'Event Action',
          type: 'string',
          required: true,
          help: 'The action that triggered the event, e.g., "click".'
        },
        eventLabel: {
          label: 'Event Label',
          type: 'string',
          required: true,
          help: 'A label to provide additional information about the event, e.g., "Sign Up Button".'
        },
        eventValue: {
          label: 'Event Value',
          type: 'string',
          required: true,
          help: 'A numerical value associated with the event, e.g., "1".'
        }
      }
    },
    if: {
      isEventTracking: true
    }
  }
};

module.exports = eventTrackingFields;
