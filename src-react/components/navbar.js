import React from 'react';

const Navbar = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <h1 className="">Advent of Code</h1>
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <a href="https://adventofcode.com" className="navbar-item">
          Home
        </a>

        <a href="https://adventofcode.com" className="navbar-item">
          2020
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
