import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

export class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 0 && value <= 32) {
    
      return this.setState({ numberOfEvents: value, errorText: "" });
    } else {
      return this.setState({
        numberOfEvents: 32,
        errorText: "Select number from 1 to 32",
      });
    }
}

// constructor() {
//   super();
//   this.state = {
//       renderNumber: 32,
//       errorText: ''
//   }
// }
 
render() {
  return (
    <div className="numberOfEvents">
      <input
        type="number"
        id="default"
        className="number-input"
        value={this.state.numberOfEvents}
        onChange={this.handleInputChanged}
      />
      <ErrorAlert text={this.state.errorText} />
    </div>
  );
}
}

export default NumberOfEvents;