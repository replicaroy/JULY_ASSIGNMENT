import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

let cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];

const addToCart = (item) => {
  if (!cartarr.some(cartItem => cartItem.id === item.id)) {
    cartarr.push(item);
    localStorage.setItem("cartitems", JSON.stringify(cartarr));
    console.log("Item added to cart:", cartarr);
  } else {
    console.log("Item already in cart");
  }
};

const removeFromCart = (item) => {
  cartarr = cartarr.filter(cartItem => cartItem.id !== item.id);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
  console.log("Item removed from cart:", cartarr);
};

const Hero = ({ data }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>     
      <div className="containers min-h-screen" style={{ padding: "1% 10%", margin: "auto", marginTop: "30px" }}>
        <div className="main-item custom-grid">
          {data.map((item, i) => (
            <div className="item rounded shadow-md m-auto" style={{ maxWidth: 300 }} key={i}>
              <div className="img" style={{ width: '100%' }}>
                <img src={item.image} alt="image" />
              </div>
              <div className="details text-md text-gray-700 px-2 py-2">
                <p>{item.name ? item.name.slice(0, 30) : "No Name"}</p>
              </div>
              <div className="desc flex justify-between py-2 px-2 text-xl text-gray-800">
                <p>$ {item.price}</p>
                <p className="text-sm">Rating {item.rating}</p>
              </div>
              <div className="btn-div">
                <button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
                <button className="btn" onClick={() => removeFromCart(item)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
