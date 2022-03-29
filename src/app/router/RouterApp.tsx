import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from '../components/Details';
import Favorite from '../components/Favorite';
import Home from '../components/Home';

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default RouterApp;
