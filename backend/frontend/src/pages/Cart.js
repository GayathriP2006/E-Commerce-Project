import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  CartContext
} from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useContext(CartContext);

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );

  return (
    <>
      <Navbar />

      <div className="cart-container">

        <h1>
          🛒 Shopping Cart
        </h1>

        <br />

        {
          cartItems.length === 0 ? (

            <h2>
              Cart Empty
            </h2>

          ) : (

            <>
              {
                cartItems.map(
                  (item) => (

                    <div
                      className="cart-card"
                      key={item._id}
                    >

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹{item.price}
                      </p>

                      <div>

                        <button
                          onClick={() =>
                            decreaseQty(
                              item._id
                            )
                          }
                        >
                          -
                        </button>

                        <span
                          style={{
                            margin:
                              "0 10px"
                          }}
                        >
                          {
                            item.quantity
                          }
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(
                              item._id
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      <br />

                      <button
                        onClick={() =>
                          removeFromCart(
                            item._id
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  )
                )
              }

              <br />

              <h2>
                Total :
                ₹{totalPrice}
              </h2>

              <br />

              <Link
                to="/checkout"
              >
                <button
                  className="checkout-btn"
                >
                  Proceed To Checkout
                </button>
              </Link>

            </>

          )
        }

      </div>

    </>
  );
}

export default Cart;