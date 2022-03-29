import './styles/App.css';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
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
