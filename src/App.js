/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../src/assets/img/Original.png';
import './App.css';
/* Components */
import Home from './components/home';
import About from './components/about';
import Apps from './components/apps';
import Websites from './components/websites';
import Contact from './components/contact';
import Privacy from './components/privacy';
import Sent from './components/sent';

import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/about" component = {About}/>
            <Route path="/apps" component = {Apps} />
            <Route path="/websites" component = {Websites} />
            <Route path="/contact" component = {Contact} />
            <Route path="/privacy" component = {Privacy}/>
            <Route path="/sent" component = {Sent} />
          </Switch>
      </Router>

      <footer className="border-top footer text-muted">
        <div className="container">
          &copy; 2020
        </div>
      </footer>

    </div>
  );
}

export default App;
