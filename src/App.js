import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Route from './route/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';


function App() {
  return (
    <div className='container'>
      <Navbar/>


      <Route/>
    </div>
  );
}

export default App;
