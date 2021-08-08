import React from 'react';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import Particles from 'react-particles-js';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
