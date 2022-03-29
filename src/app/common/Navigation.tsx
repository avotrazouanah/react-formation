import '../styles/Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation topnav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
      </ul>
    </div>
  );
};

export default Navigation;
