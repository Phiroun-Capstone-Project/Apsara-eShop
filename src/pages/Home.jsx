import NavBar from "../components/NavBar";
import Products from "../components/products/Products"
import "../style/Home.css";

export default function Home() {
    return (
        <>
        <h1>Latest Products</h1>
        <NavBar />
        <Products />
        </>
    );
}