import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import './style.css'

// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//       date: new Date(),
//     }
//   }
// }

  class DateView extends React.Component {
   render () {
    return (
      <Fragment>
        <h3>Year is {this.props.year.getFullYear()}.</h3>
      </Fragment>
    ) 
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
  }

  // ReactDomrender() {
  //     return (
  //       <Fragment>
  //         <h1>{this.state.counter}</h1>
  //         <button onClick={this.onClickUp}>Click me!</button>
  //         <h2>Today is {this.state.date.toLocaleDateString()}.</h2>
  //         <button onClick={this.onClickDate}>Refresh current date!</button>
          
  //       </Fragment>
  //     )
  // }


  const rootElement = document.getElementById("root");
  ReactDOM.render(<Counter />, rootElement);