import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Route,
   Switch,
    Link, 
    Redirect } from "react-router-dom";

import MainPage from './pages/MainPage';
import Dharshu from './pages/dharshu';
import Leela from './pages/leela';
import Praveenbro from './pages/praveenbro';
import Nextpage from './pages/Nextpage';


class App extends Component {
  render() {

    return (
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/darshubro" component={Dharshu}/>
        <Route exact path="/leebro" component={Leela}/>
        <Route exact path="/Praveenbro" component={Praveenbro}/>
        <Route exact path="/darshubro/log" component={Nextpage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
