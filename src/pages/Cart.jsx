import MyCart from "../components/cart/MyCart"
import Navbar from "../components/Navbar"
import '../style/cart.css';

export default function Cart() {
    return (
        <>
        <h1 className="title">Cart</h1>
        <Navbar />
        <MyCart />
        </>
    )
}