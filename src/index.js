import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import './style.css'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      date: new Date(),
      year: new Date (),
    }
  }

  onClickUp = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  };

  // onClickDate = () => {
  //   this.setState((prevState) => {
  //     return {
  //       date: date.toLocaleDateString(),
  //     }
  //   })
  // };


 render() {
      return (
        <Fragment>
          <h1>{this.state.counter}</h1>
          <button onClick={this.onClickUp}>Click me!</button>
          <h2>Today is {this.state.date.toLocaleDateString()}.</h2>
          <button onClick={this.onClickDate}>Refresh current date!</button>
          <h3>Year is {this.state.year.getFullYear()}.</h3>
        </Fragment>
      )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);