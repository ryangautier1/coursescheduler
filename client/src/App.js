import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search-results'>
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
