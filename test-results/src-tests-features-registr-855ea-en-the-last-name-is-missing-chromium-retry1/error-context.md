# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/features/registration.feature.spec.js >> Registration form >> Registration should not succeeds when the last name is missing
- Location: .features-gen/src/tests/features/registration.feature.spec.js:39:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[role="alert"], .alert').first()
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[role="alert"], .alert').first()
    9 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
      - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - heading "QA Practice" [level=3] [ref=e5]:
      - link "QA Practice" [ref=e6] [cursor=pointer]:
        - /url: /
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "Ecommerce - Login, Add to Cart, Submit order, Logout" [ref=e9] [cursor=pointer]:
          - /url: /auth_ecommerce
      - listitem [ref=e10]:
        - link "Spot the BUGS CHALLENGE" [ref=e11] [cursor=pointer]:
          - /url: /bugs-form
      - listitem [ref=e12]:
        - link "GraphQL Testing" [ref=e13] [cursor=pointer]:
          - /url: /graphql-testing
      - listitem [ref=e14]:
        - link "API Testing" [ref=e15] [cursor=pointer]:
          - /url: /api-testing
      - listitem [ref=e16]:
        - link "Products List - Shop" [ref=e17] [cursor=pointer]:
          - /url: /products_list
      - listitem [ref=e18]:
        - link "Intercept API Request" [ref=e19] [cursor=pointer]:
          - /url: /fetch-api
      - listitem [ref=e20]:
        - link "Visual Testing - GIF Page" [ref=e21] [cursor=pointer]:
          - /url: /visual
      - listitem [ref=e22]:
        - link "Forms" [ref=e23] [cursor=pointer]:
          - /url: "#homeSubmenu"
      - listitem [ref=e24]:
        - link "Buttons" [ref=e25] [cursor=pointer]:
          - /url: "#pageSubmenu"
      - listitem [ref=e26]:
        - link "New Tab / Window" [ref=e27] [cursor=pointer]:
          - /url: "#browserSubmenu"
      - listitem [ref=e28]:
        - link "Btn actions" [ref=e29] [cursor=pointer]:
          - /url: "#actionsSubmenu"
      - listitem [ref=e30]:
        - link "Tables" [ref=e31] [cursor=pointer]:
          - /url: "#tables"
      - listitem [ref=e32]:
        - link "Dropdowns" [ref=e33] [cursor=pointer]:
          - /url: /dropdowns
      - listitem [ref=e34]:
        - link "Iframes" [ref=e35] [cursor=pointer]:
          - /url: /iframe
      - listitem [ref=e36]:
        - link "Alerts" [ref=e37] [cursor=pointer]:
          - /url: /alerts
      - listitem [ref=e38]:
        - link "File Upload" [ref=e39] [cursor=pointer]:
          - /url: /file-upload
      - listitem [ref=e40]:
        - link "Date Pickers" [ref=e41] [cursor=pointer]:
          - /url: /calendar
      - listitem [ref=e42]:
        - link "Loader" [ref=e43] [cursor=pointer]:
          - /url: /loader
      - listitem [ref=e44]:
        - link "Pagination" [ref=e45] [cursor=pointer]:
          - /url: /pagination
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "RV - Website" [ref=e48] [cursor=pointer]:
          - /url: https://razvanvancea.ro/
      - listitem [ref=e49]:
        - link "Let's connect - LinkedIn" [ref=e50] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/razvanvancea/
      - listitem [ref=e51]:
        - link "Learn with RV - YouTube" [ref=e52] [cursor=pointer]:
          - /url: https://youtube.com/learnwithrv
  - generic [ref=e53]:
    - navigation [ref=e54]:
      - generic [ref=e55]:
        - button [ref=e56] [cursor=pointer]
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "Home" [ref=e63] [cursor=pointer]:
              - /url: /
          - listitem [ref=e64]:
            - link "Contact" [ref=e65] [cursor=pointer]:
              - /url: /contact-us
    - heading "CHALLENGE - Spot the BUGS!" [level=2] [ref=e66]
    - generic [ref=e67]: This page contains at least 15 bugs. How many of them can you spot?
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]: First Name
        - textbox "First Name" [ref=e71]:
          - /placeholder: Enter first name
          - text: Liam
      - generic [ref=e72]:
        - generic [ref=e73]: Last Name*
        - textbox "Last Name* Phone nunber* Country" [ref=e74]:
          - /placeholder: Enter last name
        - generic [ref=e75]: "Note: All the fields marked with * are mandatory"
      - generic [ref=e76]:
        - generic [ref=e77]: Phone nunber*
        - textbox "Enter phone number" [ref=e78]: "02102496529"
        - generic [ref=e79]: "Phone length validation: at least 10 digits"
      - generic [ref=e80]:
        - generic [ref=e81]: Country
        - combobox [ref=e82]:
          - option "Select a country..."
          - option "Afghanistan"
          - option "Albania"
          - option "Algeria"
          - option "American Samoa"
          - option "Andorra"
          - option "Angola"
          - option "Anguilla"
          - option "Antigua & Barbuda"
          - option "Argentina"
          - option "Armenia"
          - option "Aruba"
          - option "Australia" [selected]
          - option "Austria"
          - option "Azerbaijan"
          - option "Bahamas"
          - option "Bahrain"
          - option "Bangladesh"
          - option "Barbados"
          - option "Belarus"
          - option "Belgium"
          - option "Belize"
          - option "Benin"
          - option "Bermuda"
          - option "Bhutan"
          - option "Bolivia"
          - option "Bonaire"
          - option "Bosnia & Herzegovina"
          - option "Botswana"
          - option "Brazil"
          - option "British Indian Ocean Ter"
          - option "Brunei"
          - option "Bulgaria"
          - option "Burkina Faso"
          - option "Burundi"
          - option "Cambodia"
          - option "Cameroon"
          - option "Canada"
          - option "Canary Islands"
          - option "Cape Verde"
          - option "Cayman Islands"
          - option "Central African Republic"
          - option "Chad"
          - option "Channel Islands"
          - option "Chile"
          - option "China"
          - option "Christmas Island"
          - option "Cocos Island"
          - option "Colombia"
          - option "Comoros"
          - option "Congo"
          - option "Cook Islands"
          - option "Costa Rica"
          - option "Cote DIvoire"
          - option "Croatia"
          - option "Cuba"
          - option "Curacao"
          - option "Cyprus"
          - option "Czech Republic"
          - option "Denmark"
          - option "Djibouti"
          - option "Dominica"
          - option "Dominican Republic"
          - option "East Timor"
          - option "Ecuador"
          - option "Egypt"
          - option "El Salvador"
          - option "Equatorial Guinea"
          - option "Eritrea"
          - option "Estonia"
          - option "Ethiopia"
          - option "Falkland Islands"
          - option "Faroe Islands"
          - option "Fiji"
          - option "Finland"
          - option "France"
          - option "French Guiana"
          - option "French Polynesia"
          - option "French Southern Ter"
          - option "Gabon"
          - option "Gambia"
          - option "Georgia"
          - option "Germany"
          - option "Ghana"
          - option "Gibraltar"
          - option "Great Britain"
          - option "Greece"
          - option "Greenland"
          - option "Grenada"
          - option "Guadeloupe"
          - option "Guam"
          - option "Guatemala"
          - option "Guinea"
          - option "Guyana"
          - option "Haiti"
          - option "Hawaii"
          - option "Honduras"
          - option "Hong Kong"
          - option "Hungary"
          - option "Iceland"
          - option "Indonesia"
          - option "India"
          - option "Iran"
          - option "Iraq"
          - option "Ireland"
          - option "Isle of Man"
          - option "Israel"
          - option "Italy"
          - option "Jamaica"
          - option "Japan"
          - option "Jordan"
          - option "Kazakhstan"
          - option "Kenya"
          - option "Kiribati"
          - option "Korea North"
          - option "Korea South"
          - option "Kuwait"
          - option "Kyrgyzstan"
          - option "Laos"
          - option "Latvia"
          - option "Lebanon"
          - option "Lesotho"
          - option "Liberia"
          - option "Libya"
          - option "Liechtenstein"
          - option "Lithuania"
          - option "Luxembourg"
          - option "Macau"
          - option "Macedonia"
          - option "Madagascar"
          - option "Malaysia"
          - option "Malawi"
          - option "Maldives"
          - option "Mali"
          - option "Malta"
          - option "Marshall Islands"
          - option "Martinique"
          - option "Mauritania"
          - option "Mauritius"
          - option "Mayotte"
          - option "Mexico"
          - option "Midway Islands"
          - option "Moldova"
          - option "Monaco"
          - option "Mongolia"
          - option "Montserrat"
          - option "Morocco"
          - option "Mozambique"
          - option "Myanmar"
          - option "Nambia"
          - option "Nauru"
          - option "Nepal"
          - option "Netherland Antilles"
          - option "Netherlands (Holland, Europe)"
          - option "Nevis"
          - option "New Caledonia"
          - option "New Zealand"
          - option "Nicaragua"
          - option "Niger"
          - option "Nigeria"
          - option "Niue"
          - option "Norfolk Island"
          - option "Norway"
          - option "Oman"
          - option "Pakistan"
          - option "Palau Island"
          - option "Palestine"
          - option "Panama"
          - option "Papua New Guinea"
          - option "Paraguay"
          - option "Peru"
          - option "Philippines"
          - option "Pitcairn Island"
          - option "Poland"
          - option "Portugal"
          - option "Puerto Rico"
          - option "Qatar"
          - option "Republic of Montenegro"
          - option "Republic of Serbia"
          - option "Reunion"
          - option "Romania"
          - option "Russia"
          - option "Rwanda"
          - option "St Barthelemy"
          - option "St Eustatius"
          - option "St Helena"
          - option "St Kitts-Nevis"
          - option "St Lucia"
          - option "St Maarten"
          - option "St Pierre & Miquelon"
          - option "St Vincent & Grenadines"
          - option "Saipan"
          - option "Samoa"
          - option "Samoa American"
          - option "San Marino"
          - option "Sao Tome & Principe"
          - option "Saudi Arabia"
          - option "Senegal"
          - option "Seychelles"
          - option "Sierra Leone"
          - option "Singapore"
          - option "Slovakia"
          - option "Slovenia"
          - option "Solomon Islands"
          - option "Somalia"
          - option "South Africa"
          - option "Spain"
          - option "Sri Lanka"
          - option "Sudan"
          - option "Suriname"
          - option "Swaziland"
          - option "Sweden"
          - option "Switzerland"
          - option "Syria"
          - option "Tahiti"
          - option "Taiwan"
          - option "Tajikistan"
          - option "Tanzania"
          - option "Thailand"
          - option "Togo"
          - option "Tokelau"
          - option "Tonga"
          - option "Trinidad & Tobago"
          - option "Tunisia"
          - option "Turkey"
          - option "Turkmenistan"
          - option "Turks & Caicos Is"
          - option "Tuvalu"
          - option "Uganda"
          - option "United Kingdom"
          - option "Ukraine"
          - option "United Arab Emirates"
          - option "United States of America"
          - option "Uruguay"
          - option "Uzbekistan"
          - option "Vanuatu"
          - option "Vatican City State"
          - option "Venezuela"
          - option "Vietnam"
          - option "Virgin Islands (Brit)"
          - option "Virgin Islands (USA)"
          - option "Wake Island"
          - option "Wallis & Futana Is"
          - option "Yemen"
          - option "Zaire"
          - option "Zambia"
          - option "Zimbabwe"
      - generic [ref=e83]:
        - generic [ref=e84]: Email address*
        - textbox "Enter email" [ref=e85]: liam@example.com
      - generic [ref=e86]:
        - generic [ref=e87]: Password*
        - textbox "Password" [ref=e88]: Password123
        - generic [ref=e89]: "Psw length validation: [6,20] characters"
      - generic [ref=e90]:
        - checkbox "I agree with the terms and conditions" [disabled] [ref=e91]
        - generic [ref=e92]: I agree with the terms and conditions
      - button "Register" [active] [ref=e93] [cursor=pointer]
    - generic [ref=e95]:
      - alert [ref=e96]: Successfully registered the following information
      - generic [ref=e97]: "First Name: Liam"
      - generic [ref=e98]: "Last Name:"
      - generic [ref=e99]: "Phone Number: 021024965210"
      - generic [ref=e100]: "Country: Australia"
      - generic [ref=e101]: "Email: liam@example.com"
```

# Test source

```ts
  1  | import { DataTable } from '@cucumber/cucumber';
  2  | import { expect } from '@playwright/test';
  3  | import { Given, When, Then } from '../../fixtures/fixtures';
  4  | import { buildRegistrationDetails } from '../../utils/testDataHelper';
  5  | 
  6  | Given('the user navigates to the registration form', async ({ registrationPage }) => {
  7  |     await registrationPage.goto();
  8  | });
  9  | 
  10 | When('the user submits the registration form with:', async ({ registrationPage }, dataTable: DataTable) => {
  11 |     await registrationPage.register(buildRegistrationDetails(dataTable.rowsHash()));
  12 | });
  13 | 
  14 | Then(/the registration confirmation banner should( not)? be displayed/, async ({ registrationPage }, negate?: string) => {
  15 |     const confirmationBanner = registrationPage.getConfirmationBanner();
  16 |     if (negate) {
> 17 |       await expect(confirmationBanner).not.toBeVisible();
     |                                            ^ Error: expect(locator).not.toBeVisible() failed
  18 |       return;
  19 |     }
  20 |     await expect(confirmationBanner).toBeVisible();
  21 |     await expect(confirmationBanner).toContainText(
  22 |       'Successfully registered the following information',
  23 |     );
  24 |   },
  25 | );
  26 | Then('the registration summary should include firstName {string}', async ({registrationPage}, firstname: string) => {
  27 |         await expect(registrationPage.getResultFirstName()).toContainText(`First Name: ${firstname}`);
  28 | });
  29 | 
  30 | Then('the registration summary should include lastName {string}', async ({registrationPage}, lastname: string) => {
  31 |         await expect(registrationPage.getResultLastName()).toContainText(`Last Name: ${lastname}`);
  32 | });
  33 | 
  34 | 
  35 | Then('the registration summary should include phone {string}', async ({ registrationPage }, phone: string) => {
  36 |         await expect(registrationPage.getResultPhone()).toContainText(`Phone Number: ${phone}`);
  37 |     }
  38 | );
  39 | 
  40 | Then('the registration summary should include email {string}', async ({ registrationPage }, email: string) => {
  41 |         await expect(registrationPage.getResultEmail()).toContainText(`Email: ${email}`);
  42 |     },    
  43 | );
  44 | 
  45 | Then('the registration summary should include Country {string}', async ({ registrationPage }, country: string) => {
  46 |         await expect(registrationPage.getResultCountry()).toContainText(`Country: ${country}`);
  47 |     },    
  48 | );
  49 | 
  50 | Then('the registration result should contain text {string}',async ({ registrationPage }, expectedText: string) => {
  51 |     await expect(registrationPage.getResultMessage()).toContainText(expectedText);
  52 |   },
  53 | );
  54 | 
  55 | Then('the user agrees to the policy and submits the form', async ({ registrationPage }, dataTable: DataTable) => {
  56 |         await registrationPage.registerWithPolicyAgreement(buildRegistrationDetails(dataTable.rowsHash()));
  57 |     },);
  58 | 
  59 | Then(
  60 |   'the registration summary should show the default country placeholder', async ({ registrationPage }) => {
  61 |     await expect(registrationPage.getResultCountry()).toContainText('Country: Select a country...',);
  62 |   },
  63 | );    
```