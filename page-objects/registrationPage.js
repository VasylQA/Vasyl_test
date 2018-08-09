const commands = {
    enterFirstName: function(firstName){
        return this
            .waitForElementVisible('@firstName', this.api.globals.tinyWait)
            .clearValue('@firstName')
            .setValue('@firstName', firstName);
    },
    enterLastName: function(lastName){
        return this
            .waitForElementVisible('@lastName', this.api.globals.tinyWait)
            .clearValue('@lastName')
            .setValue('@lastName', lastName);
    },
    enterEmail: function(email){
        return this
            .waitForElementVisible('@emailAddress', this.api.globals.tinyWait)
            .clearValue('@emailAddress')
            .setValue('@emailAddress', email);
    },
    enterPassword: function(password){
        return this
            .waitForElementVisible('@password', this.api.globals.tinyWait)
            .clearValue('@password')
            .setValue('@password', password);
    },
    enterPasswordConfirmation: function(passwordConfirmation){
        return this
            .waitForElementVisible('@passwordConfirmation', this.api.globals.tinyWait)
            .clearValue('@passwordConfirmation')
            .setValue('@passwordConfirmation', passwordConfirmation);
    },
    clickRegisterButton: function(){
        return this
            .waitForElementVisible('.button[title="Register"]', this.api.globals.tinyWait)
            .click('.button[title="Register"]');
    },

};

module.exports = {
    url : 'http://104.236.241.251',
    commands: [commands],
    elements: {
        firstName: {
            selector: '#firstname'
        },
        lastName: {
            selector: '#lastname'
        },
        emailAddress: {
            selector: '#email_address'
        },
        password: {
            selector: '#password'
        },
        passwordConfirmation: {
            selector: '#confirmation'
        },
        registerButton: {
            selector: '.button[title="Register"]'
        }
    }
};