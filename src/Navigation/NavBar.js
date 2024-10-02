import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#96FF96"}}>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
