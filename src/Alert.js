import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.class = 'alert';
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  getClass = () => {
    return this.class;
  }

  render() {
    return (
        <div className={`alert ${this.getClass()}`}>
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
  getStyle = () => {
    return {
      color: this.color,
      fontStyle: "italic",
    };
};
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ff0000';
    this.class = 'error-alert';
  }
  getStyle = () => {
    return {
      color: this.color,
      fontStyle: "italic",
    };
};

}

export { InfoAlert, ErrorAlert };