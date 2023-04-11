import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Cookies from './Cookies';
import Nav from './Nav';
import './Nav.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact="true" path="/" Component={Home} />
          <Route exact="true" path="/chips" Component={Chips} />
          <Route exact="true" path="/soda" Component={Soda} />
          <Route exact="true" path="/cookies" Component={Cookies} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
