import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <>
      <h1>HaT PaGe</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/hats' component={HatsPage}/>
      </Switch>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
