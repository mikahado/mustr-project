import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation'
import Creations from './Creations'
import Create from './Create'
import './App.css';


function App() {
  return (
    
  <Router> 
      <Navigation />    

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/creations" component={Creations} />
          <Route exact path="/creations/new" component={Create}/>
          {/* <Route path="/creations/:id" />  */}
          <Route path="/about" /> 
        </Switch>
      </div>

  </Router>
  );
}

export default App;