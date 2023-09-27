import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
