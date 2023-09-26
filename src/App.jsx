import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </>
  )
}

export default App
