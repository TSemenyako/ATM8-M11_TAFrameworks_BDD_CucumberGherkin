@all
Feature: Query base tests

@query
Scenario Outline: Run query of each IP Type
    Given I am on the Query screen

    When I search for <Query Name> query in Query List
    And I click on the <Query Name> query in Query List
    Then I see <Query Name> query label
    And I see grid is loaded

    Examples:
        | Query Name       |
        | 'PA All Cases'   |
        | 'TM All Cases'   |
        | 'DS All Cases'   |
        | 'GIP1 All Cases' |