const commands = {
  clickAccountMenuInHeader: function(){
    return this
      .waitForElementVisible('@accountLink', this.api.globals.smallWait)
      .click('@accountLink')
      .waitForElementVisible('@accountMenu', this.api.globals.tinyWait);
  },

  clickLoginOptionInMenu: function(){
    return this
      .waitForElementVisible('@loginOption', this.api.globals.tinyWait)
      .click('@loginOption');
  },

  clickRegisterOptionInMenu: function(){
     return this
       .waitForElementVisible('@registerOption', this.api.globals.tinyWait)
       .click('@registerOption');
  },

  clickLogOutButtonInHeader: function(){
     return this
       .waitForElementVisible('@logOutButton', this.api.globals.tinyWait)
       .click('@logOutButton');
  }
};


module.exports = {
  url : 'http://104.236.241.251',
  commands: [commands],
  elements: {
    accountLink: {
      selector: '.account-cart-wrapper a[href*="account"]'
    },
    accountMenu: {
      selector: 'div#header-account'
    },
    registerOption: {
      selector: 'a[href*="create"]'
    },
    loginOption: {
      selector: 'a[href*="login"]'
    },
    logOutButton: {
      selector: 'a[href*="logout"]'
    }
  }
};