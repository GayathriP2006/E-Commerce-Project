import { useEffect,useState }
from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

function Orders() {

  const [orders,setOrders]
  = useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders =
  async () => {

    try {

      const res =
      await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(
        res.data
      );

    } catch(error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div
      className="orders-container"
      >

        <h1>
          Order History
        </h1>

        <br />

        {
          orders.map(
            order => (

              <div
              key={order._id}
              className="order-card"
              >

                <h3>
                  Order ID:
                </h3>

                <p>
                  {order._id}
                </p>

                <p>
                  Total:
                  ₹{order.totalAmount}
                </p>

                <p>
  Items:
  {
    order.products?.length || 0
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

export default Orders;