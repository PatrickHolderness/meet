import React from 'react';
import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api'


class App extends React.Component {
  state = {
    events: [],
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
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

    return (
      <div className="App">
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