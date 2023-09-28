import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './components/users/Signup';
import Cart from './pages/Cart';
import Product from './components/products/Product';
import Products from './components/products/Products'
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;

