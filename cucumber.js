module.exports = {
    default: `--require ./features/step_definitions/*.js \
              --require ./support/*.js \
              --format @cucumber/pretty-formatter \
              --format json:./reports/report.json`,

    chromium: {
        worldParameters: { browser: "chromium" }
    },

    firefox: {
        worldParameters: { browser: "firefox" }
    },

    webkit: {
        worldParameters: { browser: "webkit" }
    }
};
