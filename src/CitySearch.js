import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined, 
  };

  //Event handler for input
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
  });


    if (suggestions.length === 0 ) {
      this.setState({
         query: value,
         infoText: 'We cannot find the city you are looking for. Please try another city',
       suggestions
       });
      } else {
        return this.setState({
          query: value,
          suggestions,
          infoText:""
        });
      }
    };

  handleItemClicked = (suggestion) => {
    this.setState({
        query: suggestion,
        suggestions:[],
        showSuggestions: false,
        infoText:""
    });
    this.props.updateEvents(suggestion);
  };


  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          id="city"
          placeholder="Select city:"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true });
         }}
        />
        <ul className="suggestions" style={this.state.showSuggestions
          ? {} 
          : { display: 'none' }}>
          
          {this.state.suggestions.map((suggestion) => (
            <li
            className="suggestions-item"
             key={suggestion}
             onClick={() => this.handleItemClicked(suggestion)}>{suggestion}
             </li>
          ))}
          <li className="suggestions-all"
          key="all"
           onClick={() => this.handleItemClicked("all")}
           >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;