import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './components/Cart';
import Navbar from './components/Navbar';
import Sortlist from './components/Sortlist';
import Footer from './components/Footer';
import Cartitem from './components/Cartitem';
import Gcloth from './components/Gcloth';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/products" element={<Sortlist />} />
        <Route path="/cartitem" element={<Cartitem />} />
        <Route path="/Gcloth" element={<Gcloth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
