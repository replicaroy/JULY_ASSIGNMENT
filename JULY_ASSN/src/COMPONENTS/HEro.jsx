import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

let cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];

let quantity = 1
const AddtoCart = (item)=> {
  cartarr.push(item, quantity);
  console.log(cartarr);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
}

const Hero = ({data}) => {
  return (
    <>          
        <div class="container min-h-screen py-4  sm:px-6 md:px-15 xl:px-20 2xl-px-30">


          <div className="main-item custom-grid" style={{}}   >
          {data.map((item, i) => (
            <div className="item rounded shadow-md m-auto"  key={i}  >
              <div className="img" style={{width: '100%'}}>
                <img src={item.image} alt="image" />
              </div>
              <div className="details text-md text-gray-700 px-2 py-2"  >
                {/* <p>{typeof item.name === 'string' ? item.name.slice(0, 20) : ''}</p> */}
                <p>{item.name ? item.name.slice(0, 30) : "No Name"}</p>
              </div>
              <div className="desc flex justify-between py-2 px-2 text-xl text-gray-800">
                <p>$ {item.price}</p>
                <p className="text-sm">Rating {item.rating}</p>
              </div>
              <div className="btn-div flex justify-between px-2 mb-3">
                <button className="btn border shadow bg-slate-100" onClick={()=> AddtoCart(item)} >Add to Cart</button>
                <button className="btn border shadow bg-yellow-200 hover:text-black " onClick={()=> Prductdetails(item)} >Buy Now</button>              </div>
            </div>
          ))}
          </div>
        </div>
    
      {/* <div className="carousel"></div> */}
    </>
  );
};

export default Hero;

