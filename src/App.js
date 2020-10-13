import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/projects' >
          <ProjectPage/>
          </Route>
        <Route path='/'>
          <About />
          <Portfolio />
          <Contact />
        </Route>
      </div>
    </Router>

  );
}

export default App;
