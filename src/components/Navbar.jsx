import { Link } from 'react-router-dom';
import '../style/navbar.css';

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <h2> <a className="brand-name"> APSARA eSHOP </a></h2>
            <ul>
                <li> <Link to="/">Home</Link> </li> 
                <li> <Link to="/Profile" className='btn btn-outline-dark'>
                                <i className="fa fa-sign-in me-1"></i>
                                <span className="hide-sm">Login</span></Link> </li> 
                <li> <Link to="/Cart" className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-shopping-cart me-1"></i>
                                <span className="hide-sm">Cart</span></Link> </li>
            </ul>
        </nav>
 );
}