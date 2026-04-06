import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';

dotenv.config();

const workers = process.env.BDD_WORKERS
  ? Number.parseInt(process.env.BDD_WORKERS, 10)
  : process.env.CI
    ? 4
    : 2;

const testDir = defineBddConfig({
  features: 'src/tests/features/*.feature',
  steps: ['src/tests/step-definitions/*.steps.ts', 'src/fixtures/*.ts'],
  //generate: false,
  ...(process.env.BDD_TAGS ? { tags: process.env.BDD_TAGS } : {}),
});

export default defineConfig({
  testDir,
  fullyParallel: process.env.BDD_FULLY_PARALLEL !== 'false',
  retries: 1,
  timeout: 30_000,
  workers,
  expect: {
    timeout: 5_000,
  },
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
    cucumberReporter('json', {
      outputFile: 'cucumber-json/cucumber-report.json',
    }),
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
