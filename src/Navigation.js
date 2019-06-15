import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Year from './Year';
import Counter from './Counter';
import {Helmet} from "react-helmet";



const Home = () => (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Counter</title>
     </Helmet>
      <h2>Counter</h2>
      <Counter/>
    </div>
  )
  

  const year = () => (
    <div>
      <h2>Current Date</h2>
      <Counter/>
    </div>
  )

  class Navigation extends React.Component {
    render() {
      return (
        <BrowserRouter history = {History}>
          <div>
            <ul>
              <li><NavLink to='/' >Counter</NavLink></li>
              <li><NavLink to='/year'>Current Date</NavLink></li>
            </ul>
            <hr/>
            <Switch>
            
            <Route exact path ='/' component = {Home}/>>
            <Route exact path ='/year' component = {Year}/>
            </Switch>
            
           
          </div>
          </BrowserRouter>
      )
      
    }
  }
  
  export default Navigation;