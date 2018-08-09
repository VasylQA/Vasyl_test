const userEmail = 'testerok6661@gmail.com';
const userPassword = 'Password1';
const userFirstName = 'Test First Name';
const userLastName = 'Test Last Name';

module.exports = {
    'Registration of new user': function (browser) {
      const registration = browser.page.registrationPage();
      const myDashboard = browser.page.myDashboardPage();
      const homepage = browser.page.homepagePage();

      homepage
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
      const registration = browser.page.registrationPage();
      const myDashboard = browser.page.myDashboardPage();
      const homepage = browser.page.homepagePage();

        homepage

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