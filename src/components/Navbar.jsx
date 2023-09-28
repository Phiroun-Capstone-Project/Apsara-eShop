import { Link } from 'react-router-dom';
import '../style/navbar.css';

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <h2> <a className="brand-name"> APSARA eSHOP </a></h2>
            <ul>
                <li> <Link to="/">Home</Link> </li> 
                <li> <Link to="/Profile">Profile</Link> </li> 
                <li> <Link to="/Cart">Cart</Link> </li> 
                <li> <Link to="/CheckOut">Checkout</Link> </li>
            </ul>
        </nav>
 );
}