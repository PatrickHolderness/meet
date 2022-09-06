# meet

My goal is to build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.



FEATURE 1: FILTER EVENTS BY CITY

As a user, I should be able to see events taking place in whichever city I choose, so that I can see a list of events in that city.

  Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities. 

Given: user hasn’t searched for any city 

When: the user opens the app 

Then: the user should see a list of all upcoming events 

Scenario 2: The user should see a list of suggestions when they search for a city. 

Given: the main page is open 

When: user starts typing in the city textbox

 Then: the user should see a list of cities (suggestions) that match what they’ve typed 

Scenario 3: The user can select a city from the suggested list. 

Given: the user was typing “Berlin” in the city textbox and the list of suggested cities is showing

 When: the user selects a city (e.g. “Berlin, Germany”) 

Then: their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city  



FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I should be able to have the option to display and hide (collapse) event details, so I can control how much information and how many events I see.


Scenario 1: An event element is collapsed by default.

Given: User is on the main page

When: Nothing is selected

Then: Event details will be ‘collapsed’ (hidden.)

Scenario 2: User can expand an event to see its details

Given: User wants to see more about an event

When: The user clicks on that event

Then: the details for that event will expand

Scenario 3: User can collapse an event to hide its details.

Given: User wants to hide the event.

When: The user clicks on the expanded event details

Then: The details will collapse again (be hidden.)


FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to control how many events I see, so that I can effectively filter information.

Scenario 1: No number is specified

Given: The user has not specified how many events they want to see

When: The user visits the page

Then: a default number of events is displayed.

Scenario 2: User has specified event count preference


Given: The user has specified an event count preference

When: The user visits the page

Then: The specified number of events will be displayed.



FEATURE 4: USE APP WHEN OFFLINE

As a user, I should be able to access event information while offline, so that I can view event information in every situation.

Scenario 1: Show cached data while offline

Given: User has no internet and would like to access the site

When: They access the site offline

Then: Cached data is accessible

Scenario 2: Show error if user tries to change settings while offline

Given: The user is viewing an offline, cached version of the site

When: They want to change settings (city, time, range)

Then: An error message is displayed

FEATURE 5: DATA VISUALISATION

As a user, I should be able to see charts and other forms of visualisation, showing the number of upcoming events in my city, so that I am as aware as possible of any events that might be of interest to me.

Scenario 1: Show a chart with the number of upcoming events in each city

Given: The user has selected a city

When: The user clicks on the city’s upcoming events

Then: A chart will be displayed, showing upcoming events in the city.
