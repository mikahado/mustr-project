import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation'
import Creations from './Creations'
import Create from './Create'
import About from './About'
import './App.css';


function App() {

  const [creations, setCreations] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/creations")
    .then(resp => resp.json())
    .then(data => {
        setCreations(data)
    })
}, []) 
  
  return (
    
  <Router> 
      <Navigation />    

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/creations" render={(props) => <Creations {...props} creations={creations}/>}/>
          <Route exact path="/creations/new" component={Create} creations={creations}/>
          <Route path="/about" component={About} /> 
        </Switch>
      </div>

  </Router>
  );
}

export default App;