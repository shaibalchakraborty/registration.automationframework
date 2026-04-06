import type { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  /** Opens the application using the BASE_URL environment variable. */
  async openApplication(): Promise<void> {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
      throw new Error('BASE_URL is not defined. Update the root .env file before running tests.');
    }

    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
        return;
      } catch (error) {
        if (attempt === 3) {
          throw error;
        }
      }
    }
  }
}
