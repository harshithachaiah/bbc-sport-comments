const BasePage = require("./BasePage");
const locators = require("./locators/signinPageLocators");

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.locators = locators;
    }

    async clickSignIn() {
        await this.click(this.locators.signInButton);
    }

    async enterEmail(email) {
        await this.type(this.locators.emailInput, email);
        await this.click(this.locators.continueButton);
    }

    async enterPassword(password) {
        await this.type(this.locators.passwordInput, password);
        await this.click(this.locators.continueButton);
    }

    async isSignedIn() {
        const text = await this.getText(this.locators.accountText);
        return text && text !== "Sign in";
    }
}

module.exports = SignInPage;
