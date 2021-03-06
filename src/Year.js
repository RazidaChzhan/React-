import React, { Component } from 'react';
import Time from './Time';
import {Helmet} from 'react-helmet';

class Year extends Component {
  state = {
    date: new Date(),
    currentYear: '',
    currentTime: ''
  }

  onClickYear = () => {
    this.setState((prevState) => {
      return {
        currentYear: this.state.date.getFullYear(), 
      }
    });
  };


  onClickTime = () => {
    this.setState((prevState) => {
      return {
        currentTime: this.state.date.toLocaleTimeString(),
    }
  });
  };
  
  render() {
    console.log('year', this.props.year);
    return (
      <div>
            <Helmet>
      <meta charSet="utf-8" />
      <title>Current Date</title>
     </Helmet>
        <h3>Year is {this.state.currentYear}.</h3>  
        <button onClick={this.onClickYear}>Refresh year!</button>
        <hr/>
        <button onClick={this.onClickTime}>Refresh time!</button>
        <Time time={this.state.currentTime} />      
      </div>
    );
  }
}

export default Year;