
module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      }
    }
  },
  webpack: {
    extensions: {
      jsxAddition: {
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/, // Apply this rule to .js and .jsx files
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [ '@babel/preset-react' ] // Presets for ES6+ and React
                }
              }
            }
          ]
        },
        resolve: {
          extensions: [ '.jsx' ]
        }
      }
    }
  }
};
