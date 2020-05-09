import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Width from './Width'
import Height from './Height';
import TopBar from './TopBar';
import Home from './HomePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path='/width' component={Width} />
          <Route path='/height' component={Height} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
