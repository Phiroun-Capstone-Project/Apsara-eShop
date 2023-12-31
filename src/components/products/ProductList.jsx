import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../API/Products";
import "../../style/products.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    // getting all product data from API
    useEffect(() => {
        const fetchData = async () => {
            const productsData = await fetchAllProducts();
            setProducts(productsData);
        };
        fetchData();
    }, []);

    const filterProducts = search
        ? products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    function addToCart(product) {
        const existingCart = JSON.parse(localStorage.getItem("MyCart")) || [];
        console.log("Item Added to Cart");
        const existingProduct = existingCart.findIndex(
            (item) => item.id === product.id
        );

        if (existingProduct !== -1) {
            existingCart[existingProduct].quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("MyCart", JSON.stringify(existingCart));
    }

    return (
        <div>
            <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Our Latest Products</h1>
            </div>
            <div className="products">
                {filterProducts
                    ? filterProducts.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <h5 className="card-title mb-0">
                                    {product.title.substring(0, 12)}...
                                </h5>
                                <img src={product.image} width="50px" height="50px" />
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-dark btn-lg px-3 py-1"
                                >
                                    <span>Add to cart</span>
                                </button>
                                <button
                                    onClick={() => {
                                        navigate(`/Product/${product.id}`);
                                    }}
                                    className="btn btn-dark btn-lg px-3 py-1"
                                >
                                    <span>See Details</span>
                                </button>
                            </div>
                        );
                    })
                    : null}
            </div>
        </div>
    );
}
