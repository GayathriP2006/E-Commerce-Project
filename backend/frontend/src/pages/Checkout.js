import { useState,useContext }
from "react";

import axios from "axios";

import { useNavigate }
from "react-router-dom";

import {
  CartContext
}
from "../context/CartContext";

function Checkout(){

  const navigate =
  useNavigate();

  const {
    cartItems
  } = useContext(
    CartContext
  );

  const [name,setName]
  = useState("");

  const [address,setAddress]
  = useState("");

  const [phone,setPhone]
  = useState("");

  const totalPrice =
  cartItems.reduce(
    (total,item)=>
      total +
      item.price *
      item.quantity,
    0
  );

  const placeOrder =
  async() => {

    try{

      await axios.post(
        "http://localhost:5000/api/orders",
        {

          customerName:name,

          address,

          phone,

          items:cartItems,

          totalPrice

        }
      );

     navigate("/orders");

    }catch(error){

      console.log(error);

    }

  };

  return(

  <div className="checkout">

    <div className="checkout-card">

      <h1>
        Delivery Information
      </h1>

      <input
        type="text"
        placeholder="👤 Full Name"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="📞 Phone Number"
        value={phone}
        onChange={(e)=>
          setPhone(e.target.value)
        }
      />

      <textarea
        placeholder="🏠 Delivery Address"
        value={address}
        onChange={(e)=>
          setAddress(e.target.value)
        }
      />

      <div className="order-summary">

        <h3>
          Order Summary
        </h3>

        <h2>
          ₹{totalPrice}
        </h2>

      </div>

      <button
        className="place-order-btn"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>

  </div>

);

}

export default Checkout;