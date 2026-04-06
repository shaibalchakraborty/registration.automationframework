import type { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import type { RegistrationDetails } from '../utils/testDataHelper';

export class RegistrationPage extends BasePage {
  //#region Locators
  private readonly firstNameInput = this.page.locator('#firstName');
  private readonly lastNameInput = this.page.locator('#lastName');
  private readonly phoneInput = this.page.locator('#phone');
  private readonly countrySelect = this.page.locator('#countries_dropdown_menu');
  private readonly emailInput = this.page.locator('#emailAddress');
  private readonly passwordInput = this.page.locator('#password');
  private readonly policyCheckbox = this.page.locator('#exampleCheck1');
  private readonly registerButton = this.page.locator('#registerBtn');
  private readonly confirmationBanner = this.page.locator('[role="alert"], .alert').first();
  private readonly resultFirstName = this.page.locator('#resultFn');
  private readonly resultLastName = this.page.locator('#resultLn');
  private readonly resultPhone = this.page.locator('#resultPhone');
  private readonly resultCountry = this.page.locator('#country');
  private readonly resultEmail = this.page.locator('#resultEmail');
    private readonly resultMessage = this.page.locator('#message');
//#endregion

  /** Opens the registration form. */
  async goto(): Promise<void> {
    await this.openApplication();
  }

  async fillForm(details: RegistrationDetails): Promise<void> {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.phoneInput.fill(details.phone);

    if (details.country) {
      await this.countrySelect.selectOption({ label: details.country });
    }

    await this.emailInput.fill(details.email);
    await this.passwordInput.fill(details.password);
  }

async registerWithPolicyAgreement(details: RegistrationDetails): Promise<void> {
    await this.fillForm(details);
    await this.agreeToPolicy();
    await this.submit();
  }

  async agreeToPolicy(): Promise<void> {
    await this.policyCheckbox.check();
  }
  
  async submit(): Promise<void> {
    await this.registerButton.click();
  }

  async register(details: RegistrationDetails): Promise<void> {
    await this.fillForm(details);
    await this.submit();
  }

  getConfirmationBanner(): Locator {
    return this.confirmationBanner;
  }

  getResultFirstName(): Locator {
    return this.resultFirstName;
  }

  getResultLastName(): Locator {
    return this.resultLastName;
  }

  getResultPhone(): Locator {
    return this.resultPhone;
  }

  getResultCountry(): Locator {
    return this.resultCountry;
  }

  getResultEmail(): Locator {
    return this.resultEmail;
  }
getResultMessage(): Locator {
    return this.resultMessage;
  }
  getPasswordInput(): Locator {
    return this.passwordInput;
  }

async selectCountry(countryName: string): Promise<void> {
  await this.countrySelect.selectOption({ label: countryName });
  }

}
