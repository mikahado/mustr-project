import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation'
import Creations from './Creations'
import './App.css';


function App() {
  return (
    
  <Router> 
      <Navigation />    

      <div className="App">
        <Switch>
          <Route exact path="/" /> 
          <Route exact path="/creations" component={Creations} />
          <Route exact path="/creations/new" />
          <Route path="/creations/:id" /> 
          <Route path="/about" /> 
        </Switch>
      </div>

  </Router>
  );
}

export default App;