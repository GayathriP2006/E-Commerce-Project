import {
  useEffect,
  useState,
  useContext
}
from "react";

import axios from "axios";

import {
  Link
}
from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  CartContext
}
from "../context/CartContext";

import {
  WishlistContext
}
from "../context/WishlistContext";

import { toast } from "react-toastify";
const banners = [

{
image:
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",

title:
"iPhone 15 Series",

subtitle:
"Up To 40% OFF"
},

{
image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

title:
"Laptop Festival",

subtitle:
"Best Deals On Laptops"
},

{
image:
"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",

title:
"Fashion Collection",

subtitle:
"Trending Styles 2026"
}

];
function Home() {

const [currentBanner, setCurrentBanner] = useState(0);
  const [products,setProducts]
  = useState([]);

  const [search,setSearch]
  = useState("");

  const [category,setCategory]
  = useState("All");

  const { addToCart } =
    useContext(CartContext);

  const {
    addToWishlist
  } = useContext(
    WishlistContext
  );

  useEffect(() => {

    fetchProducts();

  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {

  const interval =
  setInterval(() => {

    setCurrentBanner(
      prev =>
      (prev + 1) %
      banners.length
    );

  }, 3000);

  return () =>
  clearInterval(interval);

}, []);
  const fetchProducts =
  async () => {

    try {

      const res =
      await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(
        res.data
      );

    } catch(error) {

      console.log(error);

    }
  };

  const filteredProducts =
products.filter(product => {

  const searchMatch =
  product.name
  .toLowerCase()
  .includes(
    search.toLowerCase()
  );

  const categoryMatch =
  category === "All" ||
  product.category === category;

  return (
    searchMatch &&
    categoryMatch
  );

});

const trendingProducts =
products
.filter(
  product =>
  (product.rating || 4) >= 4
)
.slice(0,4);
  

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <section className="hero-pro">

  <div className="hero-left">

    <span className="offer-badge">
      🔥 MEGA SALE
    </span>

    <h1>
      {banners[currentBanner].title}
    </h1>

    <p>
      {banners[currentBanner].subtitle}
    </p>

    <button className="shop-btn">
      Shop Now
    </button>

  </div>

  <div className="hero-right">

    <img
      src={banners[currentBanner].image}
      alt="banner"
    />

  </div>

</section>

      <div
      className="categories"
      >

        <button
        onClick={() =>
          setCategory(
            "All"
          )
        }>
          All
        </button>

        <button
        onClick={() =>
          setCategory(
            "Mobiles"
          )
        }>
          Mobiles
        </button>

        <button
        onClick={() =>
          setCategory(
            "Laptops"
          )
        }>
          Laptops
        </button>

        <button
        onClick={() =>
          setCategory(
            "Fashion"
          )
        }>
          Fashion
        </button>

        <button
        onClick={() =>
          setCategory(
            "Electronics"
          )
        }>
          Electronics
        </button><button onClick={() => setCategory("Fashion")}>
  Fashion
</button>

<button onClick={() => setCategory("Accessories")}>
  Accessories
</button>

<button onClick={() => setCategory("Food")}>
  Food
</button>

      </div>
<div className="section-title">
  🔥 Trending Products
</div>

<div className="trending-container">

  {
    trendingProducts.map(
      product => (

        <div
        className="trending-card"
        key={product._id}
        >

          <img
            src={product.image}
            alt={product.name}
          />

          <h4>
            {product.name}
          </h4>

          <p>
            ₹{product.price}
          </p>

        </div>

      )
    )
  }

</div>

<div className="section-title">
  All Products
</div>
      <div
      className="product-container"
      >

        {
          filteredProducts.map(
            product => (

              <div
              className="card"
              key={product._id}
              >

               <div className="image-wrapper">
<div className="best-seller">
  Best Seller
</div>
  <button
    className="wishlist-floating"
    onClick={() =>
      addToWishlist(product)
    }
  >
    ❤
  </button>

  <img
    src={product.image}
    alt={product.name}
  />

</div>

                <div
                className="card-body"
                >

                  <h3>
                    {product.name}
                  </h3>

                 <div className="price-section">

  <span className="new-price">
    ₹{product.price}
  </span>

  <span className="old-price">
    ₹{Math.round(product.price * 1.25)}
  </span>

</div>
                  <div className="rating">
  {"⭐".repeat(product.rating || 4)}
  {"☆".repeat(5 - (product.rating || 4))}
</div>
<p className="delivery">
  🚚 Free Delivery
</p>

                  <Link
                  to={`/product/${product._id}`}
                  >
                    View Details
                  </Link>

                  <br />
                  <br />

                  <button
                  onClick={() => {
  addToCart(product);

  toast.success(
    `${product.name} added to cart`
  );
}}
                  >
                    Add To Cart
                  </button>

                  

                </div>

              </div>

            )
          )
        }

      </div>
    </>
  );
}

export default Home;