import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './components/user/SignUp';
import Cart from './pages/Cart';
import Product from './components/products/Product';
import ProductList from './components/products/ProductList';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation/';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Products" element={<ProductList />} />
            <Route path="/Confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}