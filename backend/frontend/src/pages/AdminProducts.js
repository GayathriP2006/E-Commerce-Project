import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function AdminProducts() {

  const [products,setProducts]
  = useState([]);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts =
  async () => {

    const res =
    await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(
      res.data
    );

  };

  const deleteProduct =
  async(id) => {

    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    loadProducts();

  };

  return (

    <div
    className="admin-products"
    >

      <h1>
        Manage Products
      </h1>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {
            products.map(
              product => (

                <tr
                key={product._id}
                >

                  <td>
                    {product.name}
                  </td>

                  <td>
                    ₹{product.price}
                  </td>

                  <td>
                    {product.category}
                  </td>

                  <td>

                    <button
                    onClick={() =>
                      deleteProduct(
                        product._id
                      )
                    }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>

  );

}

export default AdminProducts;