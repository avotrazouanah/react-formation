import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation/Navigation';
import Router from './router/Router';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
