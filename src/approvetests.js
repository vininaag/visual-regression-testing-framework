const backstop = require('backstopjs');
const suites_config = require('./suites_config');
let run_config = { config: suites_config };
if (process.argv.length > 2) {
  run_config.filter = process.argv[2];
}
backstop('approve', run_config)
  .then(() => {
    // test successful
  })
  .catch(() => {
    // test failed
  });
