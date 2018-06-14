# visual-regression-testing-framework
Free Visual Regression Testing Framework - Ready To Use
A visual testing framework created using [BackstopJS](https://github.com/garris/BackstopJS) library and ready to use.
 You simply add the URLs to be tested and it will test.

---
## Contents
1. ##### [Install][install]
2. ##### [Add New Test][add-new-test-1]
3. ##### [Add Reference Image][add-reference-image-1]
4. ##### [Run your tests][run-the-tests]

#### Install
- git clone this repository
- npm install

#### Add new test
1. Lets try to do github signup page `https://github.com/join`
2. All our test files we keep under `src\tests` folder. Create file `signup.tests.js` and add scenario(test) for  signup page like below.
```
module.exports = [
  {
    label: 'Github SignUp Page',
    url: 'https://github.com/join',
    readySelector: "div[role='main']",
    selectors: ['div[role="main"]']
  }
];
```
 Note: you can add multiple scenarios(tests) with comma seperated.

#### Add reference image
To add reference image we need to run the tests.
1. Run `npm run test`
2. One test (added above) will fail saying `It doesn't have any reference image for signup page` .  Report will be like below  
[![One Failed Report](https://raw.githubusercontent.com/vininaag/visual-regression-testing-framework/master/readmefiles/no_ref_image.png "One Failed Report")](https://raw.githubusercontent.com/vininaag/visual-regression-testing-framework/master/readmefiles/no_ref_image.png "One Failed Report")
3. Run `npm run approve` and it will take the current result as reference image. Now our test has reference image.
Note: All reference images will be present inside `src/bitmaps_reference`
#### Run the tests

1. Run `npm run test` All tests will pass.
Complete report will look like below
![Full Report](https://raw.githubusercontent.com/vininaag/visual-regression-testing-framework/master/readmefiles/full_report.png "Full Report")



------------

------------



####Below features are already available & works. Documentation will be added soon.
 -  Run a single test  (`npm run test -- SignUp` ) will run all tests that has `SignUp` in their title.

- Configuration browser, size of browser & others.
- How to use cookies.

------------


[add-new-test-1]: #add-new-test-1 "Add new test"
[install]: #install "Installation"
[add-reference-image-1]: #add-reference-image-1 "Add Reference Image"
[run-the-tests]: #run-the-tests "Run you tests"
