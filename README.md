# Registration Automation Framework

A test automation framework built with Playwright and Cucumber for testing a user registration form. This framework uses Behavior-Driven Development (BDD) to ensure the registration process works correctly for various scenarios, including valid submissions, validation errors, and edge cases.

## Features

- **BDD with Cucumber**: Write tests in natural language using Gherkin syntax.
- **Page Object Model**: Organized page classes for maintainable code.
- **Cross-browser Testing**: Configured for Chromium (easily extensible to other browsers).
- **Parallel Execution**: Run tests in parallel for faster execution.
- **Comprehensive Reporting**: Generate HTML reports with Cucumber and JUnit outputs.
- **Retry Mechanism**: Automatic retries on failures.
- **Screenshots and Videos**: Capture on failures for debugging.
- **Tag-based Execution**: Run specific test suites using tags like `@smoke` and `@regression`.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shaibalchakraborty/registration.automationframework.git
   cd registration.automationframework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   BASE_URL=https://your-registration-form-url.com
   BDD_WORKERS=2  # Optional: Number of parallel workers
   BDD_TAGS=      # Optional: Tags to filter tests
   ```

## Project Structure

```
├── src/
│   ├── config/
│   │   ├── generate-cucumber-report.js  # Script to generate HTML reports
│   │   └── runner.js                    # Test runner configuration
│   ├── fixtures/
│   │   └── fixtures.ts                  # Test fixtures and setup
│   ├── pages/
│   │   ├── BasePage.ts                  # Base page class
│   │   └── RegistrationPage.ts          # Registration page object
│   ├── tests/
│   │   ├── features/
│   │   │   └── registration.feature     # Cucumber feature files
│   │   └── step-definitions/            # Step definitions
│   └── utils/
│       └── testDataHelper.ts            # Utility functions
├── test-results/                        # Test output and reports
├── cucumber-json/                       # Cucumber JSON reports
├── playwright.config.ts                 # Playwright configuration
├── package.json                         # Project dependencies and scripts
└── tsconfig.json                        # TypeScript configuration
```

## Running Tests

### All Tests
```bash
npm run test
```

### Headed Mode (visible browser)
```bash
npm run test:headed
```

### Parallel Execution
```bash
npm run test:parallel
```

### Sequential Execution
```bash
npm run test:sequential
```

### Smoke Tests
```bash
npm run test:smoke
```

### Regression Tests
```bash
npm run test:regression
```

### Run with Specific Tags
```bash
npm run test:tags -- --tags=@your-tag
```

### BDD Tests
```bash
npm run test:bdd
```

## Generating Reports

After running tests, generate the Cucumber HTML report:

```bash
npm run report:cucumber
```

The report will be available at `cucumber-report/index.html`.

## Configuration

- **Playwright Config**: Located in `playwright.config.ts`. Configures browsers, timeouts, retries, and reporters.
- **Environment Variables**:
  - `BASE_URL`: The base URL of the registration form.
  - `BDD_WORKERS`: Number of parallel workers (default: 2 in local, 4 in CI).
  - `BDD_TAGS`: Cucumber tags to filter scenarios.
  - `BDD_FULLY_PARALLEL`: Set to 'false' to disable fully parallel execution.

## Test Scenarios

The framework tests various registration scenarios:

- Successful registration with valid data
- Validation errors for missing fields (email, last name)
- Invalid email formats
- Phone number validation (digits only, minimum length)
- Password requirements
- Policy agreement
- Registration summary display

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run tests to ensure everything works.
5. Submit a pull request.

## License

This project is licensed under the ISC License.