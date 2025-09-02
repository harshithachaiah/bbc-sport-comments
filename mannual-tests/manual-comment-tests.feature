Feature: Manual validation of BBC Sport section comments
  As a BBC user
  user want to check commenting functionality on articles
  So that user can verify comment behavior and UI

  # Scenario for non-logged-in users
  @manual
  Scenario: Verify commenting option is disabled when not logged in
    Given user launches BBC Sport article with comments enabled
    Then user should see a prompt or button to sign in before commenting

  @manual
  Scenario: Verify user registration from the comment section 
    Given user launches BBC Sport article with comments enabled
    When user click the "Register" button in the comment section
    And user selects "13 or over"
    And user enters email and click continue button
    And user enters the verification code received on their email and click continue
    And user enters password and click continue
    And user lands on the Enter your detailse page
    And user enters date of birth, postcode and selects gender as male and clicks register
    Then user should be registered successfully
    And user see the message "OK you’re signed in. Now, want to keep up to date?" 
    And user clicks Yes Please and click on continue
    And user enter the display name and click continue
    And user verifies the message All Done and click continue
    Then user is able to enter the comments


  @manual
  Scenario: Verify user can login from the comment section
    Given user launches BBC Sport article page with comments 
    When user clicks the "Sign in" button in the comment section
    And user enters BBC email and and click continue
    And user enters BBC password and click continue
    Then user should be logged in successfully
    And the comment box should be visible and ready for posting
 


  @manual
  Scenario: Verify under-13 registration requires parental email
    Given user launches BBC Sport article with comments enabled
    When user click the "Register" button in the comment section
    And user select my age group as "Under 13"
    And user enter my parent's email and continue
    Then user should see the message "We've sent you an email. Please check your inbox to continue."




  # Background applied to logged-in scenarios
  Background: User logs in to the BBC website, clicks on the Sport button in the navigation bar, and clicks on the comment icon

  @manual
  Scenario: Verify error for invalid input in comment box
    When user enter more than 400 characters into the comment box
    Then the "Post" button should be disabled

  @manual
  Scenario: Verify Post and Cancel buttons appear only after entering a comment
    When user focus on the comment box but do not type anything
    Then the "Post" and "Cancel" buttons should not be visible
    When user enter text into the comment box
    Then the "Post" and "Cancel" buttons should become visible

  @manual
  Scenario: Verify user comments are displayed when clicking on a username
    When user click on a username in the comment section
    Then the comments posted by that user should be displayed

  @manual
  Scenario: Verify user can reply to a comment
    When user click the "Reply" button on a specific comment
    And user enter a text in the reply text area
    And user click the "Post" button for the reply
    Then the "Thank you for your comment" should appear 
    And the user comment should nested under the original comment

  @manual @houseRules
  Scenario: Click the House Rules link and verify the page opens
    When user click the house rules link
    Then a new window should open with URL of house rules
    And the page title should match house rules

  @manual
  Scenario: Verify user can like and dislike a comment
    Given user am viewing the comments section of an article
    When user click the "Like" button on a specific comment
    Then the comment should show as liked
    When user click the "Dislike" button on the same comment
    Then the comment should show as disliked

  @manual
  Scenario: Verify comments can be sorted
    Given user viewing the comments section of an article
    When user select "Latest" from the sort dropdown
    Then the comments should be displayed from latest to oldest
    When user select "Oldest" from the sort dropdown
    Then the comments should be displayed from oldest to newest
    When user select "Highest Rated" from the sort dropdown
    Then the comments should be displayed with highest rated first
    When user select "Most Replies" from the sort dropdown
    Then the comments should be displayed with most replies first

  @manual
  Scenario: Verify user can load more comments
    Given user viewing the comments section of an article
    When user click the "More comments" button
    Then additional comments should be displayed below the existing comments
    And the total number of visible comments should increase

  @manual
  Scenario: Verify user can load more replies to a comment
    Given user viewing a comment with replies in the comment section
    When user click the "More replies" button under that comment
    Then additional replies should be displayed nested under the original comment
    And the total number of visible replies should increase


  @manual
  Scenario: Verify user can report a comment (opens in new tab)
    Given user viewing a comment in the comment section
    When user click the "More options" (three dots) button on that comment
    And user select the "Report Comment"
    Then a new tab should open with the report form
    And user should select a radio button for "What's worrying you about this content?"
    And user enter text in "Tell us more" text field and clicks on send report
    And a confirmation message "You've submitted a report. We'll get back to you soon with our decision." should be displayed after reporting


  @manual
  Scenario: Verify user can expand and collapse replies on specific comments
    Given user viewing the comment section of an article
    When a comment has replies available
    And user click the link on that comment
    Then the replies should expand and be visible beneath the original comment
    And user should be able to see who posted 
    When user click the link on the same comment again
    Then the replies should collapse and no longer be visible














 