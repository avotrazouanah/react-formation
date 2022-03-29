import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
