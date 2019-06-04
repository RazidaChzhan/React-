import React, {Fragment} from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      date: new Date(),
      year: new Date(),
    }
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
  
  render() {
      return (
        <Fragment>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onClickUp}>Click me!</button>
        <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.onClickDate}>Refresh current time!</button>
        <h3>Year is {this.state.year.getFullYear()}.</h3>
        </Fragment>
      );
  }
}

class DataView extends React.Component {
  constructor() {
    super();
    this.props = {
      year: new Date(),
    }
  }

  render() {
    return (
      <Fragment>
        <h3>Year is {this.props.year.getFullYear()}.</h3>
      </Fragment>
    );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
