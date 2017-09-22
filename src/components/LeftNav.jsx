import React, { Component } from 'react';

class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <ul className="left-nav__items">
          <li className="left-nav__item">Home</li>
          <li className="left-nav__item">Find Camps</li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
