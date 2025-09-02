const { Given, When, Then } = require("@cucumber/cucumber");
const ArticlePage = require("../../pages/ArticlePage");
const assert = require("assert");
const houseRulesPage = require("../../data/houseRulesPage");
const SportPage = require("../../pages/SportPage");




When("user click the Sport button in the navigation bar", async function () {
    if (!this.articlePage) this.articlePage = new ArticlePage(this.page);
    await this.articlePage.clickSportNavButton();
});


When("user count all the articles with the comment icon and click the first one",
    async function () {
        if (!this.articlePage) this.articlePage = new ArticlePage(this.page);
        const count = await this.articlePage.clickFirstArticleWithComments();
        // console.log(`Step info: ${count} article(s) found and clicked the first one.`);
    }
);

Then("user should see the comments section", async function () {
    const visible = await this.articlePage.commentsAreVisible();
    if (!visible) throw new Error("Comments section not visible");

    const countText = await this.articlePage.getCommentsCount();
    console.log(`Comments section is visible with count: ${countText}`);
});

Then("user should not see the comments section", async function () {
    const visible = await this.articlePage.commentsAreVisible();
    if (visible) throw new Error("Comments section should not be visible");
});

Then(/^user enter "(.+)" into the comment box$/, async function (commentText) {
    await this.articlePage.enterComment(commentText);
});

Then("user cancel my comment", async function () {
    await this.articlePage.clickCancelComment();
});



When(/^user select "(.+)" from the sort dropdown$/, async function (sortOption) {
    if (!this.articlePage) this.articlePage = new ArticlePage(this.page);
    await this.articlePage.selectSortOption(sortOption);
});

Then(/^the comments should be sorted by "(.+)"$/, async function (sortOption) {

    console.log(`Comments should now be sorted by: ${sortOption}`);
});

Then("user verify the Post button state", async function () {
    const postButton = await this.page.$(this.articlePage.locators.postButton);
    const commentBox = await this.page.$(this.articlePage.locators.commentBox);

    const commentLength = await commentBox.evaluate(el => el.value.length);
    const isEnabled = await postButton.isEnabled();

    if (commentLength > 400) {
        if (isEnabled) throw new Error("Post button should be disabled for comments > 400 chars");
    } else {
        if (!isEnabled) throw new Error("Post button should be enabled for comments <= 400 chars");
    }
});


When('user click the house rules link', async function () {
    const [newPage] = await Promise.all([
        // wait for the new tab
        this.context.waitForEvent('page'),
        this.page.click('#houseRulesLink')
    ]);

    this.newPage = newPage;
    await newPage.waitForLoadState('domcontentloaded');
});

Then('a new window should open with URL of house rules', async function () {
    const actualUrl = this.newPage.url();
    assert.strictEqual(actualUrl, houseRulesPage.url, `Expected URL to be ${houseRulesPage.url} but got ${actualUrl}`);
});

Then('the page title should match house rules', async function () {
    const actualTitle = await this.newPage.title();
    assert.ok(actualTitle.includes(houseRulesPage.title), `Expected title to contain "${houseRulesPage.title}" but got "${actualTitle}"`);
});

When('user click the {word} button on comment {int}', async function (action, index) {
    if (!this.articlePage) this.articlePage = new ArticlePage(this.page);

    action = action.replace(/['"]/g, '').toLowerCase();

    let buttonLocator;
    if (action === 'like') {
        buttonLocator = this.articlePage.locators.likeButton;
    } else if (action === 'dislike') {
        buttonLocator = this.articlePage.locators.dislikeButton;
    } else {
        throw new Error(`Unknown action: ${action}`);
    }

    const buttons = await this.page.$$(buttonLocator);
    if (buttons.length < index) throw new Error(`${action} button for comment ${index} does not exist`);

    await buttons[index - 1].click();


    await this.page.waitForTimeout(2000);
});
