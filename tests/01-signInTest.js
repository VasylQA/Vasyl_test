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
    const login = browser.page.loginPage();

    login
      .enterUserEmail("not_valid_email@gmail.com")
      .enterUserPassword(existingUserPassword)
      .clickLoginButton();

    browser
      .waitForElementVisible('.error-msg', browser.globals.smallWait)
      .assert.containsText('.error-msg', errorMessage);
  },

  'Successful sign in to a website': function(browser) {
    const login = browser.page.loginPage();
    const myDashboard = browser.page.myDashboardPage();

    login
      .enterUserEmail(existingUserEmail)
      .enterUserPassword(existingUserPassword)
      .clickLoginButton();

    myDashboard
      .clickChangePassword();

    browser
      .waitForElementVisible('#email', browser.globals.smallWait)
      .assert.value('#email', existingUserEmail)
  }

};