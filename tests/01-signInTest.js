module.exports = {
  before: function(browser){
    browser.url(browser.globals.magentoURI);
  },

  after: function (browser) {
    browser.end();
  },

  'Sign in with invalid password': function (browser) {
    browser
      .waitForElementVisible('.account-cart-wrapper a[href*="account"]', browser.globals.smallWait)
      .click('.account-cart-wrapper a[href*="account"]')
      .waitForElementVisible('div#header-account', browser.globals.tinyWait)
      .click('a[href*="login"]')
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', 'mrtest377@yopmail.com')
      .clearValue('#pass')
      .setValue('#pass', 'test-pass')
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.error-msg', browser.globals.smallWait);

    browser.assert.containsText('.error-msg', 'Invalid login or password.');
  },

  'Sign in with invalid email': function(browser){
   browser
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', 'test@yopmail.com')
      .clearValue('#pass')
      .setValue('#pass', 'QA92837465')
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.error-msg', browser.globals.smallWait);

    browser.assert.containsText('.error-msg', 'Invalid login or password.');
  },

  'Successful sign in to a website': function(browser){
 browser
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', 'testerok666@gmail.com')
      .clearValue('#pass')
      .setValue('#pass', 'Password1')
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.page-title h1', browser.globals.smallWait);

    browser.assert.containsText('.page-title h1', 'MY DASHBOARD');
    //ToDo: write test for successful sign in
    //pass for the account above 'QA92837465'
  },

   'Go to "Clothes" Category': function(browser){
 browser
      .useXpath()
      .waitForElementVisible('//a[text()="clothes"]', browser.globals.smallWait)
      .click('//a[text()="clothes"]')
      .useCss()
      .waitForElementVisible('.page-title h1', browser.globals.smallWait);

    browser.assert.containsText('.page-title h1', 'CLOTHES');
  },
  'Add to Cart product': function(browser){
 browser
      .useXpath()
      .waitForElementVisible('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button', browser.globals.smallWait)
      .click('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button')
      .useCss()
      .waitForElementVisible('.success-msg', browser.globals.smallWait);

    browser.assert.containsText('.success-msg', 'was added to your shopping cart.');
  }
};
