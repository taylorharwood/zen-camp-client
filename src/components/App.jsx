import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopNav from './TopNav';
import LeftNav from './LeftNav';
import DiscoverLayout from '../layouts/DiscoverLayout';
import FavoritesLayout from '../layouts/FavoritesLayout';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <div className="app__body">
          <LeftNav />

          <div className="app__content">
            <Route exact path="/" component={DiscoverLayout} />
            <Route path="/discover" component={DiscoverLayout} />
            <Route path="/favorites" component={FavoritesLayout} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
