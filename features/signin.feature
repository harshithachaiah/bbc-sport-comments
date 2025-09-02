Feature: BBC webpage User Sign In
  As a BBC user
  I want to sign in from the BBC homepage
  So that I can access Sport and comments

  Background:
    Given I open the BBC homepage for sign in
    When I click the Sign in button
    And I enter my BBC email and continue
    And I enter my BBC password and continue
    Then I should be signed in successfully
