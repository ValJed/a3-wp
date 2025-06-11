// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: 'article-page',
        label: 'Article Page'
      }
    ]
  },
  filters: {
    add: {
      foo: {
        label: 'Foo',
        choices: [
          {
            value: 'foo',
            label: 'Foo'
          },
          {
            value: 'bar',
            label: 'Bar'
          }
        ]
      }
    }
  },
  methods(self) {
    return {
      getChoices() {
        return [
          {
            value: 'foo',
            label: 'Foo'
          },
          {
            value: 'bar',
            label: 'Bar'
          },
          {
            value: 'baz',
            label: 'Baz'
          }
        ];
      }
    };
  }
};
