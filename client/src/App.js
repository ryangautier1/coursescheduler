import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index.js';
import SearchResults from './pages/SearchResults/index.js';
import Navbar from './components/Navbar';
import CourseDetail from './pages/CourseDetail/index.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home name={"Joe Smith"} />
        </Route>
        <Route path='/search-results'>
          <SearchResults />
        </Route>
        <Route path='/course-detail'>
          <CourseDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
