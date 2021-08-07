import React from 'react';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';

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
