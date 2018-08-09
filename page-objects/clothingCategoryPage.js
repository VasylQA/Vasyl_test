const commands = {
    openCloghingCategory: function(){
        return this
            .waitForElementVisible('@clothingLinkInNavigation', this.api.globals.tinyWait)
            .click('@clothingLinkInNavigation');
    }

};

// noinspection JSAnnotator
module.exports = {
    url : 'http://104.236.241.251',
    commands: [commands],
    elements: {
        clothingLinkInNavigation: {
            selector: 'a[href*="clothes-anastasia.html"]'
       }
}

};