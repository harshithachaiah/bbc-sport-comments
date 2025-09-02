const { After, AfterStep } = require("@cucumber/cucumber");

AfterStep(async function ({ pickleStep }) {
    if (this.page) {
        const stepName = pickleStep.text;
        await this.takeScreenshot(stepName);
    }
});

After(async function () {
    await this.closeBrowser();
});
