const backstop = require('backstopjs');
const suites_config = require('./suites_config');
const CookieHelper = require('./utils/cookie-helper');
const fs = require('fs');
const COOKIE_FILE_PATH = 'src/engine_scripts/cookies.json';
const cookieHelper = new CookieHelper();

//Step 01: Set Cookies
cookieHelper.getCookie().then(async function(result) {
  if (fs.existsSync(COOKIE_FILE_PATH)) {
    fs.writeFileSync(COOKIE_FILE_PATH, JSON.stringify(result));
  } else {
    // eslint-disable-next-line
    console.log('ERROR: COOKIE FILE NOT EXISTS');
  }

  //Step 02: Prepare the Config

  let run_config = { config: suites_config };
  if (process.argv.length > 2) {
    run_config.filter = process.argv[2];
  }
  // eslint-disable-next-line
  console.log('Configuration: ' + JSON.stringify(run_config, null, 2));
  //Step 03: Run the tests

  backstop('test', run_config)
    .then(() => {
      // test successful
    })
    .catch(() => {
      // test failed
    })
    .finally(() => {
      // finally block
    });
});
