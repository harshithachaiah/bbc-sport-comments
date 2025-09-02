const reporter = require("cucumber-html-reporter");
const fs = require("fs");
const path = require("path");

const jsonReport = path.join(__dirname, "../reports/report.json");
const htmlReport = path.join(__dirname, "../reports/report.html");


if (!fs.existsSync(jsonReport)) {
    console.log("JSON report not found. Run tests first!");
    process.exit(1);
}

const options = {
    theme: "bootstrap",
    jsonFile: jsonReport,
    output: htmlReport,
    reportSuiteAsScenarios: true,
    metadata: {
        "Test Environment": "BBC Sport",
        "Browser": "Chromium",
        "Platform": process.platform,
        "Executed": "Local"
    }
};

reporter.generate(options);

console.log(`HTML report generated at: ${htmlReport}`);
