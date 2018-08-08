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
    loginOption: {
      selector: 'a[href*="login"]'
    }
  }
};