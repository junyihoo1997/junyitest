// Module Import
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

// File Import
import HomePage from './pages/HomePage'
import ExperiencesPage from './pages/ExperiencesPage'


class App extends Component {  
  render(){
    function initializeReactGA() {
      ReactGA.initialize('UA-144807063-1');
      ReactGA.pageview('/homepage');
  }
  initializeReactGA()
    return (
  
      <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/experiences" component={ExperiencesPage} tittle="Experiences"/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }   
}
export default App;