module.exports = {
  options: {
    subforms: {
      changePassword: {
        fields: [ 'password' ]
      },
      displayName: {
        fields: [ 'title' ]
      }
    },
    groups: {
      account: {
        label: 'Account',
        subforms: [ 'displayName', 'changePassword' ]
      }
      // preferences: {
      //   label: 'Preferences',
      //   // The `adminLocales` option **must** be configured in the `@apostrophecms/i18n` module for this to be allowed
      //   subforms: [ 'adminLocale' ]
      // }
    }
  }
};
