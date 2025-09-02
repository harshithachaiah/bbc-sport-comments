const { setWorldConstructor } = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("playwright");
const fs = require("fs");
const path = require("path");

class CustomWorld {
    constructor({ parameters }) {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.homePage = null;
        this.signInPage = null;
        this.sportPage = null;
        this.articlePage = null;
        this.stepCounter = 0;

        // pick browser from parameters, if not choose chromium
        this.browserName = parameters.browser || "chromium";

        // create folder for the screenshot with timestamp and browser name
        const runTimestamp = new Date().toISOString().replace(/[:.]/g, "-");
        this.runScreenshotsDir = path.join(
            process.cwd(),
            "screenshots",
            `run-${this.browserName}-${runTimestamp}`
        );

        if (!fs.existsSync(this.runScreenshotsDir)) {
            fs.mkdirSync(this.runScreenshotsDir, { recursive: true });
        }
    }

    //Launch specific browser
    async initBrowser() {
        if (!this.browser) {
            let browserType;
            switch (this.browserName) {
                case "firefox":
                    browserType = firefox;
                    break;
                case "webkit":
                    browserType = webkit;
                    break;
                default:
                    browserType = chromium;
            }

            this.browser = await browserType.launch({ headless: false });
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
        }
    }

    async takeScreenshot(stepName = "screenshot") {
        if (!this.page) return;

        this.stepCounter += 1;
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

        const safeStepName = stepName
            .replace(/[^a-z0-9]/gi, "_")  // replace spaces/special chars with _ to follow foler name standards
            .toLowerCase()
            .substring(0, 30);

        const fileName = `${this.stepCounter}_${safeStepName}_${timestamp}.png`;

        const filePath = path.join(this.runScreenshotsDir, fileName);

        await this.page.screenshot({ path: filePath, fullPage: true });
    }


    // close the browser
    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
            this.context = null;
            this.page = null;
        }
    }
}

setWorldConstructor(CustomWorld);
