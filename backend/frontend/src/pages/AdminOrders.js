import {
  useEffect,
  useState
}
from "react";

import axios from "axios";

function AdminOrders() {

  const [orders,setOrders]
  = useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

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

  return (

    <div
    className="admin-orders"
    >

      <h1>
        All Orders
      </h1>

      {
        orders.map(
          order => (

            <div
            className="order-card"
            key={order._id}
            >

              <h3>
                {order.customerName}
              </h3>

              <p>
                {order.phone}
              </p>

              <p>
                ₹{order.totalPrice}
              </p>

            </div>

          )
        )
      }

    </div>

  );

}

export default AdminOrders;