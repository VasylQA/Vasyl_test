const existingUserEmail = 'testerok666@gmail.com';
const existingUserPassword = 'Password1';
const errorMessage = 'Invalid login or password.';

module.exports = {
  'Sign in with invalid password': function (browser) {
    const homepage = browser.page.homepagePage();
    const login = browser.page.loginPage();

    homepage
      .navigate()
      .clickAccountMenuInHeader()
      .clickLoginOptionInMenu();

    login
      .enterUserEmail(existingUserEmail)
      .enterUserPassword('testPassword')
      .clickLoginButton();

    browser
      .waitForElementVisible('.error-msg', browser.globals.smallWait)
      .assert.containsText('.error-msg', errorMessage);
  },

  'Sign in with invalid email': function(browser){
    browser
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', 'test@yopmail.com')
      .clearValue('#pass')
      .setValue('#pass', existingUserPassword)
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.error-msg', browser.globals.smallWait);

    browser.assert.containsText('.error-msg', errorMessage);
  },

  'Successful sign in to a website': function(browser) {
    browser
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email',  existingUserEmail)
      .clearValue('#pass')
      .setValue('#pass', existingUserPassword)
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .waitForElementVisible('.page-title h1', browser.globals.smallWait)
      .useXpath()
      .click('//a[text()="Change Password"]')
      .useCss()
      .waitForElementVisible('#email', browser.globals.smallWait);

    browser.assert.value('#email', existingUserEmail);
  },

  'Go to "Clothes" Category': function(browser){
    browser
      .useXpath()
      .waitForElementVisible('//a[text()="clothes"]', browser.globals.smallWait)
      .click('//a[text()="clothes"]')
      .useCss()
      .waitForElementVisible('.page-title h1', browser.globals.smallWait);

    browser.assert.containsText('.page-title h1', 'CLOTHES');
    browser.assert.urlContains("default/clothes-anastasia.html");
  },

  'Add to Cart product': function(browser) {
    browser
      .useXpath()
      .waitForElementVisible('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button', browser.globals.smallWait)
      .click('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button')  //xpath can be shortened to //a[contains(@title,"slippers_simple_product")]/following-sibling::div//button
      .useCss()
      .waitForElementVisible('.success-msg', browser.globals.smallWait)
      .waitForElementVisible("h2.product-name a", browser.globals.smallWait);

    browser.assert.containsText('h2.product-name a', 'CHILDREN\'S SLIPPERS_SIMPLE_PRODUCT');
    browser.assert.containsText('.success-msg', 'Children\'s slippers_simple_product was added to your shopping cart.');
  },

  'Registration of new user': function(browser){
    browser
      .waitForElementVisible('.account-cart-wrapper a[href*="account"]', browser.globals.smallWait)
      .click('.account-cart-wrapper a[href*="account"]')
      .waitForElementVisible('div#header-account', browser.globals.tinyWait)
      .click('a[href*="create"]')
      .waitForElementVisible('#firstname', browser.globals.smallWait)
      .setValue('#firstname', browser.globals.firstname)
      .waitForElementVisible('#lastname', browser.globals.smallWait)
      .setValue('#lastname', browser.globals.lastname)
      .waitForElementVisible('#email_address', browser.globals.smallWait)
      .setValue('#email_address', browser.globals.email)
      .waitForElementVisible('#password', browser.globals.smallWait)
      .setValue('#password', browser.globals.password)
      .waitForElementVisible('#confirmation', browser.globals.smallWait)
      .setValue('#confirmation', browser.globals.password)
      .click('.button[title="Register"]')
      .useXpath()
      .click('//a[text()="Change Password"]')
      .useCss()
      .waitForElementVisible('#email', browser.globals.smallWait)
      .waitForElementVisible('#firstname', browser.globals.smallWait)
      .waitForElementVisible('#lastname', browser.globals.smallWait);

    browser.assert.value('#email', browser.globals.email);
    browser.assert.value('#firstname', browser.globals.firstname);
    browser.assert.value('#lastname', browser.globals.lastname);
  },

  'Log out and log in': function(browser){
    browser
      .waitForElementVisible('.account-cart-wrapper a[href*="account"]', browser.globals.smallWait)
      .click('.account-cart-wrapper a[href*="account"]')
      .waitForElementVisible('div#header-account', browser.globals.tinyWait)
      .click('a[href*="logout"]')
      .waitForElementVisible('.account-cart-wrapper a[href*="account"]', browser.globals.smallWait)
      .click('.account-cart-wrapper a[href*="account"]')
      .waitForElementVisible('div#header-account', browser.globals.tinyWait)
      .click('a[href*="login"]')
      .waitForElementVisible('#email', browser.globals.smallWait)
      .clearValue('#email')
      .setValue('#email', browser.globals.email)
      .clearValue('#pass')
      .setValue('#pass', browser.globals.password)
      .waitForElementVisible('#send2', browser.globals.tinyWait)
      .click('#send2')
      .useXpath()
      .click('//a[text()="Change Password"]')
      .useCss()
      .waitForElementVisible('#email', browser.globals.smallWait)
      .waitForElementVisible('#firstname', browser.globals.smallWait)
      .waitForElementVisible('#lastname', browser.globals.smallWait);

    browser.assert.value('#email', browser.globals.email);
    browser.assert.value('#firstname', browser.globals.firstname);
    browser.assert.value('#lastname', browser.globals.lastname);

    browser.end();
  }

};