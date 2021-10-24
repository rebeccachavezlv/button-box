import React from 'react'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import AboutPage from './pages/about-page/about-page.component';
import ItemDetail from './pages/item-detail/item-detail.component';

import { ShopItems } from './shop-items';

class App extends React.Component {
  state = {
    items: ShopItems
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' >
            <HomePage items={this.state.items} />
          </Route>
          <Route exact path='/about' component={AboutPage} />
          <Route path='/item/:slug'>
            <ItemDetail items={this.state.items} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
