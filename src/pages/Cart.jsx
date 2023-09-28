import Mycart from "../components/cart/Mycart";
import NavBar from "../components/NavBar";
import '../style/Cart.css';

export default function Cart() {
    return (
        <>
        <h1 className="title">Cart</h1>
        <NavBar />
        <Mycart />
        </>
    )
}