import React, { Component } from 'react';

class Time extends Component {
  render() {
    console.log('hours', this.props.time);
    return (
      <div>
        <h3>Current time is {this.props.time}.</h3>        
      </div>
    );
  }
}

export default Time;