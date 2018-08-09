const commands = {
    clickChangePassword: function(){
        return this
            .waitForElementVisible('@changePasswordButton', this.api.globals.tinyWait)
            .click('@changePasswordButton');
    }

};

module.exports = {
    url : 'http://104.236.241.251',
    commands: [commands],
    elements: {
        changePasswordButton: {
            selector: 'a[href*="changepass/1/"]'
        }
    }
};