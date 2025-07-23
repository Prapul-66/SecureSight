import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2 className="brand-name">SecureSight</h2>
      </div>

      <div className="navbar-center">
        <Link to="/">Dashboard</Link>
        <a href="#cameras">Cameras</a>
        <a href="#scenes">Scenes</a>
        <a href="#incidents">Incidents</a>
        <a href="#users">Users</a>
      </div>

      <div className="navbar-right">
        <span className="user-name">Sai Prapul ▼</span>
      </div>
    </div>
  );
};

export default Navbar;
