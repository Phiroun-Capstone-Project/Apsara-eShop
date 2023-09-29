import Navbar from "../components/Navbar";
import ProductList from "../components/products/ProductList"
import "../style/home.css";

export default function Home() {
    return (
        <>
        <Navbar />
        <ProductList />
        </>
    );
}