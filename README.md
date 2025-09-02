# BBC Sport Commenting Test Suite (Playwright + Cucumber)

This project tests commenting functionality on BBC Sport articles using **Playwright** + **Cucumber (Gherkin)** with a **Page Object Model (POM)**.

---

## 🚀 Installation

1. Clone repository:
   git clone <https://github.com/harshithachaiah/bbc-sport-comments>
   cd bbc-sport-comments-test

2. Dependencies
   npm

### Required
- `@cucumber/cucumber`
- `playwright` 
- `assert` 

### Reports or environment variables
- `cucumber-html-reporter` → for generating HTML reports.
- `dotenv` → for managing credentials/secrets via `.env`.

## .env Login Credential
- BBC_EMAIL=<email>
- BBC_PASSWORD=<password>

## NPM Scripts

- `command to execute` :  npx cucumber-js --world-parameters '{"browser":"<BrowserType>"}' --tags "<TagName>"

