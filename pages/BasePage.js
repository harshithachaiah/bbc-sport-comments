class BasePage {
    constructor(page) {
        this.page = page;
    }

    async visit(url) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async click(selector) {
        await this.page.waitForSelector(selector, { state: "visible" });
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.waitForSelector(selector, { state: "visible" });
        await this.page.fill(selector, text);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector).catch(() => false);
    }

    async getText(selector) {
        await this.page.waitForSelector(selector, { state: "visible" });
        return await this.page.textContent(selector);
    }
}

module.exports = BasePage;
