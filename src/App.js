import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';

const NecklacesPage = () => (
  <div><h1>Necklaces</h1></div>
)

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/necklaces' component={NecklacesPage} />
    </Switch>
    </div>
  );
}

export default App;
