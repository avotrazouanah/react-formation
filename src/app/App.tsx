import './styles/App.css';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
import RouterApp from './router/RouterApp';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <RouterApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
