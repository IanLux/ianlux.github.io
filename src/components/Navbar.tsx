import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Skills
        </NavLink>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
