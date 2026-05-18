import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/pageicon.png" alt="Logo" />
        </div>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Skills
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
