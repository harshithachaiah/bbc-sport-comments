const BasePage = require("./BasePage");
const locators = require("./locators/homePageLocators");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.locators = locators;
    }

    async open() {
        await this.visit(this.locators.url);
    }

    async goToSport() {
        await this.click(this.locators.sportLink);
    }
}

module.exports = HomePage;
