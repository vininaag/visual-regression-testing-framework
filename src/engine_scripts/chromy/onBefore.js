// eslint-disable-next-line no-unused-vars
module.exports = function(chromy, scenario, vp) {
  require('./loadCookies')(chromy, scenario);
  // eslint-disable-next-line
  console.log(
    'Testing Scenario: [' + scenario.label + '] with URL: ' + scenario.url
  );
  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};
