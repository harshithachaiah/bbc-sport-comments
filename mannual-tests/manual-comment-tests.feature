Feature: Manual validation of BBC Sport comments

  @manual
  Scenario: Verify login and navigation to BBC Sport
    Given I am a registered BBC user
    When I sign in from the homepage
    Then I should see my account name in the navigation bar

  @manual
  Scenario: Verify commenting option is disabled when not logged in
    Given I open a BBC Sport article with comments enabled
    Then I should see a prompt to sign in before commenting

  @manual
  Scenario: Verify error shown for invalid input in comment box
    Given I am logged in on an article with comments
    When I enter more than 500 characters into the comment box
    Then I should see an error message "Comment too long"

  @manual
  Scenario: Verify that comment is not submitted when empty
    Given I am logged in on an article with comments
    When I click the "Post" button without typing anything
    Then I should see an error "Comment cannot be empty"
