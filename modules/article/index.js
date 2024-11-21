const linkSchema = require('./linkSchema');
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    slugPrefix: 'article-'
  },
  fields: {
    add: {
      buttons: {
        type: 'array',
        max: 2,
        fields: {
          add: linkSchema(true)
        }
      },
      showChoices: {
        label: 'Show Choices',
        type: 'boolean',
        def: false
      },
      choices: {
        label: 'Choices',
        type: 'select',
        choices: 'getChoices'
      },
      dark: {
        label: 'Dark',
        type: 'url',
        required: true,
        if: {
          choices: 'dark'
        }
      },
      light: {
        label: 'Light',
        type: 'url',
        required: true,
        if: {
          choices: 'light'
        }
      },
      dusk: {
        label: 'Dusk',
        type: 'url',
        required: true,
        if: {
          choices: 'dusk'
        }
      }
    },
    group: {
      basics: {
        fields: [
          'buttons',
          'showChoices',
          'choices',
          'dark',
          'light',
          'dusk'
        ]
      }
    }
  },
  methods(self) {
    return {
      async getChoices() {
        await wait();

        return [
          {
            label: 'Dark 🌚',
            value: 'dark'
          },
          {
            label: 'Light 💡',
            value: 'light'
          },
          {
            label: 'Dusk 🌆',
            value: 'dusk'
          }
        ];
      }
    };
  }
};

function wait(time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}
