import React from 'react'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import AboutPage from './pages/about-page/about-page.component';
import ItemDetail from './pages/item-detail/item-detail.component';


const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route path='/item/:slug' component={ItemDetail} />
    </Switch>
  </div>
);


export default App;
