import '../styles/Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router/routes';

const Navigation = () => {
  return (
    <div className="navigation topnav">
      <ul>
        <Link to={routes.HOME}>Home</Link>
        <Link to={routes.CHARACTER}>Character</Link>
        <Link to={routes.FAVORITES}>Favorite</Link>
      </ul>
    </div>
  );
};

export default Navigation;
