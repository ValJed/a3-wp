require('apostrophe')({
  baseUrl: 'http://localhost:3000',
  shortName: 'a3-wp',
  bundles: [ '@apostrophecms-pro/section-template-library' ],
  modules: {
    '@apostrophecms-pro/signup': {},
    '@apostrophecms/passport-bridge': {
      options: {
        csrfExceptions: [ 'auth' ],
        strategies: [
          {
            module: 'passport-github2',
            options: {
              clientID: 'Ov23liAuQ8qhMp3M38hV',
              clientSecret: 'd147b635b5240b73c6624b4e4308664cb7750a7d'
              /* callbackURL: 'http://localhost:3000/auth/github/callback' */
            },
            match: 'id',
            authenticate: {
              scope: [ 'repo', 'user' ]
            }
          }
        ],
        retainAccessToken: true,
        email: {
          from: '"ApostropheCMS" <no-reply@apostrophecms.com>'
        },
        create: {
          role: 'guest'
        }
      }
    },
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
    asset: {
      options: {
        port: 4000
      }
    },
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

    // Sections
    '@apostrophecms-pro/section-template-tag': {},
    '@apostrophecms-pro/section-template-widget-type': {},
    '@apostrophecms-pro/section-template-library': {},

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
