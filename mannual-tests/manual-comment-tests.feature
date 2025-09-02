Feature: Manual validation of BBC Sport comments
  As a BBC user
  I want to check commenting functionality on articles
  So that I can verify comment behavior and UI

  # Scenario for non-logged-in users (no background applied)
  @manual
  Scenario: Verify commenting option is disabled when not logged in
    Given I open a BBC Sport article with comments enabled
    Then I should see a prompt or button to sign in before commenting

  @manual
  Scenario: Verify user can log in from the comment section
    Given I open a BBC Sport article with comments 
    And I am not logged in
    When I click the "Sign in" button in the comment section
    And I enter my BBC email and continue
    And I enter my BBC password and continue
    Then I should be logged in successfully
    And the comment box should be visible and ready for posting

  @manual
  Scenario: Verify user registration from the comment section with age verification
    Given I open a BBC Sport article with comments enabled
    And I am not logged in
    When I click the "Register" button in the comment section
    And I select my age group as "13 or over"
    And I enter my email and continue
    And I enter the verification code sent to my email
    Then I should be registered successfully
    And the comment box should be visible and ready for posting

  @manual
  Scenario: Verify under-13 registration requires parental email
    Given I open a BBC Sport article with comments enabled
    And I am not logged in
    When I click the "Register" button in the comment section
    And I select my age group as "Under 13"
    And I enter my parent's email and continue
    Then I should see the message "We've sent you an email. Please check your inbox to continue."





  # Background applied only to logged-in scenarios
  Background: User logs in to the BBC website, clicks on the Sport button in the navigation bar, and clicks on the comment icon

  @manual
  Scenario: Verify error for invalid input in comment box
    When I enter more than 400 characters into the comment box
    Then the "Post" button should be disabled

  @manual
  Scenario: Verify Post and Cancel buttons appear only after entering a comment
    When I focus on the comment box but do not type anything
    Then the "Post" and "Cancel" buttons should not be visible
    When I enter text into the comment box
    Then the "Post" and "Cancel" buttons should become visible

  @manual
  Scenario: Verify user comments are displayed when clicking on a username
    When I click on a username in the comment section
    Then only the comments posted by that user should be displayed

  @manual
  Scenario: Verify user can reply to a comment
    When I click the "Reply" button on a specific comment
    And I enter a reply in the reply box
    And I click the "Post" button for the reply
    Then the reply "Thank you for your comment" should appear nested under the original comment

  @manual @houseRules
  Scenario: Click the House Rules link and verify the page opens
    When I click the house rules link
    Then a new window should open with URL of house rules
    And the page title should match house rules

  @manual
  Scenario: Verify user can like and dislike a comment
    Given I am viewing the comments section of an article
    When I click the "Like" button on a specific comment
    Then the comment should show as liked
    When I click the "Dislike" button on the same comment
    Then the comment should show as disliked
    And the "Like" button should no longer be active

  @manual
  Scenario: Verify comments can be sorted
    Given I am viewing the comments section of an article
    When I select "Latest" from the sort dropdown
    Then the comments should be displayed from latest to oldest
    When I select "Oldest" from the sort dropdown
    Then the comments should be displayed from oldest to newest
    When I select "Highest Rated" from the sort dropdown
    Then the comments should be displayed with highest rated first
    When I select "Most Replies" from the sort dropdown
    Then the comments should be displayed with most replies first

  @manual
  Scenario: Verify user can load more comments
    Given I am viewing the comments section of an article
    When I click the "More comments" button
    Then additional comments should be displayed below the existing comments
    And the total number of visible comments should increase

  @manual
  Scenario: Verify user can load more replies to a comment
    Given I am viewing a comment with replies in the comment section
    When I click the "More replies" button under that comment
    Then additional replies should be displayed nested under the original comment
    And the total number of visible replies should increase


  @manual
  Scenario: Verify user can report a comment (opens in new tab)
    Given I am viewing a comment in the comment section
    When I click the "More options" (three dots) button on that comment
    And I select the "Report Comment"
    Then a new tab should open with the report form
    And I should be able to submit a reason for reporting the comment
    And a confirmation message should be displayed after reporting


  @manual
  Scenario: Verify user can expand and collapse replies on specific comments
    Given I am viewing the comment section of an article
    When a comment has replies available
    And I click the link on that comment
    Then the replies should expand and be visible beneath the original comment
    And I should be able to see who posted 
    When I click the link on the same comment again
    Then the replies should collapse and no longer be visible














 