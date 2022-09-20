Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default.
    Given the user has not specified a number of events to be displayed
    When app loaded
    Then the user should see a default number which is 32

  Scenario: User can change the number of events they want to see.
    Given the main page is open
    And the list of elements has been loaded and the user did not specify a number of events to be displayed
    When the user enters a number (for example six) in the number of events input field
    Then the user should see a six in the input field and six events displayed.