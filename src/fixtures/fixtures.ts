import { createBdd, test as base } from 'playwright-bdd';
import { BasePage } from '../pages/BasePage';
import { RegistrationPage } from '../pages/RegistrationPage';

type PageFixtures = {
  basePage: BasePage;
  registrationPage: RegistrationPage;
};

export const test = base.extend<PageFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
