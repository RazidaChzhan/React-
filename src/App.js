import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
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
            <li><NavLink to='/'>Counter</NavLink></li>
            <li><NavLink to='/about'>Current Date</NavLink></li>
          </ul>
          <hr/>
          <Switch>
          <Route exact path ='/' component = {Home}/>
          <Route path ='/about' component = {Year}/>
          </Switch>
          
         
        </div>
        </BrowserRouter>
    )
    
  }
}

export default Navigation;