const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const report = require('multiple-cucumber-html-reporter');

const projectRoot = process.cwd();
const jsonDir = path.join(projectRoot, 'cucumber-json');
const reportPath = path.join(projectRoot, 'cucumber-report');
const now = new Date();
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForJsonFiles() {
  for (let attempt = 1; attempt <= 10; attempt += 1) {
    if (fs.existsSync(jsonDir)) {
      const jsonFiles = fs.readdirSync(jsonDir).filter((file) => file.endsWith('.json'));

      if (jsonFiles.length > 0) {
        return;
      }
    }

    await wait(500);
  }

  if (!fs.existsSync(jsonDir)) {
    throw new Error(`Cucumber JSON directory not found: ${jsonDir}`);
  }

  throw new Error(`No Cucumber JSON files found in ${jsonDir}`);
}

async function main() {
  await waitForJsonFiles();

  report.generate({
    jsonDir,
    reportPath,
    openReportInBrowser: false,
    disableLog: true,
    displayDuration: true,
    pageTitle: 'RegistrationAutomation Cucumber Report',
    reportName: 'RegistrationAutomation Test Execution',
    metadata: {
      browser: {
        name: 'chrome',
        version: 'playwright',
      },
      device: 'Local test machine',
      platform: {
        name: os.platform() === 'darwin' ? 'osx' : os.platform(),
        version: os.release(),
      },
    },
    customData: {
      title: 'Run info',
      data: [
        { label: 'Project', value: 'RegistrationAutomation' },
        { label: 'Environment', value: process.env.ENV || 'dev' },
        { label: 'Base URL', value: process.env.BASE_URL || 'not set' },
        { label: 'Tags', value: process.env.BDD_TAGS || 'all scenarios' },
        { label: 'Generated', value: now.toISOString() },
      ],
    },
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
