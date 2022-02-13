import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';

const hats = () => (
  <div>
    <h2>hats</h2>
  </div>
)
const jackets = () => (
  <div>
    <h2>jackets</h2>
  </div>
)


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={hats} />
      <Route path='/jackets' component={jackets} />

    </div>
  );
}

export default App;
