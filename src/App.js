import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Team from './components/Pages/Team';
import Portfolio from './components/Pages/Portfolio';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
    <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          path="/About"
          component={About}
        />
        <Route
          path="/Team"
          component={Team}
        />        
        <Route
          path="/Portfolio"
          component={Portfolio}
        />
        <Route
          path="/Services"
          component={Services}
        />
        <Route
          path="/Contact"
          component={Contact}
        />
    </PageWrapper>
    </Router>
  );
}

export default App;
