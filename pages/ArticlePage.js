const BasePage = require("./BasePage");
const locators = require("./locators/articlePageLocators");

class ArticlePage extends BasePage {
    constructor(page) {
        super(page);
        this.locators = locators;
    }

    async commentsAreVisible() {
        return await this.isVisible(this.locators.commentSection);
    }

    async getCommentsCount() {
        if (await this.isVisible(this.locators.totalComments)) {
            const text = await this.getText(this.locators.totalComments);
            return text;
        }
        return null;
    }

    async enterComment(text) {
        await this.page.waitForSelector(this.locators.commentBox, { state: "visible" });
        await this.page.fill(this.locators.commentBox, text);
    }

    async clickCancelComment() {
        await this.page.waitForSelector(this.locators.cancelButton, { state: "visible" });
        await this.page.click(this.locators.cancelButton);
    }

    async clickSportNavButton() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "domcontentloaded" }),
            this.page.click(this.locators.sportNavButton),
        ]);
    }


    async clickFirstArticleWithComments() {
        const articles = await this.page.$$(this.locators.articlesWithComments);
        const count = articles.length;

        console.log(`Found ${count} article(s) with comment icons`);

        if (count === 0) throw new Error("No articles with comment icons found");

        await articles[0].click();
        await this.page.waitForSelector(this.locators.commentSection, { state: "visible", timeout: 10000 });

        // return count;
    }


    async selectSortOption(option) {
        await this.page.waitForSelector(this.locators.sortDropdown, { state: "visible" });
        await this.page.selectOption(this.locators.sortDropdown, this.locators.sortOptions[option]);
    }

    async clickLikeOnComment(index = 0) {
        const buttons = await this.page.$$(this.locators.likeButton);
        if (buttons.length === 0) throw new Error("No like buttons found");
        await buttons[index].click();
    }

    async clickDislikeOnComment(index = 0) {
        const buttons = await this.page.$$(this.locators.dislikeButton);
        if (buttons.length === 0) throw new Error("No dislike buttons found");
        await buttons[index].click();
    }



}

module.exports = ArticlePage;
