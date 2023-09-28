import { Link } from 'react-router-dom';
import '../style/NavBar.css';

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <h2> <a className="squiggle"> APSARA eSHOP </a></h2>
            <ul>
                <li> <Link to="/">Home</Link> </li> 
                <li> <Link to="/Profile">Profile</Link> </li> 
                <li> <Link to="/Cart">Cart</Link> </li> 
                <li> <Link to="/CheckOut">Checkout</Link> </li>
            </ul>
        </nav>
 );
}