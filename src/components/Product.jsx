import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

/**
 * Renders product details based on the `id` parameter obtained from the URL.
 * Makes an API call to retrieve the product details and updates the state accordingly.
 * Displays a loading message or the product details based on the loading status.
 *
 * @returns {JSX.Element} The rendered Product component.
 */
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    /**
     * Fetches the product details from the API and updates the state.
     */
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  
  /**
   * Renders a loading message.
   *
   * @returns {JSX.Element} The rendered Loading component.
   */
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6 style={{lineHeight:2}}">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
      </>
    );
  };
  
  /**
   * Renders the product details.
   *
   * @returns {JSX.Element} The rendered ShowProduct component.
   */
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">Price: ${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-dark btn-lg px-3 py-1">
            Add to Cart
          </button>
          <NavLink
            to="/cart"
            className="btn btn-dark ms-3 px-4 py-2"
          >
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
export default Product;