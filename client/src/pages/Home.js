import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home
      <div><Link to='/search-results'>Search</Link></div>
    </div>
  )
}

export default Home;