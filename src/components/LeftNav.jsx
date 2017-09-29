import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <div className="left-nav__items">
          <Link className="left-nav__item" to="/discover">Discover Camps</Link>
          <Link className="left-nav__item" to="/favorites">Your Favorites</Link>
        </div>
      </div>
    );
  }
}

export default LeftNav;
