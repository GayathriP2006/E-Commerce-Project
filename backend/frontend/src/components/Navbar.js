import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

import { WishlistContext }
from "../context/WishlistContext";

import {
ThemeContext
}
from "../context/ThemeContext";
function Navbar({
  search,
  setSearch
}) {

  const { cartItems } =
    useContext(CartContext);

  const { wishlistItems } =
    useContext(WishlistContext);
const {
darkMode,
setDarkMode
}
=
useContext(
ThemeContext
);
  return (
    <nav className="navbar">

      <div className="logo">
        🛒 ShopEase
      </div>

      {
        setSearch &&
        (
          <input
            type="text"
            className="search-box"
            placeholder="Search products..."
            value={search}
            onChange={(e)=>
              setSearch(
                e.target.value
              )
            }
          />
        )
      }
<button
className="dark-btn"
onClick={() =>
setDarkMode(
!darkMode
)
}
>
{
darkMode
?
"☀️"
:
"🌙"
}
</button>
      <div className="nav-links">

        <Link to="/home">
          Home
        </Link>

        <Link to="/wishlist">
          ❤️ {wishlistItems.length}
        </Link>

        <Link to="/cart">
          🛒 {cartItems.length}
        </Link>
<Link to="/orders">
  Orders
</Link>
        <Link to="/">
          Logout
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
