 Feature: ClearScore savings calculator

 @savings_calculator @all
  Scenario: As a user, I want to be able to set scores and goal on the ClearScore savings calculator
    Given I am on the homepage
    And I click the savings calculator tab.
    When I see the savings calculator is displayed and I select 50 for my current score
    And I also select my score goal of 680
    And I verify that my current score interest rate, costs and cards available are: 36.5%, £849 and 22
    And I verify that my goal interest rate, costs and cards available are: 25%, £520 and 241
    Then my potential savings display should be £384