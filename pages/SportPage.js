const BasePage = require("./BasePage");
const locators = require("./locators/sportPageLocators");

class SportPage extends BasePage {
    constructor(page) {
        super(page);
        this.locators = locators;
    }

    async openArticleWithComments() {
        await this.click(this.locators.articleWithComments);
    }

    async openArticleWithoutComments() {
        await this.click(this.locators.articleWithoutComments);
    }
}

module.exports = SportPage;
