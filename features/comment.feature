Feature: Viewing comments on BBC Sport articles
  As a logged-in BBC user
  I want to check if comments are available on a sports article
  So that I can verify commenting functionality

  Background:
    Given I open the BBC homepage for sign in
    When I click the Sign in button
    And I enter my BBC email and continue
    And I enter my BBC password and continue
    Then I should be signed in successfully

  @automated @visible
  Scenario: Verify comments are visible on an article with comments enabled
    When I click the Sport button in the navigation bar
    And I count all the articles with the comment icon and click the first one
    Then I should see the comments section

  @automated @commentBox
  Scenario Outline: Enter text into the comment box
    When I click the Sport button in the navigation bar
    And I count all the articles with the comment icon and click the first one
    Then I should see the comments section
    And I enter "<commentText>" into the comment box
    Then I verify the Post button state
    Then I cancel my comment

    Examples:
      | commentText                       |
      | This is an automated test comment |
      | Hello, testing comment box!       |
      | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a    |
      | Testing special characters !@#$% |
      | 1234567892022                     |
      | 400+ characters Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a    |

  @automated @sorting
  Scenario Outline: Sort comments using the dropdown
    When I click the Sport button in the navigation bar
    And I count all the articles with the comment icon and click the first one
    Then I should see the comments section
    When I select "<sortOption>" from the sort dropdown
    Then the comments should be sorted by "<sortOption>"

    Examples:
      | sortOption       |
      | NewestFirst      |
      | OldestFirst      |
      | HighestRated     |
      | MostRepliesFirst |

 @automated @houseRules
 Scenario: Click the House Rules link and verify the page opens
  When I click the Sport button in the navigation bar
  And I count all the articles with the comment icon and click the first one
  Then I should see the comments section
  When I click the house rules link
  Then a new window should open with URL of house rules
  And the page title should match house rules

