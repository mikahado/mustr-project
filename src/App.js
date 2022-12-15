import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation'
import Creations from './Creations'
import CreateNew from './CreateNew'
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

  const handleNewCreation = (newCreation) => {
    setCreations([...creations, newCreation])
  }

  return (
    
  <Router> 
    
        <Navigation />  
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/creations" element={<Creations creations={creations} />} />
          <Route exact path="/creations/new" element={<CreateNew handleNewCreation={handleNewCreation} />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
     
  </Router>
  );
}

export default App;