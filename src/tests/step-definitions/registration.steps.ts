import { DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Given, When, Then } from '../../fixtures/fixtures';
import { buildRegistrationDetails } from '../../utils/testDataHelper';

Given('the user navigates to the registration form', async ({ registrationPage }) => {
    await registrationPage.goto();
});

When('the user submits the registration form with:', async ({ registrationPage }, dataTable: DataTable) => {
    await registrationPage.register(buildRegistrationDetails(dataTable.rowsHash()));
});

Then(/the registration confirmation banner should( not)? be displayed/, async ({ registrationPage }, negate?: string) => {
    const confirmationBanner = registrationPage.getConfirmationBanner();
    if (negate) {
      await expect(confirmationBanner).not.toBeVisible();
      return;
    }
    await expect(confirmationBanner).toBeVisible();
    await expect(confirmationBanner).toContainText(
      'Successfully registered the following information',
    );
  },
);
Then('the registration summary should include firstName {string}', async ({registrationPage}, firstname: string) => {
        await expect(registrationPage.getResultFirstName()).toContainText(`First Name: ${firstname}`);
});

Then('the registration summary should include lastName {string}', async ({registrationPage}, lastname: string) => {
        await expect(registrationPage.getResultLastName()).toContainText(`Last Name: ${lastname}`);
});


Then('the registration summary should include phone {string}', async ({ registrationPage }, phone: string) => {
        await expect(registrationPage.getResultPhone()).toContainText(`Phone Number: ${phone}`);
    }
);

Then('the registration summary should include email {string}', async ({ registrationPage }, email: string) => {
        await expect(registrationPage.getResultEmail()).toContainText(`Email: ${email}`);
    },    
);

Then('the registration summary should include Country {string}', async ({ registrationPage }, country: string) => {
        await expect(registrationPage.getResultCountry()).toContainText(`Country: ${country}`);
    },    
);

Then('the registration result should contain text {string}',async ({ registrationPage }, expectedText: string) => {
    await expect(registrationPage.getResultMessage()).toContainText(expectedText);
  },
);

Then('the user agrees to the policy and submits the form', async ({ registrationPage }, dataTable: DataTable) => {
        await registrationPage.registerWithPolicyAgreement(buildRegistrationDetails(dataTable.rowsHash()));
    },);

Then(
  'the registration summary should show the default country placeholder', async ({ registrationPage }) => {
    await expect(registrationPage.getResultCountry()).toContainText('Country: Select a country...',);
  },
);    