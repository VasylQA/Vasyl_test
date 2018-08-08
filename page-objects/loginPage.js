const commands = {
  enterUserEmail: function (email) {
    return this
      .waitForElementVisible('@emailField', this.api.globals.smallWait)
      .clearValue('@emailField')
      .setValue('@emailField', email);
  },

  enterUserPassword: function(password){
    return this
      .waitForElementVisible('@passwordField', this.api.globals.tinyWait)
      .clearValue('@passwordField')
      .setValue('@passwordField', password);
  },

  clickLoginButton: function(){
    return this
      .waitForElementVisible('@loginButton', this.api.globals.tinyWait)
      .click('@loginButton');
  }

};

module.exports = {
  commands: [commands],
  elements: {
    emailField: {
      selector: '#email'
    },
    passwordField: {
      selector: '#pass'
    },
    loginButton: {
      selector: '#send2'
    }
  }
};