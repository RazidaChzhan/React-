import React, {Fragment} from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {

  state = {
    counter: 0,
    date: new Date(),
    year: new Date(),
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
          <button onClick = {() => {this.props.updateData(this.state.year)}}>Обновить год</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.onClickUp}>Click me!</button>
          <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.onClickDate}>Refresh current time!</button>
        </Fragment>
      );
  }
}

class DataView extends React.Component {
  state = {
    year: ''
  }

  updateData = (value) => {
    this.setState({ year: value.getFullYear() })
  }


  render() {
    return (
      <Fragment>
        <h3>Year is {this.state.year}.</h3>
        <Counter updateData={this.updateData}/>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Counter />, rootElement);
ReactDOM.render(<DataView />, document.getElementById('root'));