# visual-regression-testing-framework
Free Visual Regression Testing Framework - Ready To Use
A visual testing framework created using [BackstopJS](https://github.com/garris/BackstopJS) library and ready to use.
 You simply add the URLs to be tested and it will test.

---
#### Getting started
- git clone this repository
- npm install

#### Add your tests
1. Lets try to do github signup page
2. Copy paste below code in a file(create) `signup.tests.js` under `src\tests` folder
```
module.exports = [
  {
    label: 'Githum SignUp Page',
    url: 'https://github.com/join',
    readySelector: "div[role='main']",
    selectors: ['div[role="main"]']
  }
]; 
```
3. You are Done. Run `npm run test`
4. The Test will saying `It doesn't have any reference image for signup page` .
5. Run `npm run approve` and it will take the current result as reference.
6. Run `npm run test` test will pass.

<<MORE DOCUMENTATION ON configuration, running single test are COMING SOON>>




