import React from 'react';
import Home from './pages/Home/index.js';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Home name={"Joe Smith"}/>
    </div>
  );
}

export default App;
