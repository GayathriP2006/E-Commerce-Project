import {
  useEffect,
  useState
}
from "react";

import axios from "axios";

import Navbar
from "../components/Navbar";

function OrderHistory(){

  const [orders,setOrders]
  = useState([]);

  useEffect(()=>{

    loadOrders();

  },[]);

  const loadOrders =
  async() => {

    const res =
    await axios.get(
      "http://localhost:5000/api/orders"
    );

    setOrders(
      res.data
    );

  };

  return(

    <>
      <Navbar />

      <div
      className="orders-page"
      >

        <h1>
          My Orders
        </h1>

        {
          orders.map(
            order => (

              <div
              className="order-card"
              key={order._id}
              >

                <h3>
                  {
                    order.customerName
                  }
                </h3>

                <p>
                  {
                    order.phone
                  }
                </p>

                <p>
                  ₹{
                    order.totalPrice
                  }
                </p>

                <p>
                  {
                    new Date(
                    order.createdAt
                    )
                    .toLocaleDateString()
                  }
                </p>

              </div>

            )
          )
        }

      </div>
    </>

  );

}

export default OrderHistory;