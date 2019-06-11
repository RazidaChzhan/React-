import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Year from './Year';
import Counter from './Counter';

const history = createBrowserHistory();

const Home = () => (
  <div>
    <h2>Counter</h2>
    <Counter/>
  </div>
)

const About = () => (
  <div>
    <h2>Current date</h2>
    <Year/>
  </div>
)

class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter history = {History}>
        <div>
          <ul>
            <li><Link to='/'>Counter</Link></li>
            <li><Link to='/about'>Current Date</Link></li>
          </ul>
          <hr/>
          <Route exact path ='/' component = {Home}/>
          <Route path ='/about' component = {About}/>
         
        </div>
        </BrowserRouter>
    )
    
  }
}

export default Navigation;