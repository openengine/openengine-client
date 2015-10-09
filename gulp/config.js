const dest = './build';
const src = './src';

//https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-60410751
const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src],
      middleware: [historyApiFallback()]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
