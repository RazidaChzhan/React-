import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import './style.css'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  onClickUp = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  };

 render() {
      return (
        <Fragment>
          <h1>{this.state.counter}</h1>
          <button onClick={this.onClickUp}>Click me!</button>
        </Fragment>
      )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);