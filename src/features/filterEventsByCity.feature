Feature: Filter events by City

Scenario: If a user hasn`t searched for a city, show upcoming event from all cities
Given the user hasn`t searched for a city
When the user starts the app
Then the user should see a list of all upcoming events

Scenario: User should see a list of suggestions when they search for a city
Given the main page is open
When the user starts typing in the search box
Then the user should receive a list of suggestions matching their input

Scenario: User can select a city from the suggested list
Given user has started typing "Berlin" in the search box
And the list of suggestions is displayed
When the user selects a city from the list of suggestions (e.g Berlin)
Then the user should be shown the selected city
And the user should receive a list of upcoming events in that city