import { useContext } from "react";

import Navbar from "../components/Navbar";

import {
  WishlistContext
}
from "../context/WishlistContext";

function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist
  } = useContext(
    WishlistContext
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          padding:"30px"
        }}
      >

        <h1>
          ❤️ Wishlist
        </h1>

        <br />

        {
          wishlistItems.length === 0
          ? (
            <h3>
              Wishlist Empty
            </h3>
          )
          : (

            wishlistItems.map(
              item => (

                <div
                  key={item._id}
                  style={{
                    background:"white",
                    padding:"20px",
                    marginBottom:"15px",
                    borderRadius:"10px"
                  }}
                >

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() =>
                      removeFromWishlist(
                        item._id
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              )
            )

          )
        }

      </div>
    </>
  );
}

export default Wishlist;