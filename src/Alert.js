import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }


  render() {
    return (
        <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#3600FF';
    this.class = 'info-alert';
  }
  
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ff0000';
    this.class = 'error-alert';
  }

}

  class OfflineAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
        this.class = 'offline-alert';

}

  }

export { InfoAlert, ErrorAlert, OfflineAlert };