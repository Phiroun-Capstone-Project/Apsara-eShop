import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
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
        </Routes>
      </Router>
    </>
  )
}
export default App
