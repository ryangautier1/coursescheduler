import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Planner from './pages/Planner';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import CourseDetail from './pages/CourseDetail/index.js';
import InstructorDetail from './pages/InstructorDetail/index';
import Signup from './pages/Signup/index';
import Login from './pages/Login/index';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './utils/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home name={"Joe Smith"} />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/planner'>
            <Planner />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/search-results'>
            <SearchResults />
          </Route>
          <Route path='/course-detail'>
            <CourseDetail />
          </Route>
          <Route path='/instructor-detail'>
            <InstructorDetail />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
