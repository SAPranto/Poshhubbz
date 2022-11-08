import React from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="navbar">
      
      <div className="navbar-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shoe">Shoes</Link>
          </li>
          <li>
            <Link href="/sandals">Sandals</Link>
          </li>
          <li>
            <Link href="/bags">Bags</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <h1 className="logo">Posh<span className="hub">Hubz</span></h1>
    
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <BsCart4 />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
