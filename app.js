require('apostrophe')({
  baseUrl: 'http://localhost:3000',
  shortName: 'a3-wp',
  modules: {
    '@apostrophecms/vite': {
      options: {
        hmr: 'apos'
      }
    },
    '@apostrophecms/asset': {
      options: {
        hmr: 'apos',
        breakpointPreviewMode: {
          enable: true,
          debug: false,
          screens: {
            desktop: {
              label: 'apostrophe:breakpointPreviewDesktop',
              width: '1440px',
              height: '900px',
              icon: 'monitor-icon',
              shortcut: true
            },
            tablet: {
              label: 'apostrophe:breakpointPreviewTablet',
              width: '1024px',
              height: '768px',
              icon: 'tablet-icon',
              shortcut: true
            },
            mobile: {
              label: 'apostrophe:breakpointPreviewMobile',
              width: '414px',
              height: '896px',
              icon: 'cellphone-icon',
              shortcut: true
            }
          }
        }
      }
    },
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text',
        linkWithType: [ '@apostrophecms/any-page-type', 'article' ]
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

    'img-with-placeholder-widget': {},
    article: {},
    'article-page': {},
    topic: {},
    'random-widget': {},
    'two-column-widget': {},
    '@apostrophecms-pro/palette': {},
    '@apostrophecms-pro/advanced-permission-group': {},
    '@apostrophecms-pro/advanced-permission': {},

    '@apostrophecms-pro/document-versions': {},
    '@apostrophecms-pro/data-set': {},
    '@apostrophecms-pro/data-set-widget': {},
    '@apostrophecms/scheduled-publishing': {},
    '@apostrophecms/redirect': {},
    '@apostrophecms/import-export': {},
    '@apostrophecms-pro/doc-template-library': {},
    '@apostrophecms-pro/automatic-translation': {},
    '@apostrophecms-pro/automatic-translation-deepl': {
      options: { apiSecret: '6d28acd6-4e26-46c6-883e-d07b06a96be2:fx' }
      /* extendMethods(self) { */
      /*   return { */
      /*     async requestTranslation(_super, req, text, source, target) { */
      /*       return text.map((t) => `${t}-${source}-${target}-translated`); */
      /*     }, */
      /*     async getSupportedLanguages(_super, req, source, target) { */
      /*       const supported = [ 'en', 'es', 'fr' ]; */
      /*       const sourceRespone = source?.length */
      /*         ? source.map((code) => ({ */
      /*           code, */
      /*           supported: supported.includes(code) */
      /*         })) */
      /*         : supported.map((code) => ({ */
      /*           code, */
      /*           supported: true */
      /*         })); */
      /*       const targetResponse = target?.length */
      /*         ? target.map((code) => ({ */
      /*           code, */
      /*           supported: supported.includes(code) */
      /*         })) */
      /*         : supported.map((code) => ({ */
      /*           code, */
      /*           supported: true */
      /*         })); */
      /**/
      /*       return { */
      /*         source: sourceRespone, */
      /*         target: targetResponse */
      /*       }; */
      /*     } */
      /**/
      /*   }; */
      /* } */
    }
  }
});
