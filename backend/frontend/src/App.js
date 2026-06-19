import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route
}
from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminProducts from "./pages/AdminProducts";
import ProductDetails
from "./pages/ProductDetails";

import Wishlist
from "./pages/Wishlist";
import AdminOrders from "./pages/AdminOrders";
import Checkout
from "./pages/Checkout";

import Orders
from "./pages/Orders";
import Success
from "./pages/Success";
import {
useContext
}
from "react";
import Admin from "./pages/Admin";
import OrderHistory
from "./pages/OrderHistory";
import {
ThemeContext
}
from "./context/ThemeContext";
function App() {
const {
darkMode
}
=
useContext(
ThemeContext
);
  return (

    <div
className={
darkMode
?
"dark-mode"
:
""
}
>

<BrowserRouter>
<ToastContainer />
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
<Route
  path="/checkout"
  element={<Checkout />}
/>

<Route
  path="/orders"
  element={<Orders />}
/>
<Route
path="/success"
element={<Success />}
/>
<Route
  path="/admin"
  element={<Admin />}
/>
<Route
  path="/admin/products"
  element={<AdminProducts />}
/>
<Route
  path="/admin/orders"
  element={<AdminOrders />}
/>
<Route
path="/orders"
element={<OrderHistory />}
/>
      </Routes>

    </BrowserRouter>
</div>
  );
}

export default App;