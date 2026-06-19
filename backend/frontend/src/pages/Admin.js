import { Link } from "react-router-dom";

function Admin() {

  return (

    <div className="admin-page">

      <h1>Admin Dashboard</h1>

      <div className="admin-grid">

        <Link
          to="/admin/products"
          className="admin-card"
        >
          📦 Manage Products
        </Link>

        <Link
          to="/admin/orders"
          className="admin-card"
        >
          🧾 Manage Orders
        </Link>

      </div>

    </div>

  );

}

export default Admin;
