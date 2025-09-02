const { Given, When, Then } = require("@cucumber/cucumber");
require("dotenv").config();
const HomePage = require("../../pages/HomePage");
const SignInPage = require("../../pages/SignInPage");

Given("I open the BBC homepage for sign in", async function () {
    await this.initBrowser();
    this.homePage = new HomePage(this.page);
    await this.homePage.open();
    this.signInPage = new SignInPage(this.page);
});

When("I click the Sign in button", async function () {
    await this.signInPage.clickSignIn();
});

When("I enter my BBC email and continue", async function () {
    const email = process.env.BBC_EMAIL;
    if (!email) throw new Error("BBC_EMAIL not set in .env");
    await this.signInPage.enterEmail(email);
});

When("I enter my BBC password and continue", async function () {
    const password = process.env.BBC_PASSWORD;
    if (!password) throw new Error("BBC_PASSWORD not set in .env");
    await this.signInPage.enterPassword(password);
});

Then("I should be signed in successfully", async function () {
    const signedIn = await this.signInPage.isSignedIn();
    if (!signedIn) throw new Error("Sign in failed!");
});


