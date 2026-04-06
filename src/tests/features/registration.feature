Feature: Registration form
  As a prospective customer
  I want to submit my registration details
  So that I can confirm the registration flow works for valid profiles

Background:
    Given the user navigates to the registration form

@smoke @bug
Scenario: User can register after agreeing to the policy
  When the user submits the registration form with:
    | firstName | Olivia             |
    | lastName  | Harper             |
    | phone     | 5551234567         |
    | country   | India              |
    | email     | olivia@example.com |
    | password  | Password123        |
  Then the user agrees to the policy and submits the form
  Then the registration confirmation banner should be displayed

@smoke @bug
Scenario: Registration summary displays correct user details
When the user submits the registration form with:
      | firstName | John               |
      | lastName  | Knight             |
      | phone     | 02102496529        |
      | country   | New Zealand        |
      | email     | john@example.com   |
      | password  | Password123        |
Then the registration confirmation banner should be displayed
And the registration summary should include firstName "John"
And the registration summary should include Country "New Zealand"
And the registration summary should include email "john@example.com"
And the registration summary should include lastName "Knight"

@smoke @bug
Scenario: validate phone number is correctly displayed in registration summary
When the user submits the registration form with:
      | firstName | Olivia             |
      | lastName  | Harper             |
      | phone     | 02102496529        |
      | country   | India              |
      | email     | olivia@example.com |
      | password  | Password123        |
Then the registration confirmation banner should be displayed
And the registration summary should include firstName "Olivia"
And the registration summary should include Country "India"
And the registration summary should include email "olivia@example.com"
And the registration summary should include phone "02102496529"

@smoke @bug
Scenario: Phone number field should allow digits only
When the user submits the registration form with:
      | firstName | Ethan              |
      | lastName  | Williams           |
      | phone     | abcdefgg8i         |
      | country   | Australia          |
      | email     | ethan@example.com  |
      | password  | Password123        |
Then the registration confirmation banner should not be displayed

@smoke @bug
Scenario: Registration should not succeeds when the last name is missing
When the user submits the registration form with:
      | firstName | Liam               |
      | lastName  | blank              |
      | phone     | 02102496529        |
      | country   | Australia          |
      | email     | liam@example.com   |
      | password  | Password123        |
Then the registration confirmation banner should not be displayed

@smoke @bug
Scenario: Registration should not succeeds when the email is missing
When the user submits the registration form with:
      | firstName | Liam               |
      | lastName  | douglas            |
      | phone     | 02102496529        |
      | country   | Australia          |
      | email     | blank              |
      | password  | Password123        |
Then the registration confirmation banner should not be displayed

@smoke @bug
Scenario: Registration should not succeeds with invalid email format
When the user submits the registration form with:
      | firstName | Liam               |
      | lastName  | douglas            |
      | phone     | 02102496529        |
      | country   | Australia          |
      | email     | not-proper-email   |
      | password  | Password123        |
Then the registration confirmation banner should not be displayed

@smoke
Scenario Outline: Registration shows a validation message for malformed details
When the user submits the registration form with:
      | firstName | Ava             |
      | lastName  | Stone           |
      | phone     | <phone>         |
      | country   | India           |
      | email     | ava@example.com |
      | password  | <password>      |
Then the registration result should contain text "<message>"

    Examples:
      | phone      | password    | message                                                 |
      | 123        | Password123 | The phone number should contain at least 10 characters! |
      | 1234567890 | 123         | The password should contain between [6,20] characters!  |

  @smoke
  Scenario: Successful registration with only the mandatory business details
      When the user submits the registration form with:
        | firstName | blank            |
        | lastName  | Tester           |
        | phone     | 1234567890       |
        | country   | blank            |
        | email     | test@example.com |
        | password  | Password123      |
      Then the registration confirmation banner should be displayed
      And the registration summary should include email "test@example.com"
      And the registration summary should show the default country placeholder     