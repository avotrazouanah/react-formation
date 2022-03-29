import '@/styles/Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '@/router/routes';

const Navigation = () => {
  return (
    <div className="navigation topnav">
      <NavLink to={routes.HOME}>Home</NavLink>
      <NavLink to={routes.CHARACTER}>Character</NavLink>
      <NavLink to={routes.FAVORITES}>Favorite</NavLink>
    </div>
  );
};

export default Navigation;
