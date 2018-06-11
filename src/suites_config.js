var env_config = require('./config/config');

var config = {
  id: 'vsTest',
  viewports: [
    {
      label: 'desktop',
      width: env_config.viewport.width,
      height: env_config.viewport.height
    }
  ],
  onBeforeScript: 'chromy/onBefore.js',
  onReadyScript: 'chromy/onReady.js',
  scenarios: [],
  paths: {
    bitmaps_reference: 'src/bitmaps_reference',
    bitmaps_test: 'report/bitmaps_test',
    engine_scripts: 'src/engine_scripts',
    html_report: 'report/html_report',
    ci_report: 'report/ci_report'
  },
  report: ['browser', 'CI'],
  engine: 'chrome',
  engineOptions: {
    waitTimeout: 90000,
    chromeFlags: ['--no-check-certificate', '--disable-dev-shm-usage']
  },
  resembleOutputOptions: {
    ignoreAntialiasing: true
  },
  asyncCaptureLimit: 3,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
var template_scenario = {
  label: 'Dude Add a label',
  cookiePath: 'src/engine_scripts/cookies.json',
  url: env_config.baseURL,
  referenceUrl: '',
  readyEvent: '',
  readySelector: 'body',
  delay: 5000,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: '',
  selectors: ['body'],
  selectorExpansion: false,
  misMatchThreshold: 0.05,
  requireSameDimensions: true
};

//Importing all from tests folder
var normalizedPath = require('path').join(__dirname, 'tests');
var glob = require('glob');

var test_js_files = glob
  .sync(normalizedPath + '/**/*.js')
  .filter(function(elm) {
    return elm.match(/.*\.(js)/gi);
  });
//Need to make it Sychronus. Because tests should not start before preparation. No For Each plz.
for (var i = 0, c = test_js_files.length; i < c; i++) {
  (function(file_test) {
    for (var j = 0, d = require(file_test); j < d.length; j++) {
      config.scenarios.push(Object.assign({}, template_scenario, d[j]));
    }
  })(test_js_files[i]);
}

module.exports = config;
