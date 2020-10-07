import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index.js';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home name={"Joe Smith"}/>
        </Route>
        <Route path='/search-results'>
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
