import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import '../App.css'


const Header = () => {
  let cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
  console.log(cartarr, "1234", cartarr.length);
  let cartLength = cartarr.length;

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [menus, setMenus] = useState()

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const plus = (item, i) => {  
    setQuantity(quantity + 1);
  };
  const minus = (item, i) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const menu = (e) => {
    alert(e.target)
  } 

  return (
    <div
      className="header flex justify-between fixed shadow uppercase text-xl font-extralight bg-white"
      style={{
        width: "100%",
        left: 0,
        top: 0,
        alignItems: "center",
        zIndex: 100,
        // padding: "10px 10%",
      }}
    >
      <div className="header-logo " style={{ minWidth: "60px", width: "60px" }}>
        <img
          src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
          alt="image"
          style={{ width: "100%" }}
        />
      </div>
      <div className="menu hidden  md:flex gap-20 ">
  <Link to="/" style={{ textDecoration: "none" }}>Men</Link>
  <Link to="/women" style={{ textDecoration: "none" }}>Women</Link>
  <Link to="/girls" style={{ textDecoration: "none" }}>Girls</Link>
  <Link to="/about" style={{ textDecoration: "none" }}>About</Link>
  {/* <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link> */}
</div>

      <div className="search hidden lg:block">
        <input
          type="text"
          name=""
          id=""
          className=" border-spacing-6 rounded-full outline-none px-4 py-1"
          style={{ border: "1px solid #aaa" }}
        />
      </div>
      <div className="cart-btn flex items-center gap-2 ">
        <div className="btn" style={{ position: "relative" }}>
          <button className="text-xl flex items-center gap-1" onClick={showDrawer}>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="text-xl hidden md:block text-gray-600">cart</span>
          </button>
          <span
            className="cart text-sm text-red-700 font-bold"
            style={{ position: "absolute", top: "-12px", left: "16px" }}
          >
            {cartLength}
          </span>
        </div>
      <div className="menubar md:hidden font-bold text-5xl cursor-pointer mt-[-12px]  " onClick={(e)=> menu(e)}>&#8801;</div>
      </div>

      <Drawer title="Basic Drawer border" onClose={onClose} open={open}>
        <div className="ProductDisplay border p-1 ">
          {cartarr.map((cart, i) => (
            <div
              className="cartitems flex gap-6 mb-3 "
              style={{ alignItems: "center" }}
            >
              <div className="img-div" style={{ width: "60px" }}>
                <img src={cart.image} alt="" className="w-100" />
              </div>
              <div className="price">
                <h5>$ {quantity ? cart.price * quantity : cart.price}</h5>
              </div>
              <div className="details " style={{ fontSize: "12px" }}>
                <p className="">
                  {cart.name ? cart.name.slice(0, 8) : "No Name"}
                </p>
              </div>
              <div className="o-details flex gap-2 ">
                <div
                  className="minue border px-2 cursor-pointer hover:shadow-xl  "
                  onClick={() => {
                    minus(cart, i);
                  }}
                >
                  -
                </div>
                <div className="q-display border px-2 ">
                  <p>{quantity}</p>
                </div>
                <div
                  className="plus border px-2 cursor-pointer hover:shadow-xl "
                  onClick={() => {
                    plus(cart, i);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          ))}
          <div className="total-price">
            {/* <h5>$ {cartarr.length*price}</h5> */}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
