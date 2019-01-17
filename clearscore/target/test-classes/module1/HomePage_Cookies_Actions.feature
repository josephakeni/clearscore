Feature: Check and interract with cookie notification on ClearScore website

@clearscore_cookies @all
  Scenario: As a user, I want to be able verify and interract with the cookies notification
    Given I am on the homepage
    And I verify the cookies notification is present
    When I click the /No Problem/ button on the cookies notification bar in order to dismiss the notification
    And I verify that the cookie notification bar doesnt reappear
    Then I know that the appropriate cookies are set
    
  