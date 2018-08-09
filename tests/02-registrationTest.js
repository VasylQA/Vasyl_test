const userEmail = 'newte1@gmail.com';
const userPassword = 'Password1';
const userFirstName = 'Test First Name';
const userLastName = 'Test Last Name';

module.exports = {
    'Registration of new user': function (browser) {
      const registration = browser.page.registrationPage();
      const myDashboard = browser.page.myDashboardPage();
      const homepage = browser.page.homepagePage();

      homepage
        .navigate()
        .clickAccountMenuInHeader()
        .clickRegisterOptionInMenu();

      registration
        .enterFirstName(userFirstName)
        .enterLastName(userLastName)
        .enterEmail(userEmail)
        .enterPassword(userPassword)
        .enterPasswordConfirmation(userPassword)
        .clickRegisterButton();

      myDashboard
        .clickChangePassword();

      browser
         .waitForElementVisible('#email', browser.globals.smallWait)
         .assert.value('#email', userEmail)
         .assert.value('#firstname', userFirstName)
    },

    'Log out and log in': function (browser) {
      const login = browser.page.loginPage();
      const myDashboard = browser.page.myDashboardPage();
      const homepage = browser.page.homepagePage();

      homepage
        .clickAccountMenuInHeader()
        .clickLogOutButtonInHeader()
        .clickAccountMenuInHeader()
        .clickLoginOptionInMenu();

      login
        .enterUserEmail(userEmail)
        .enterUserPassword(userPassword)
        .clickLoginButton();

      myDashboard
        .clickChangePassword();

      browser
        .waitForElementVisible('#email', browser.globals.smallWait)
        .assert.value('#email', userEmail)
        .end();
    }

};