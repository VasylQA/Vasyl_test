module.exports = {

    'Go to "Clothes" Category': function(browser){
        browser
            .useXpath()
            .waitForElementVisible('//a[text()="clothes"]', browser.globals.smallWait)
            .click('//a[text()="clothes"]')
            .useCss()
            .waitForElementVisible('.page-title h1', browser.globals.smallWait);

        browser.assert.containsText('.page-title h1', 'CLOTHES');
        browser.assert.urlContains("default/clothes-anastasia.html");
    },

    'Add to Cart product': function(browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button', browser.globals.smallWait)
            .click('//a[contains(text(),"slippers_simple_product")]/parent::h2/following-sibling::div/following-sibling::div/button')
            .useCss()
            .waitForElementVisible('.success-msg', browser.globals.smallWait)
            .waitForElementVisible("h2.product-name a", browser.globals.smallWait);

        browser.assert.containsText('h2.product-name a', 'CHILDREN\'S SLIPPERS_SIMPLE_PRODUCT');
        browser.assert.containsText('.success-msg', 'Children\'s slippers_simple_product was added to your shopping cart.');
    }
}