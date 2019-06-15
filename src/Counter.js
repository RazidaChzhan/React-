import React, { Component } from 'react';
import Year from './Year';
import Time from './Time';
// import createBrowserHistory from 'history/createBrowserHistory';
// import Navigation from './Navigation';


class Counter extends Component {

  state = {
    counter: 0,
    date: new Date(),
    // currentYear: '',
    // currentTime: ''
  }

  onClickUp = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  };
  
  onClickDate = () => {
    this.setState((prevState) => {
      return {
        date: new Date (), 
      }
    });
  };

  onClickYear = () => {
    this.setState((prevState) => {
      return {
        currentYear: this.state.date.getFullYear(), 
      }
    });
  };

  // onClickTime = () => {
  //   this.setState((prevState) => {
  //     return {
  //       currentTime: this.state.date.toLocaleTimeString(),
  //   }
  // });
  // };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onClickUp}>Click me!</button>
        <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.onClickDate}>Refresh current time!</button>
        <hr/>
        {/* <button onClick={this.onClickYear}>Refresh year!</button>
        <Year year={this.state.currentYear} />
        <button onClick={this.onClickTime}>Refresh time!</button>
        <Time time={this.state.currentTime} /> */}
      </div>
    );
  }
}

export default Counter;