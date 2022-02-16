import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../src/ components/Home/Home';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </>
  );
}
export default App;
