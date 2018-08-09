const commands = {
    openCloghingCategory: function(){
        return this
            .waitForElementVisible('@clothingLinkInNavigation', this.api.globals.tinyWait)
            .click('@clothingLinkInNavigation');
    },
    clickAddToCartButton: function(){
        return this
            .waitForElementVisible('@addToCartButton', this.api.globals.tinyWait)
            .click('@addToCartButton');
    }

};

// noinspection JSAnnotator
module.exports = {
    url : 'http://104.236.241.251',
    commands: [commands],
    elements: {
        clothingLinkInNavigation: {
            selector: 'a[href*="clothes-anastasia.html"]'
        },
        addToCartButton: {
            selecrot:  ???;
}

};