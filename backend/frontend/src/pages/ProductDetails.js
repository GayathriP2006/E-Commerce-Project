import {
  useState,
  useEffect,
  useContext
} from "react";

import axios from "axios";

import {
  useParams,
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  CartContext
} from "../context/CartContext";

import {
  WishlistContext
} from "../context/WishlistContext";

import { toast } from "react-toastify";

function ProductDetails() {

  const { id } = useParams();

  const [product,setProduct]
  = useState(null);

  const [relatedProducts,
  setRelatedProducts]
  = useState([]);

  const { addToCart }
  = useContext(CartContext);

  const { addToWishlist }
  = useContext(WishlistContext);
// eslint-disable-next-line
  
      useEffect(() => {

  const fetchData = async () => {

    try {

      const productRes =
      await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      setProduct(productRes.data);

      const allProducts =
      await axios.get(
        "http://localhost:5000/api/products"
      );

      const related =
      allProducts.data.filter(
        item =>
          item.category ===
          productRes.data.category &&
          item._id !==
          productRes.data._id
      );

      setRelatedProducts(related);

    } catch(error) {

      console.log(error);

    }

  };

  fetchData();

}, [id]);
  if(!product){

    return (
      <>
        <Navbar />
        <h2
        style={{
          textAlign:"center",
          marginTop:"50px"
        }}
        >
          Loading Product...
        </h2>
      </>
    );
  }

  return (

    <>
      <Navbar />

      <div
      className="product-details"
      >

        <div
        className="product-left"
        >

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div
        className="product-right"
        >

          <h1>
            {product.name}
          </h1>

          <h2>
            ₹{product.price}
          </h2>

          <p className="rating">
            {
              "⭐".repeat(
                product.rating || 4
              )
            }
            {
              "☆".repeat(
                5 -
                (product.rating || 4)
              )
            }
          </p>

          <p>
            Category :
            {" "}
            {product.category}
          </p>

          <p>
            🚚 Free Delivery
          </p>

          <p>
            {product.description ||
            "Premium quality product with best performance and reliability."}
          </p>

          <button
          className="detail-btn"
          onClick={() => {

            addToCart(product);

            toast.success(
              "Added To Cart"
            );

          }}
          >
            Add To Cart
          </button>

          <button
          className="wishlist-btn"
          onClick={() => {

            addToWishlist(product);

            toast.success(
              "Added To Wishlist"
            );

          }}
          >
            ❤️ Wishlist
          </button>

        </div>

      </div>

      <h2
      className="related-title"
      >
        Related Products
      </h2>

      <div
      className="related-products"
      >

        {
          relatedProducts.map(
            item => (

              <div
              className="related-card"
              key={item._id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h4>
                  {item.name}
                </h4>

                <p>
                  ₹{item.price}
                </p>

                <Link
                to={`/product/${item._id}`}
                >
                  View Details
                </Link>

              </div>

            )
          )
        }

      </div>

    </>

  );

}

export default ProductDetails;