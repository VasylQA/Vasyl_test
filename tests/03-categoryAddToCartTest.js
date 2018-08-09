module.exports = {

    'Go to "Clothes" Category': function(browser){
        const clothingCategory = browser.page.clothingCategoryPage();

        clothingCategory
          .openCloghingCategory();

        browser
          .waitForElementVisible('.page-title h1', browser.globals.smallWait);
          browser.assert.containsText('.page-title h1', 'CLOTHES');
          browser.assert.urlContains("default/clothes-anastasia.html");
    },

    'Add to Cart product': function(browser) {
        const clothingCategory = browser.page.clothingCategoryPage();

        clothingCategory
          .openCloghingCategory()
          .clickAddToCartButton();

        browser
          .waitForElementVisible('.success-msg', browser.globals.smallWait)
          .waitForElementVisible("h2.product-name a", browser.globals.smallWait);
          browser.assert.containsText('h2.product-name a', 'CHILDREN\'S SLIPPERS_SIMPLE_PRODUCT');
          browser.assert.containsText('.success-msg', 'Children\'s slippers_simple_product was added to your shopping cart.');
    }
}