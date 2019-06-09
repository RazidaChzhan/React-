import React, { Component } from 'react';

class Year extends Component {
  render() {
    console.log('year', this.props.year);
    return (
      <div>
        <h3>Year is {this.props.year}.</h3>        
      </div>
    );
  }
}

export default Year;