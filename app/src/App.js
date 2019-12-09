import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/home'
import SidebarPage from './pages/sidebar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from='/' to='/home' exact/>
        <Route path='/home' component={HomePage}/>
        <Route path='/sidebar' component={SidebarPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
