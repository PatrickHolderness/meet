import React from 'react';
import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen'

class App extends React.Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
const accessToken = localStorage.getItem('access_token');
const isTokenValid = (await checkToken(accessToken)).error ? false :
true;
const searchParams = new URLSearchParams(window.location.search);
const code = searchParams.get("code");
this.setState({ showWelcomeScreen: !(code || isTokenValid) });
if ((code || isTokenValid) && this.mounted) {
getEvents().then((events) => {
if (this.mounted) {
this.setState({ events, locations: extractLocations(events) });
}
});
}
}


  componentWillUnmount(){
    this.mounted = false;
  }



  updateEvents = (location, eventCount) => {
    if (location === undefined) {
      location = this.state.seletedLocation;
    }
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    }
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        seletedLocation: location
      });
    });
  };



  render() {

    if (this.state.showWelcomeScreen === undefined) return <div
    className="App" />
   
    return (
      <div className="App">
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
        {!navigator.onLine && (
          <OfflineAlert text={"You are currently offline!"} />
        )}
        <h1>Meet App</h1>
        <h3>Choose your nearest city</h3>
          <CitySearch updateEvents={this.updateEvents} locations={this.state.locations} />
          <NumberOfEvents updateEvents={this.updateEvents} />
          <EventList events={this.state.events} />
      </div>
  );
}
}

export default App;