Feature: BBC webpage User Sign In
  As a BBC user
  user want to sign in from the BBC homepage
  So that user can access Sport and comments

  Background:
    Given user open the BBC homepage for sign in
    When user click the Sign in button
    And user enter BBC email and clicks continue
    And user enter BBC password and clicks continue
    Then user should be signed in successfully

  @signin
  Scenario: Verify user can sign in
  Then user should be signed in successfully
