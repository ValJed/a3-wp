require('apostrophe')({
  baseUrl: 'http://localhost:3000',
  shortName: 'a3-wp',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},

    article: {},
    topic: {},
    'text-widget': {},
    'two-column-widget': {},
    'article-page': {},
    '@apostrophecms-pro/advanced-permission-group': {},
    '@apostrophecms-pro/advanced-permission': {},

    '@apostrophecms-pro/document-versions': {},
    '@apostrophecms-pro/data-set': {},
    '@apostrophecms-pro/data-set-widget': {},
    '@apostrophecms/scheduled-publishing': {},
    '@apostrophecms/redirect': {},
    '@apostrophecms/import-export': {},
    '@apostrophecms-pro/doc-template-library': {}
  }
});
