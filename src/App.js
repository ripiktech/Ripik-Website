import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter, Route } from "react-router-dom";
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import WhoAreWe from './components/pages/WhoAreWe';
import WhatWeDo from './components/pages/WhatWeDo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/who-are-we' component={WhoAreWe} />
          <Route path='/what-we-do' component={WhatWeDo}/>
        </Switch>
        </Router>
    </>
  );
}

export default App;
