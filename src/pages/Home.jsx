import NavBar from "../components/NavBar";
import Products from "../components/Products/Products"
import "../style/home.css";

export default function Home() {
    return (
        <>
        <h1>Welcome to CapyBara Market</h1>
        <NavBar />
        <Products />
        </>
    );
}