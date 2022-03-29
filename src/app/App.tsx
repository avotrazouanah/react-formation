import './styles/App.css';
import axios from 'axios';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './common/Navigation';
import { BASE_URL, getCharacters } from './provider/CharacterProvider';
import RouterApp from './router/RouterApp';

const App = () => {
  // const [char]

  // const a = () => {
  //   axios.get('http://hp-api.herokuapp.com/api/characters').then((res) => {
  //     const persons = res.data;
  //     console.log(persons);
  //     // this.setState({ persons });
  //   });
  // };
  // a();

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
