# Meet

![Meet screenshot](https://user-images.githubusercontent.com/104070642/200294892-f0800594-a05e-4f00-80fa-dc711d88c203.png)
![Meet screenshot 2](https://user-images.githubusercontent.com/104070642/200294917-ade88fce-1648-47c7-b0a1-c0d2a57c0702.png)


## Goal  
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## Built and tested using
- Amazon Web Services (AWS)
- Google Cloud Platform
- Javascript
- React
- Puppeteer
- Enzyme
- Recharts


## Test Scenarios

### Feature 1: Filter events by city

As a user, I should be able to see events taking place in whichever city I choose, so that I can see a list of events in that city.

**Scenario 1:** When the user hasn’t searched for a city, show upcoming events from all cities. 
```
Given: user hasn’t searched for any city
When: the user opens the app
Then: the user should see the list of upcoming events

**Scenario 2:** The user should see a list of suggestions when they search for a city. 
```
Given: the main page is open
When: user starts typing in the city textbox
Then: the user should receive a list of cities (suggestions) that match what they’ve typed

**Scenario 3:** The user can select a city from the suggested list. 
```
Given: the user was typing “Berlin” in the city textbox
When: the user selects a city (e.g., "Berlin, Germany") from the list
Then: their city should be changed to that city (i.e., “Berlin, Germany”) 
And: the user should receive a list of upcoming events in that city
```


### Feature 2: show/hide an events details

As a user, I should be able to have the option to display and hide (collapse) event details, so I can control how much information and how many events I see.


**Scenario 1:**  An event element is collapsed by default.
```
Given: that the user opens the main page
When: the user views the event element of a city
Then: the event element from each city will initially be collapsed/hidden from the user
```
**Scenario 2:** The user can expand an event to see its details. 
```
Given: the user is viewing a specific event
When: the user selects the event 
Then: the details of that event will be listed for the user to view
```
**Scenario 3:** The user can collapse an event to hide its details. 
```
Given: the event element is opened
When: the user closes the event element
Then: the details are hidden
```


### Feature 3: Specify number of events

As a user, I should be able to control how many events I see, so that I can effectively filter information.

**Scenario 1:** When the user hasn’t specified a number, 32 is the default number.
```
Given: the user at the home page
When: the user chooses no specific amount of search results
Then: the default amount of visible search results per city will be 32
``` 
**Scenario 2:** The user can change the number of events they want to see. 
```
Given: the user opened the search results query
When: the user changes the default number
Then: the default number of results will be changed to what the users select
```



### Feature 4: use app when offline

As a user, I should be able to access event information while offline, so that I can view event information in every situation.

**Scenario 1:** Show cached data when there’s no internet connection. 
```
Given: the app has no internet connection
When: the data is cached
Then: that data will be shown
```
**Scenario 2:** Show error when user changes the settings (city, time range). 
```
Given: the user opened the settings tab
When: the user changes the settings 
Then: an error message will be displayed
```
### Feature 5: Data Visualisation

As a user, I should be able to see charts and other forms of visualisation, showing the number of upcoming events in my city, so that I am as aware as possible of any events that might be of interest to me.

**Scenario 1:** Show a chart with the number of upcoming events in each city. 
```
Given: the user selected a city
When: the user clicks on the city’s upcoming events button
Then: a chart will list the upcoming events taking place in the city
```

 ## Contributions
 
 Contributions and collaboration are an excellent way to learn and create new code. Any contributions to this project would be greatly appreciated!
 If you have any suggestions to improve this project, please fork the repo and create a pull request. Open an issue with the tag **enhancement**. Thanks!
 
 1. Fork project
 2. Create your branch
 3. Commit changes
 4. Push to your branch
 5. Open a pull request.
 
 ## Contact
 
 Please feel free to contact me with any questions or advice. As a junior developer I am always open to helpful advice and learning new things. Feel free to get in touch!
 
 - Patrick Holderness - patrickholderness@gmail.com
 - Project Link - https://github.com/patrickholderness/meet.git
